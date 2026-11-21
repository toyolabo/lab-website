// =====================================================================
// 【ニュース】 news.js
// ---------------------------------------------------------------------
// ★ ニュース記事はすべて content/news/ の Markdown で管理しています
//   （list.txt に1行追加 + <slug>.md / <slug>.en.md）。
//   このファイルはカテゴリ定義と旧方式のフォールバックです。
//   同じ id がある場合は MD が優先されます。
// ◆ カテゴリを増やす: newsCategories に {id, label, color} を追加
// =====================================================================

export const newsCategories = [
  { id: 'pub',   label: { ja: '論文', en: 'Publication' },          color: '#1a3a6b' },
  { id: 'press', label: { ja: 'リリース', en: 'Release' }, color: '#9a2a2a' },
  { id: 'event', label: { ja: 'イベント', en: 'Event' },             color: '#b06a14' },
  { id: 'lab',   label: { ja: '研究室', en: 'Lab' },                  color: '#3a7d5b' },
  { id: 'blog',  label: { ja: 'ブログ', en: 'Blog' },                 color: '#6a4ca0' },
];

export const news = [];
