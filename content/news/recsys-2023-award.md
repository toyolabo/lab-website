---
id: recsys-2023-award
date: 2023.09
kind: press
title: ニュース推薦の論文が ACM RecSys 2023 で Best Full Paper Runner-Up Award と Best Student Paper Award を受賞しました
relatedArticles: [rec-news-global]
summary: 推薦システムの国際会議 ACM RecSys 2023 で、大学院生 Boming Yang さんらのニュース推薦の論文が Best Full Paper Runner-Up Award と Best Student Paper Award を受賞しました。
---

![](images/news-recsys-2023-award-banner.jpg)

## 概要

東京大学大学院情報理工学系研究科・鈴村研究室の大学院生Boming Yang（ボーミン・ヤン）さん、同研究科および東京大学情報基盤センター（兼務）の鈴村豊太郎教授、同センターのIrene Li（アイリーン・リー）特任助教とアイルランド国立大学ダブリン校の研究者らのチームによる論文が、米国計算機学会（ACM）主催の推薦システムに関する国際会議「RecSys 2023」(The ACM Conference on Recommender Systems)で、Best Full Paper Runner-Up Award (投稿された251本のFull Paper のうち3本の最優秀論文候補) 及び Best Student Paper Award (最優秀学生論文賞) を受賞しました。

## 国際会議 ACM RecSys 2023 に関して

米国計算機学会ACM主催の国際会議「RecSys」（The ACM Conference on Recommender Systems）は、人工知能（AI）によって商品や人材などを推薦するシステムについての推薦システム領域のトップカンファレンスとして位置付けられており、今年で17回目となる会議が2023年9月18日から9月23日までシンガポールで開催されました。この会議には、日本からの58名を含む、世界中から997名の推薦システムに関わる研究者が集結しました。参加者の内訳は、オンサイト参加者が73%、リモート参加者が27%でした。特筆すべきは、大学、政府系研究所などアカデミアからの参加者が37%に対し、民間企業からの参加者が63%という高い比率となっていることです。これは、実際に先進的な推薦アルゴリズムを研究開発し、サービスに活用している企業からの参加が多いことを示しており、この学会の実用的な側面の強さを物語っています。合計483本の最新の深層学習技術や大規模言語モデルを用いた推薦アルゴリズムの研究論文が投稿されたうち、47本がFull Paper、38本がShort Paperとして採択され、会議で発表されました。特に、AmazonやGoogle、Netflix、Tencentなどの巨大IT企業からの発表も目立ちました。さらに、18のワークショップや6つのチュートリアルセッションが開催され、eコマース、ニュース、求人、音楽、ファッションなど、多岐にわたる領域での推薦アルゴリズムに関する研究が紹介されました。

![RecSys 2023 の会場にて](images/news-recsys-2023-award-01.jpg){width=512}

![ACM RecSys 2023 の様子](images/news-recsys-2023-award-02.jpg){width=512}

![Boming Yang 氏による論文発表](images/news-recsys-2023-award-03.jpg){width=512}

![RecSys 2023 Best Paper Award 表彰式での記念写真](images/news-recsys-2023-award-04.jpg){width=512}

