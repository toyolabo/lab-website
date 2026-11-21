// =====================================================================
// 【Markdown記事ローダー】 md.js（表示層の共通ヘルパー。ふだん触らない）
// ---------------------------------------------------------------------
// content/ フォルダの Markdown をサイトのデータに変換します。
//   content/articles/ … 研究記事      content/news/  … ニュース
//   content/topics/   … 研究トピック   content/axes/  … 基盤技術の3軸
//   content/collaboration/collaboration.md … 共同研究ページ
// 各フォルダ: list.txt に1行1スラッグ + <slug>.md（日本語）+ <slug>.en.md（英語・任意）
//
// 本文の書式（空行区切りで1ブロック）— content/ 配下の全フォルダ共通:
//   content/collaboration/ の本文（メッセージ部）、content/members/ のPI紹介文・
//   ギャラリーにも同じ書式が使えます。
//   ## 見出し
//   ## 長い見出し {nav=短い名前}     … 研究トピックのページの右側のボタンに出す名前（書かなければ見出しのまま）
//   段落テキスト（[表示名](URL) でリンク）
//   ![キャプション](images/x.png)   … 画像（本文の幅いっぱいに表示）
//   ![キャプション](images/x.png){width=300}   … 横 300px（{width=300px} も同じ）
//   ![キャプション](images/x.png){width=80%}   … 本文の幅の 80%（小数も可。読めない値は指定なし扱い）
//   [表示名](URL) だけの行           … リンクカード
//   YouTubeのURLだけの行             … 動画サムネイル
//   < で始まるブロック               … 生HTML（上級者向け）
//   ::article 記事のid              … 研究紹介のカード（研究トピックのページだけで出る。続けて書けば並べて出す）
//   ::paper BibTeXのキー            … 文献情報（data/publications.json の論文。研究トピックのページだけで出る。続けて書けば並べて出す）
//
// frontmatter の related:（記事・ニュース・トピック・軸で共通）
//   related: [rec, a-rec1]     … 関連ページを個別指定（トピック/軸/記事/ニュースのid）
//   related: [tag:rec]         … そのタグが付いた記事を全件表示
//   related: none              … 関連ページを非表示
//   （書かなければ従来どおりタグ等から自動生成）
// =====================================================================

