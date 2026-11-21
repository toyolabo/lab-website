// =====================================================================
// 【メンバー】 members.js（※フォールバック。ふだんは編集不要）
// ---------------------------------------------------------------------
// メンバーページの内容は content/members/ の Markdown で管理します。
// content/members/list.txt がある限り、このファイルは使われません。
// =====================================================================
// 【メンバー】 members.js
// ---------------------------------------------------------------------
// メンバーページの一覧。
// - pi: true のメンバーは大きなカード（主宰）として表示されます（1名のみ）
// - hue … アバターの色相（0〜360 の数値。写真が用意できるまでの仮表示）
// - photo … 顔写真のパス（images/ に置く）。指定するとアバターの代わりに表示
// - links … WebサイトやSNSのリンク（配列）。URLだけ書けばラベルは自動判定
//     例: links: ['https://example.com', 'https://github.com/xxxx']
//     ラベルを指定したい場合: links: [{ label: '個人サイト', url: 'https://example.com' }]
// - interest … 研究関心（一般メンバー用の短い表記）
// - placeholder: true … 氏名未定のダミー枠（実名が決まったら消して書き換え）
// 文字列は { ja: '…', en: '…' } と書くと日英切替に対応します（enが無ければja表示）。
//
// ◆ メンバーを追加する: 下のブロックを1つコピーして配列に追加
// ◆ 卒業などで外す: ブロックごと削除（または alumni ファイルを将来作る）
// =====================================================================

export const members = [
  {
    id: 'pi', pi: true,
    name: { ja: '鈴村 豊太郎', en: 'Toyotaro Suzumura' },
    role: { ja: '教授・主宰', en: 'Professor / PI' },
    hue: 222, photo: 'images/member-pi.png',
    bio: {
      ja: '大規模計算（HPC）からグラフ深層学習、そしてグラフ基盤モデルまでを一貫して牽引。グラフ・AI・大規模システムの3軸を併せ持つ研究室として、関係性から知能を解き明かす研究を進めています。',
      en: 'Leading research from large-scale computing (HPC) through graph deep learning to graph foundation models. As a lab spanning the three pillars of graphs, AI, and large-scale systems, we unlock intelligence from relationships.',
    },
    tags: ['Graph Foundation Models', 'Graph Neural Networks', 'AI Modeling', 'HPC / Large-Scale Systems'],
    links: [
      { label: { ja: '詳細プロフィール', en: 'Full profile' }, url: '#/pi' },
      'https://www.linkedin.com/in/toyotaro-suzumura-0925bb1',
      'https://github.com/suzumura',
      'https://x.com/toyotaro',
    ],
  },
  { id: 'ap', name: { ja: '冨田 優', en: 'Yu Tomita' }, role: { ja: '助教', en: 'Assistant Professor' }, hue: 205, interest: { ja: '動的グラフ・推薦システム', en: 'Dynamic graphs / recommender systems' }, links: ['https://www.linkedin.com/', 'https://github.com/'], photo: 'images/member-m1.jpeg' },
  { id: 'pd', name: { ja: '冨田 優', en: 'Yu Tomita' }, role: { ja: '特任研究員', en: 'Project Researcher' }, hue: 238, interest: { ja: 'グラフ基盤モデル・LLM', en: 'Graph foundation models / LLMs' }, placeholder: true, links: ['https://www.linkedin.com/', 'https://github.com/'], photo: 'images/member-m1.jpeg' },
  { id: 'd1', name: { ja: '冨田 優', en: 'Yu Tomita' }, role: { ja: '博士課程', en: 'PhD Student' }, hue: 192, interest: { ja: 'AI・ロボティクス', en: 'AI & robotics' }, placeholder: true, links: ['https://www.linkedin.com/', 'https://github.com/'], photo: 'images/member-m1.jpeg' },
  { id: 'd2', name: { ja: '冨田 優', en: 'Yu Tomita' }, role: { ja: '博士課程', en: 'PhD Student' }, hue: 255, interest: { ja: 'HPC・大規模グラフ処理', en: 'HPC / large-scale graph processing' }, placeholder: true, links: ['https://www.linkedin.com/', 'https://github.com/'], photo: 'images/member-m1.jpeg' },
  { id: 'm1', name: { ja: '冨田 優', en: 'Yu Tomita' }, role: { ja: '修士課程', en: 'Master\u2019s Student' }, hue: 178, interest: { ja: '推薦システム', en: 'Recommender systems' }, placeholder: true, links: ['https://www.linkedin.com/', 'https://github.com/'], photo: 'images/member-m1.jpeg' },
  { id: 'm2', name: { ja: '冨田 優', en: 'Yu Tomita' }, role: { ja: '修士課程', en: 'Master\u2019s Student' }, hue: 268, interest: { ja: '神経科学・EEG', en: 'Neuroscience / EEG' }, placeholder: true, links: ['https://www.linkedin.com/', 'https://github.com/'], photo: 'images/member-m1.jpeg' },
  { id: 'm3', name: { ja: '冨田 優', en: 'Yu Tomita' }, role: { ja: '修士課程', en: 'Master\u2019s Student' }, hue: 212, interest: { ja: 'マテリアルズインフォマティクス', en: 'Materials informatics' }, placeholder: true, links: ['https://www.linkedin.com/', 'https://github.com/'], photo: 'images/member-m1.jpeg' },
];