[RecSys Best Paper Awards へのリンク](https://recsys.acm.org/best-papers/)

## 論文情報

Going Beyond Local: Global Graph-Enhanced Personalized News Recommendations
Authors: Boming Yang, Dairui Liu, Toyotaro Suzumura, Ruihai Dong and Irene Li
[https://dl.acm.org/doi/10.1145/3604915.3608801](https://dl.acm.org/doi/10.1145/3604915.3608801)
(プレプリント) [https://arxiv.org/abs/2307.06576](https://arxiv.org/abs/2307.06576)
＜コード＞: [https://github.com/tinyrolls/glory](https://github.com/tinyrolls/glory)

＜発表場所＞
ACM RecSys 2023 [https://recsys.acm.org/recsys23/](https://recsys.acm.org/recsys23/)
発表日：2023年9月20日 シンガポール

## 要点

本研究は、ニュースプラットフォームに特化したパーソナライズされた記事推薦アルゴリズムに焦点を当てています。

ニュースプラットフォームとEコマースプラットフォームは、それぞれ異なる運用上の特性を有しています。ニュースプラットフォームでは、連日のように新しい記事が追加される一方、特に時事に関する記事は新しい情報の更新に伴い、過去の記事の価値が急速に低下します。対照的に、Eコマースプラットフォームでは、人気商品に対するユーザーの関心は長期間持続することが多いのです。

ニュース記事は短期間でユーザーの関心が移行する傾向が強いため、Eコマースのプラットフォームとは異なる、ニュースプラットフォーム向けの効果的な推薦アルゴリズムの開発が求められています。

この課題を解決するため、本研究ではニュースプラットフォームにおける記事推薦の新しいアプローチを追求しました。毎日追加される新しい記事に対して、十分なユーザーの閲覧行動データが存在しない中で、どの記事を推薦すべきかの判断基準を明確にすることが課題となっています。この問題を克服するため、他のユーザーの閲覧行動データを参考にした新たな手法を導入しました。特に、グラフニューラルネットワークを活用したこの新しいアルゴリズムは、従来の手法に比べて顕著に高い精度での記事推薦を可能にしています。

![図1: 他のユーザーの行動履歴からニュースを推薦する例。3人のそれぞれの行動履歴にみられる共通する記事を緑、青、橙で示す。網掛けの青、緑のニュースはそれぞれ青および緑の記事に関連するニュース記事を示す。](images/news-recsys-2023-award-05.png)

## Boming Yang 氏のコメント

Truly honored to receive the Best Student Paper award. Grateful for the guidance and support I’ve received along the way. This achievement fuels my passion for continuous learning.
（最優秀学生論文賞をいただき、本当に光栄です。これまでの指導とサポートに感謝しています。この受賞を機に、さらに続けて学んでゆこうという情熱に火がつきました。）

## 鈴村豊太郎教授のコメント

Google や Amazonなどの推薦システムの研究及び実用化を進めているプレイヤーも参加する国際学会で、アカデミアである我々もインパクトのある研究ができることを証明できたと思いますので、今回の受賞は更にこの分野で進める上でも励みになりました。また、今回の研究で取り上げた問題、すなわちユーザーのインタラクションが少ない状況での推薦内容の選択は、ニュースプラットフォームだけでなく多岐にわたる領域での応用が期待されます。そのため、このテーマをさらに広げて研究を進めていきたいと考えています。

## 研究グループ

Boming Yang 東京大学大学院情報理工学系研究科 大学院生
Dairui Liu University College Dublin 大学院生
鈴村 豊太郎 東京大学大学院情報理工学系研究科 教授・東京大学情報基盤センター 教授
Ruihai Dong University College Dublin, Assistant Professor
Irene Li 東京大学情報基盤センター 特任助教

## 謝辞

本研究の一部は、JSPS科研費JP21K21280、JP23H03408の助成を受けたものです。また、東京大学情報基盤センター若手・女性利用プログラム（mdx利用）の支援をうけています。

＜参考情報＞
若手・女性利用 (mdxを利用）
[https://www.cc.u-tokyo.ac.jp/guide/young/2023/](https://www.cc.u-tokyo.ac.jp/guide/young/2023/)

## 論文の補足情報

論文中には以下の図で示される例を用いて、提案手法が有効に機能する例を示しています。

この例では、ユーザーが「News」、「Finance」、「Music」（青字で示される記事）の3つの記事を閲覧した履歴が存在します。この履歴を基に、他のユーザーの閲覧データを参照し、フットボール関連のニュース（緑色で示される記事）が関連記事として Global News Graphというグラフ構造に追加されている様子が描かれています。このグラフの構築により、新しい記事の推薦時に、フットボール関連の記事（緑色）と関連性の高いオレンジ色の記事を推薦する方針を取ることが示されています。

![図2: Global News Graph を用いた推薦の例](images/news-recsys-2023-award-06.png)
