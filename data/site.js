// =====================================================================
// 【サイト固定コピー】 site.js
// ---------------------------------------------------------------------
// サイト全体の「文言」を管理するファイルです。
// トップバー / ヒーロー / お知らせ / セクション見出し / フッター が対象。
// 文字列を書き換えて保存 → ブラウザを再読み込みすると反映されます。
// ※ レイアウトや色はここでは変わりません（表示側のファイルが担当）。
// =====================================================================

export const site = {
  // ---- ブランド表記 ----
  org: 'The University of Tokyo · IST',
  brandJa: '鈴村研究室',
  brandEn: 'SUZUMURA LAB · UTokyo IST',

  // ---- トップバー右上のリンク（page: 遷移先ページ名）----
  utilityLinks: [
    { label: { ja: '研究室所属', en: 'Join Us' }, page: 'join' },
    { label: { ja: '共同研究', en: 'Collaboration' }, page: 'collaboration' },
    { label: { ja: 'アクセス', en: 'Access' }, page: 'access' },
  ],

  // ---- ヒーロー（トップ最上部）----
  hero: {
    // 背景写真（複数指定可）。時間経過・フリック・ドットで切り替わります。
    // 画像を差し替えるには images/ フォルダにファイルを置き、パスを書き換えてください。
    images: [
      'images/hero-viz-wall.jpg',                 // 可視化の壁（研究）
      'images/hero-lab.jpg',                      // 研究室での集合写真（人）。hero-1.jpeg を軽くしたもの
      'images/hero-meeting.jpg',                  // 学生のミーティング
      'images/hero-robot.jpg',                    // ロボットの実験
      'images/hero-computers.jpg',                // 計算機での作業
      'images/hero-arim-symposium.jpg',           // 先生の講演（ARIM のシンポジウム）
      'images/hero-student-talk.jpg',             // 学生の発表。hero-3.jpeg を軽くしたもの
      'images/gallery-suzulab-2026-10-06.jpg',    // OB・OG 会の集合写真（2026年10月）
      'images/gallery-year-end-party-2025.jpg',   // 忘年会（2025年12月）
    ],
    kicker: { ja: 'グラフ × AI × 大規模システム', en: 'Graph × AI × Large-Scale Systems' },
    titleLines: {
      ja: ['3つの技術を併せ持ち、', '関係性から知能を解き明かす'],
      en: ['Three technologies combined,', 'unlocking intelligence from relationships'],
    },
    // lead: 文を分割して並べます。bold: true の部分は太字になります。
    lead: {
      ja: [
        { text: '鈴村研究室は、' },
        { text: 'グラフ', bold: true },
        { text: '、' },
        { text: 'AI', bold: true },
        { text: '、' },
        { text: 'HPC・大規模システム', bold: true },
        { text: 'という3つの技術を軸に、それらが重なり合うところから生まれる研究に取り組んでいます。' },
      ],
      en: [
        { text: 'Suzumura Lab is built on three core technologies: ' },
        { text: 'graphs', bold: true },
        { text: ', ' },
        { text: 'AI', bold: true },
        { text: ', and ' },
        { text: 'HPC / large-scale systems', bold: true },
        { text: '. We work on research that emerges where these pillars overlap.' },
      ],
    },
    ctaSecondary: { ja: '研究を探す →', en: 'Browse research →' },
  },

  // ---- 重要なお知らせ（visible: false で非表示）----
  notice: {
    visible: true,
    date: '2026.04',
    label: { ja: '最新ニュース', en: 'Latest News' },
    text: {
      ja: '2027年度 研究室メンバー（修士・博士）を募集しています。見学・相談はお気軽にどうぞ。',
      en: 'We are recruiting Master\u2019s and PhD students for AY2027. Feel free to reach out for a lab visit or consultation.',
    },
  },

  // ---- 各セクションの見出しコピー ----
  sections: {
    // ---- 導入（ヒーローとお知らせの下、3軸の上）----
    // lead は段落の配列。研究室が何者かを紹介し、次の「3軸」につなげる
    intro: {
      title: { ja: '鈴村研究室について', en: 'About Suzumura Lab' },
      lead: {
        ja: [
          '鈴村研究室は、東京大学大学院 情報理工学系研究科 電子情報学専攻に属しています。IBM Research で17年にわたって研究と社会実装に携わってきた鈴村豊太郎教授が、2021年4月に開設しました。修士・博士の学生や研究員に、国内外の共同研究者も加わり、企業や研究機関と連携しながら研究を進めています。',
          '私たちが一貫して見つめているのは、人・もの・ことの間にある「つながり」です。つながりの中から知能を引き出すために、私たちは性格の異なる3つの基盤技術を組み合わせています。',
        ],
        en: [
          'Suzumura Lab is part of the Department of Information and Communication Engineering, Graduate School of Information Science and Technology, The University of Tokyo. It was founded in April 2021 by Prof. Toyotaro Suzumura, who spent 17 years at IBM Research working on research and its real-world deployment. Master\u2019s and Ph.D. students, researchers, and collaborators in Japan and abroad work together with companies and research institutions.',
          'What we consistently focus on are the connections between people, things, and events. To draw intelligence out of these connections, we combine three core technologies, each with a different character.',
        ],
      },
    },
    concept: {
      // kicker（見出しの上の小さな文字）・lead（説明文）は
      // 書けば表示され、書かなければ場所ごと詰めて表示されます。
      title: { ja: '鈴村研究室の基盤技術の3軸', en: 'Three Core Technologies of Suzumura Lab' },
      lead: {
        ja: '1つ目は、関係性を構造として表す「グラフ」。2つ目は、データから知識を学び取る「AI」。3つ目は、数十億規模のデータを現実的な時間で処理する「HPC・大規模システム」です。3つの技術は、それぞれが研究の対象であると同時に、互いを支え合う関係にあります。これらの組み合わせにこそ、研究室ならではの研究が生まれます。',
        en: 'The first is graphs, which represent relationships as structure. The second is AI, which learns knowledge from data. The third is HPC and large-scale systems, which process billions of data points in realistic time. Each of the three is a subject of research in its own right, and at the same time they support one another. It is through their combination that our lab\u2019s distinctive research emerges.',
      },
    },
    topics: {
      // kicker（見出しの上の小さな文字）は書けば表示され、書かなければ場所ごと詰めて表示されます。
      title: { ja: '3軸の組み合わせから生まれる研究領域', en: 'Research areas born from combining the three pillars' },
      lead: {
        ja: '3つの軸を組み合わせることで、私たちはグラフ機械学習の理論やスケーラブルなアルゴリズムといった基礎研究から、推薦システム・マテリアルズインフォマティクス・神経科学・ロボティクスなど、社会実装を見据えた応用研究まで、幅広い領域に取り組んでいます。研究を支える基盤とサービスの運用にも携わっています。基礎研究で得た知見を応用に生かし、応用の現場で見つかった課題を新しい理論や手法へとつなげる。この往復が、研究室の強みです。',
        en: 'By combining the three pillars, we work across a wide range of areas, from fundamental research such as the theory of graph machine learning and scalable algorithms to applied research aimed at real-world deployment, including recommender systems, materials informatics, neuroscience, and robotics. We also help operate the infrastructure and services that support research. We bring insights from fundamental research into applications, and turn problems found in real-world applications into new theories and methods. This cycle is the strength of our lab.',
      },
      addHint: 'トピックの追加・編集は data/topics.js で行えます',
    },
    news: {
      // kicker（見出しの上の小さな文字）は書けば表示され、書かなければ場所ごと詰めて表示されます。
      title: { ja: '最新ニュース', en: 'Latest News' },
    },
  },

  // ---- フッター（ページ下部の紺色の欄）----
  // 左上に研究室名と所属、右上にロゴ、その下にメニューを横に並べる。メニューは上部のメニューバーと同じ項目
  footer: {
    labName: '鈴村研究室',
    labNameEn: 'Suzumura Lab',
    affiliation: {
      ja: '東京大学大学院 情報理工学系研究科 電子情報学専攻',
      en: 'Department of Information and Communication Engineering, Graduate School of Information Science and Technology, The University of Tokyo',
    },
    logo: 'images/logo-full.png',   // 研究室のロゴ（マークと白の SUZUMURA LAB の文字。暗い地の上で使う）。
                                    // マークだけの images/logo-mark.png は、上部のメニューの左と、画像が無いサムネイルに使う
  },
};