function parseFrontMatter(src){
  const meta = {};
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if(!m) return { meta, rest: src };
  m[1].split(/\r?\n/).forEach(line=>{
    const i = line.indexOf(':'); if(i < 1) return;
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if(/^\[.*\]$/.test(v)) meta[k] = v.slice(1, -1).split(',').map(s=>s.trim()).filter(Boolean);
    else meta[k] = v.replace(/^['"]|['"]$/g, '');
  });
  return { meta, rest: src.slice(m[0].length) };
}

function parseBlocks(text){
  return text.split(/\r?\n\s*\r?\n/).map(b=>b.trim()).filter(Boolean).map(b=>{
    let m;
    if((m = b.match(/^(#{1,4})\s+(.+)$/))){
      // 見出しの後ろの {nav=短い名前} は、研究トピックのページの右側のボタンの名前（#119）
      const nv = m[2].match(/^(.*?)\s*\{\s*nav\s*=\s*([^}]*?)\s*\}\s*$/);
      return nv ? { type:'heading', level:m[1].length, text:nv[1].trim(), nav:nv[2] } : { type:'heading', level:m[1].length, text:m[2].trim() };
    }
    // 画像。後ろに {width=300}・{width=300px}・{width=80%} を書くと横幅を指定できる（Pandoc と同じ書き方。#38）
    if((m = b.match(/^!\[(.*?)\]\((\S+?)\)(?:\{\s*width\s*=\s*([^}\s]*)\s*\})?$/))) return { type:'image', src:m[2], caption:m[1], width:m[3] };
    if((m = b.match(/^\[([^\]]+)\]\((\S+?)\)$/))) return { type:'link', url:m[2], label:m[1] };
    if(/^https?:\/\/\S+$/.test(b) && /youtu/.test(b)) return { type:'video', url:b };
    if(b.startsWith('<')) return { type:'html', html:b };
    // 研究紹介のカード。「::article 記事のid」を 1 行に 1 本書く（続けて書けば並べて出す。研究トピックのページで使う。#119）
    const al = b.split(/\r?\n/).map(l=>l.trim());
    if(al.every(l=>/^::article\s+\S+$/.test(l))) return { type:'articles', ids: al.map(l=>l.replace(/^::article\s+/, '')) };
    // 文献情報。「::paper BibTeXのキー」を 1 行に 1 本書く（data/publications.json の論文を、研究紹介と同じ形で出す。研究トピックのページで使う）
    if(al.every(l=>/^::paper\s+\S+$/.test(l))) return { type:'papers', keys: al.map(l=>l.replace(/^::paper\s+/, '')) };
    const lines = b.split(/\r?\n/);
    if(lines.length && lines.every(l=>/^[-*]\s+/.test(l))) return { type:'list', items: lines.map(l=>l.replace(/^[-*]\s+/, '')) };
    return b.split(/\r?\n/).join('\n');
  });
}

function parseMd(src){
  const { meta, rest } = parseFrontMatter(src);
  return { meta, body: parseBlocks(rest) };
}

const pair = (a, b) => (b != null ? { ja: a, en: b } : a);
const pairBody = (ja, en) => (en && en.body && en.body.length) ? { ja: ja.body, en: en.body } : ja.body;

// ---- 種類ごとのデータ変換 ----
function mapArticle(slug, ja, en){
  const m = ja.meta || {}, me = (en && en.meta) || {};
  const item = {
    id: m.id || slug,
    kind: m.kind, date: m.date,
    year: m.year ? +m.year : undefined,
    url: m.url, figure: m.figure,
    // code: / project: … 研究紹介ページの文献情報に出すコードとプロジェクトページへのリンク（あれば）
    code: m.code, project: m.project,
    title: pair(m.title || '', me.title),
    axisTags: m.axes || m.axisTags || [],
    topicTags: m.topics || m.topicTags || [],
    body: pairBody(ja, en),
  };
  if(m.venue) item.venue = pair(m.venue, me.venue);
  if(m.bibtex) item.bibtex = m.bibtex;   // .bib ファイル名（content/articles/ に置く）
  // related: 関連ページの手動指定。idの配列（トピック/軸/記事/ニュースのid、'tag:<id>' でそのタグの記事全件）、'none' で非表示
  if(m.related) item.related = m.related === 'none' ? [] : (Array.isArray(m.related) ? m.related : [m.related]);
  if(m.summary) item.summary = pair(m.summary, me.summary);
  if(m.image) item.image = m.image;   // ニュースの一覧のサムネイル（無ければ本文の最初の画像）
  // figureCaption: ページ上部の図の真下に出す一行（出典など）
  if(m.figureCaption) item.figureCaption = pair(m.figureCaption, me.figureCaption);
  if(m.relatedArticles) item.relatedArticles = m.relatedArticles;
  return item;
}

function mapTopic(slug, ja, en){
  const m = ja.meta || {}, me = (en && en.meta) || {};
  return {
    id: m.id || slug, ja: m.name || m.title || '', en: m.en || '',
    // nameLines: トップのパネルで題が折り返すときの区切り（例: [マテリアルズ, インフォマティクス]）
    nameLines: m.nameLines || undefined,
    axes: m.axes || [], image: m.image || m.heroImage || undefined,
    desc: m.desc ? pair(m.desc, me.desc) : undefined,
    page: {
      catch: m.catch ? pair(m.catch, me.catch) : undefined,
      body: pairBody(ja, en),
      caseIds: m.cases || [],   // 記事idの配列。事例カードは記事データから自動生成
      // casesHeading: / casesLead: … 事例の欄の見出しと、見出しの下の文（書かなければ「代表的な研究事例」・文なし）
      casesHeading: m.casesHeading ? pair(m.casesHeading, me.casesHeading) : undefined,
      casesLead: m.casesLead ? pair(m.casesLead, me.casesLead) : undefined,
      related: m.related ? (m.related === 'none' ? [] : (Array.isArray(m.related) ? m.related : [m.related])) : undefined,
    },
  };
}

function mapAxis(slug, ja, en){
  const m = ja.meta || {}, me = (en && en.meta) || {};
  return {
    id: m.id || slug,
    name: pair(m.name || m.title || '', me.name || me.title), en: m.en || '',
    desc: m.desc ? pair(m.desc, me.desc) : undefined,
    // cardImage: トップページの 3 軸のカードの画像（書かなければ heroImage。軸のページ上部の画像は heroImage のまま）
    cardImage: m.cardImage || undefined,
    page: {
      heroImage: m.heroImage || m.image || undefined,
      catch: m.catch ? pair(m.catch, me.catch) : undefined,
      body: pairBody(ja, en),
      related: m.related ? (m.related === 'none' ? [] : (Array.isArray(m.related) ? m.related : [m.related])) : undefined,
    },
  };
}

// ---- メンバー（content/members/）----
// frontmatter の group で種別を指定: member(省略時) / collaborator / alumni / past / gallery
const parseBool = v => v === true || v === 'true';
function mapMember(slug, ja, en){
  const m = ja.meta || {}, me = (en && en.meta) || {};
  const group = m.group || 'member';
  if(group === 'gallery'){
    // 写真は他フォルダと同じ ![キャプション](画像パス) 書式。![キャプション]() で空スロット（ドラッグ&ドロップ待ち）
    const readPhotos = doc => (doc.body || []).map(b => {
      if(b && b.type === 'image') return { caption: b.caption || '', src: b.src };
      if(typeof b === 'string'){
        const em = b.match(/^!\[(.*?)\]\(\s*\)$/);
        if(em) return { caption: em[1], src: '' };
        const o = {}; let hit = false;   // 旧書式（id:/image:/caption: 行）も許容
        b.split(/\n/).forEach(l => { const km = l.match(/^(id|image|caption)\s*:\s*(.*)$/); if(km){ hit = true; o[km[1]] = km[2].trim(); } });
        if(hit) return { id: o.id, caption: o.caption || '', src: o.image || '' };
      }
      return null;
    }).filter(Boolean);
    const jaP = readPhotos(ja), enP = en ? readPhotos(en) : [];
    return {
      group, id: m.id || slug,
      title: pair(m.title || '', me.title),
      photos: jaP.map((p, i) => ({
        id: p.id || slug + '-' + (i + 1),
        src: p.src || '',
        caption: (enP[i] && enP[i].caption) ? { ja: p.caption || '', en: enP[i].caption } : (p.caption || ''),
      })),
    };
  }
  const item = { group, id: m.id || slug, name: pair(m.name || '', me.name) };
  // 日本語の名前（漢字・かな）のローマ字。日本語のページで名前の下に出す（英語版の name。名前がもともとローマ字なら出さない）
  if(me.name && me.name !== m.name && /[^\u0000-\u024f\s]/.test(m.name || '')) item.nameRoman = me.name;
  if(m.hue != null) item.hue = +m.hue;
  if(m.photo) item.photo = m.photo;
  if(parseBool(m.placeholder)) item.placeholder = true;
  if(parseBool(m.pi)) item.pi = true;
  if(m.role) item.role = pair(m.role, me.role);
  if(m.interest) item.interest = pair(m.interest, me.interest);
  if(m.affiliation) item.affiliation = pair(m.affiliation, me.affiliation);
  if(m.url) item.url = m.url;
  if(m.year) item.year = m.year;
  if(m.degree) item.degree = pair(m.degree, me.degree);
  if(m.next) item.next = pair(m.next, me.next);
  if(m.period) item.period = m.period;
  if(m.tags) item.tags = m.tags;
  const links = [];
  if(m.profile) links.push({ label: { ja: '詳細プロフィール', en: 'Full profile' }, url: m.profile });
  (Array.isArray(m.links) ? m.links : (m.links ? [m.links] : [])).forEach(u => links.push(u));
  if(links.length) item.links = links;
  const jaParas = (ja.body || []).filter(b => typeof b === 'string');
  if(jaParas.length){
    const enParas = en ? (en.body || []).filter(b => typeof b === 'string') : [];
    item.bio = enParas.length ? { ja: jaParas.join('\n\n'), en: enParas.join('\n\n') } : jaParas.join('\n\n');
  }
  return item;
}

const MAPPERS = { articles: mapArticle, news: mapArticle, topics: mapTopic, axes: mapAxis, members: mapMember };

// base: 'content/articles/' などフォルダURL（index.html からの相対パス）
export async function loadCollection(base, kind){
  const mapItem = MAPPERS[kind] || mapArticle;
  const abs = new URL(base, location.href);
  let listTxt;
  try {
    const r = await fetch(new URL('list.txt', abs));
    if(!r.ok) return [];
    listTxt = await r.text();
  } catch(e) { return []; }
  const slugs = listTxt.split(/\r?\n/).map(s=>s.trim()).filter(s=>s && !s.startsWith('#'));
  const items = await Promise.all(slugs.map(async slug=>{
    try {
      const jaR = await fetch(new URL(slug + '.md', abs));
      if(!jaR.ok){ console.warn('MDが見つかりません:', base + slug + '.md'); return null; }
      const ja = parseMd(await jaR.text());
      let en = null;
      try { const enR = await fetch(new URL(slug + '.en.md', abs)); if(enR.ok) en = parseMd(await enR.text()); } catch(e) {}
      return mapItem(slug, ja, en);
    } catch(e) { console.error('MD読み込み失敗:', slug, e); return null; }
  }));
  return items.filter(Boolean);
}

// list.txt の順に読み、group ごとに仕分けて返す。list.txt が無ければ null。
export async function loadMembers(base){
  const items = await loadCollection(base, 'members');
  if(!items.length) return null;
  const by = g => items.filter(x => x.group === g);
  return {
    members: by('member'),
    collaborators: by('collaborator'),
    alumni: by('alumni'),
    pastMembers: by('past'),
    memberGalleries: by('gallery'),
  };
}


// ---- 単一ページ（content/join/join.md など）----
// frontmatter: heading / catch / heroImage、本文 = 他ページと同じブロック書式
export async function loadPage(base, name){
  const abs = new URL(base, location.href);
  let jaTxt;
  try {
    const r = await fetch(new URL(name + '.md', abs));
    if(!r.ok) return null;
    jaTxt = await r.text();
  } catch(e) { return null; }
  const ja = parseMd(jaTxt);
  let en = null;
  try { const r = await fetch(new URL(name + '.en.md', abs)); if(r.ok) en = parseMd(await r.text()); } catch(e) {}
  const m = ja.meta || {}, me = (en && en.meta) || {};
  return {
    heading: pair(m.heading || m.title || '', me.heading || me.title),
    catch: pair(m.catch || '', me.catch),
    heroImage: m.heroImage || m.image || m.photo || undefined,
    body: pairBody(ja, en),
  };
}

// ---- 共同研究ページ（content/collaboration/collaboration.md）----
// 本文 = メッセージ段落。「## 事例: 会社名」でセクションを始めると事例カードになる。
// 各事例セクション内の「article: <記事id>」「url: <外部URL>」「image: <画像パス>」行はメタ情報、残りが説明文。
// 「詳細はこちら」は article があればサイト内の記事へ、無ければ url の外部ページ（新しいタブ）へ移る。
function parseCollab(src){
  const { meta, rest } = parseFrontMatter(src);
  const parts = rest.split(/\r?\n(?=##\s)/);
  const message = [], cases = [];
  parts.forEach((p, i)=>{
    const hm = p.match(/^##\s+(?:事例|Case)\s*[:：]\s*(.+)\r?\n?/);
    if(!hm){
      if(i === 0) message.push(...parseBlocks(p));   // 本文は他ページと同じリッチなブロック書式
      return;
    }
    const c = { company: hm[1].trim(), image: undefined, articleId: undefined, url: undefined, descParas: [] };
    p.slice(hm[0].length).split(/\r?\n\s*\r?\n/).map(b=>b.trim()).filter(Boolean).forEach(b=>{
      const restLines = [];
      b.split(/\r?\n/).forEach(line=>{
        const km = line.match(/^(article|image|url)\s*:\s*(.+)$/);
        if(km){ if(km[1] === 'article') c.articleId = km[2].trim(); else if(km[1] === 'url') c.url = km[2].trim(); else c.image = km[2].trim(); }
        else restLines.push(line);
      });
      if(restLines.length) c.descParas.push(restLines.join('\n'));
    });
    cases.push(c);
  });
  return { meta, message, cases };
}

export async function loadCollaboration(base){
  const abs = new URL(base, location.href);
  let jaTxt;
  try {
    const r = await fetch(new URL('collaboration.md', abs));
    if(!r.ok) return null;
    jaTxt = await r.text();
  } catch(e) { return null; }
  const ja = parseCollab(jaTxt);
  let en = null;
  try { const r = await fetch(new URL('collaboration.en.md', abs)); if(r.ok) en = parseCollab(await r.text()); } catch(e) {}
  const me = (en && en.meta) || {};
  return {
    heading: pair(ja.meta.heading || '共同研究', me.heading),
    catch: pair(ja.meta.catch || '', me.catch),
    messageHeading: pair(ja.meta.messageHeading || '', me.messageHeading),
    casesHeading: pair(ja.meta.casesHeading || '', me.casesHeading),
    message: (en && en.message && en.message.length) ? { ja: ja.message, en: en.message } : ja.message,
    cases: ja.cases.map((c, i)=>{
      const ce = en && en.cases[i];
      return {
        image: c.image || 'images/placeholder-figure.svg',
        company: ce ? { ja: c.company, en: ce.company } : c.company,
        desc: ce ? { ja: c.descParas.join('\n'), en: ce.descParas.join('\n') } : c.descParas.join('\n'),
        articleId: c.articleId,
        url: c.url,
      };
    }),
  };
}
