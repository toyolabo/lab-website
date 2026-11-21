// =====================================================================
// 【本文ブロックの解釈】 blocks.js（表示層の共通ヘルパー。ふだん触らない）
// ---------------------------------------------------------------------
// data/ の body 配列を、ページが表示できる形に変換します。
// body に書ける形式:
//   '文字列'                               … 段落。[表示テキスト](URL) でリンク
//   { type:'heading', text:'見出し' }                     … セクション見出し
//   { type:'image', src:'images/x.jpg', caption:'説明' }
//   { type:'video', url:'YouTubeのURL', caption:'説明' }  … サムネイル表示
//   { type:'link',  url:'URL', label:'表示名' }           … リンクカード
//   { type:'html',  html:'<b>…</b>' }                     … 上級者向け生HTML
//   { type:'articles', ids:['rec-awrs'] }                 … 研究紹介のカード（md では「::article 記事のid」。#119）
//   { type:'papers', keys:['watanabe2013how'] }           … 文献情報（md では「::paper BibTeXのキー」。data/publications.json から）
// =====================================================================

// ---- i18n ヘルパー ----
// 値が {ja:…, en:…} の対なら lang の値（無ければ ja）を返す。文字列はそのまま。
export function pick(v, lang){
  if(v && typeof v==='object' && !Array.isArray(v)){
    const ks = Object.keys(v);
    if(ks.includes('ja') && ks.every(k=>k==='ja'||k==='en')) return v[lang]!=null ? v[lang] : v.ja;
  }
  return v;
}
// オブジェクトツリーを深く辿り、{ja,en} 対をすべて lang の値に解決したコピーを返す。
export function localize(v, lang){
  if(Array.isArray(v)) return v.map(x=>localize(x, lang));
  if(v && typeof v==='object'){
    const ks = Object.keys(v);
    if(ks.includes('ja') && ks.every(k=>k==='ja'||k==='en')) return v[lang]!=null ? v[lang] : v.ja;
    const o = {};
    for(const k of ks) o[k] = localize(v[k], lang);
    return o;
  }
  return v;
}

export function parseInline(text){
  const segs = [];
  const re = /\[([^\]]+)\]\(([^\s)]+)\)/g;
  let last = 0, m;
  while((m = re.exec(text))){
    if(m.index > last) segs.push({ isText:true, text:text.slice(last, m.index) });
    segs.push({ isLink:true, text:m[1], href:m[2] });
    last = m.index + m[0].length;
  }
  if(last < text.length) segs.push({ isText:true, text:text.slice(last) });
  return segs.length ? segs : [{ isText:true, text }];
}

export function youtubeId(url){
  const m = (url||'').match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{6,})/);
  return m ? m[1] : null;
}

// 画像の横幅（md の {width=…}）を表示用の値にする。
//   300・300px → 横 300px ／ 80% → 本文の幅の 80% ／ 指定なし・読めない値 → 本文の幅いっぱい
//   幅を指定した画像は中央に置き、キャプションも中央に揃える。どの場合も本文の幅は超えない
export function imageWidth(w){
  const v = String(w==null ? '' : w).trim();
  let m;
  if((m = v.match(/^(\d+(?:\.\d+)?)(px)?$/)) && +m[1] > 0) return { figW: m[1]+'px', capAlign:'center' };
  if((m = v.match(/^(\d+(?:\.\d+)?)%$/)) && +m[1] > 0) return { figW: Math.min(+m[1],100)+'%', capAlign:'center' };
  return { figW:'100%', capAlign:'left' };
}

export function normalizeBlocks(body){
  return (body||[]).map(b=>{
    if(typeof b === 'string') return { isP:true, segments:parseInline(b) };
    if(!b || typeof b !== 'object') return null;
    if(b.type === 'heading'){ const lv = b.level || 2; return { isHeading:true, text:b.text||'', level:lv, isSub:lv>=3, nav:b.nav||'' }; }
    if(b.type === 'list') return { isList:true, items:(b.items||[]).map(it=>({ segments:parseInline(it) })) };
    if(b.type === 'image') return { isImage:true, src:b.src||'', caption:b.caption||'', hasCaption:!!b.caption, ...imageWidth(b.width) };
    if(b.type === 'video'){
      const id = youtubeId(b.url);
      const thumb = b.thumb || (id ? 'https://img.youtube.com/vi/'+id+'/hqdefault.jpg' : null);
      if(thumb) return { isVideo:true, url:b.url||'', thumb, caption:b.caption||'', hasCaption:!!b.caption };
      return { isLinkCard:true, url:b.url||'', label:b.caption||b.url||'' };
    }
    if(b.type === 'link') return { isLinkCard:true, url:b.url||'', label:b.label||b.url||'' };
    if(b.type === 'html') return { isHtml:true, html:b.html||'' };
    if(b.type === 'articles') return { isArticles:true, ids:b.ids||[] };
    if(b.type === 'papers') return { isPapers:true, keys:b.keys||[] };
    return null;
  }).filter(Boolean);
}