// =====================================================================
// 【共同研究者】 name / affiliation / url（任意）
// =====================================================================
export const collaborators = [
  { name: { ja: '山田 太郎', en: 'Taro Yamada' }, affiliation: { ja: '○○大学 教授', en: 'Professor, XX University' }, url: 'https://example.com', hue: 200, photo: 'images/member-m1.jpeg', placeholder: true },
  { name: { ja: '佐藤 花子', en: 'Hanako Sato' }, affiliation: { ja: '△△研究所 主任研究員', en: 'Senior Researcher, YY Institute' }, hue: 245, photo: 'images/member-m1.jpeg', placeholder: true },
  { name: { ja: 'John Smith', en: 'John Smith' }, affiliation: { ja: 'ZZ University', en: 'ZZ University' }, hue: 185, photo: 'images/member-m1.jpeg', placeholder: true },
];

// =====================================================================
// 【卒業生】 year（卒業年度）/ name / degree（学位）/ next（進路・任意）
// 新しい年度を上に追加してください。
// =====================================================================
export const alumni = [
  { year: '2025年度', name: { ja: '田中 一郎', en: 'Ichiro Tanaka' }, degree: { ja: '修士（工学）', en: 'M.Eng.' }, next: { ja: '株式会社○○', en: 'XX Inc.' }, hue: 220, photo: 'images/member-m1.jpeg', placeholder: true },
  { year: '2025年度', name: { ja: '鈴木 二郎', en: 'Jiro Suzuki' }, degree: { ja: '修士（工学）', en: 'M.Eng.' }, hue: 260, photo: 'images/member-m1.jpeg', placeholder: true },
  { year: '2024年度', name: { ja: '高橋 三郎', en: 'Saburo Takahashi' }, degree: { ja: '博士（工学）', en: 'Ph.D.' }, next: { ja: '□□研究所', en: 'ZZ Lab' }, hue: 195, photo: 'images/member-m1.jpeg', placeholder: true },
];

// =====================================================================
// 【過去の在籍メンバー】 name / role（当時の身分）/ period（在籍期間）
// =====================================================================
export const pastMembers = [
  { name: { ja: '伊藤 四郎', en: 'Shiro Ito' }, role: { ja: '特任研究員', en: 'Project Researcher' }, period: '2023–2025', placeholder: true },
  { name: { ja: 'Jane Doe', en: 'Jane Doe' }, role: { ja: '客員研究員', en: 'Visiting Researcher' }, period: '2024', placeholder: true },
];

// =====================================================================
// 【フォトギャラリー】 メンバーページ下部の写真セクション。
// - photos の src に画像パス（images/…）を書くか、空のままにして
//   サイト上のプレースホルダーに写真をドラッグ&ドロップしても登録できます。
// - id はドロップ画像の保存キーなので変更しないでください。
// =====================================================================
export const memberGalleries = [
  {
    id: 'events', sub: 'LAB EVENTS',
    title: { ja: '研究室のイベントの様子', en: 'Lab Events' },
    photos: [
      { id: 'ev-1', src: '', caption: { ja: '歓迎会の様子', en: 'Welcome party' } },
      { id: 'ev-2', src: '', caption: { ja: '研究室合宿', en: 'Lab retreat' } },
      { id: 'ev-3', src: '', caption: { ja: 'ゼミの様子', en: 'Seminar' } },
    ],
  },
  {
    id: 'titech', sub: 'TOKYO TECH ERA',
    title: { ja: '東工大時代の写真', en: 'Photos from the Tokyo Tech Era' },
    photos: [
      { id: 'tt-1', src: '', caption: { ja: '東工大時代の研究室メンバー', en: 'Lab members at Tokyo Tech' } },
      { id: 'tt-2', src: '', caption: { ja: '卒業式にて', en: 'Graduation ceremony' } },
      { id: 'tt-3', src: '', caption: { ja: '国際会議での発表', en: 'Presentation at an international conference' } },
    ],
  },
];
