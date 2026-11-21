// =====================================================================
// 【共同研究ページ】 collaboration.js
// ---------------------------------------------------------------------
// ★ 共同研究ページは content/collaboration/collaboration.md で編集します。
//    front matter: heading / catch / messageHeading / casesHeading
//    本文 = メッセージ段落。「## 事例: 会社名」でセクションを始めると事例カードになり、
//    セクション内の「article: <記事id>」「image: <画像パス>」行がメタ情報、残りが説明文。
//    英語版は collaboration.en.md（見出しは「## Case: Company」）。
// このファイルは旧方式のフォールバックです（MD が読めた場合はそちらが優先）。
// =====================================================================

export const collaboration = {
  heading: { ja: '共同研究', en: 'Collaboration' },
  catch: '',
  messageHeading: '',
  casesHeading: '',
  message: [],
  cases: [],
};
