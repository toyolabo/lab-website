---
id: others
name: その他応用領域
en: Other Application Areas
axes: [graph, ai, hpc]
image: images/topic-others.jpg
catch: 3つの基盤技術を、さまざまな分野の課題に応用する。
desc: 6つのトピックに収まらない研究。スーパーコンピュータ上の大規模グラフ処理や都市の交通シミュレーションと、金融・市場・航空網・ソーシャルネットワークへのグラフ・AIの応用。
cases: [sys-graph500, sys-edge-partition]
---

研究室の3つの基盤技術（グラフ・AI・HPC／大規模システム）は、特定の分野に限らず幅広い領域に応用できます。このトピックでは、ほかの6つのトピックに収まらない分野で、グラフニューラルネットワークやグラフアルゴリズムを応用した研究として、金融犯罪の検知、市場動向の予測、COVID-19 パンデミック下での航空網の変化の分析、10億規模のソーシャルネットワークの分析を紹介します。実応用の中で得た知見は、新しいアルゴリズムやモデルの開発にも生かしています。

スーパーコンピュータの上で大規模なグラフを速く処理する研究も、このトピックで紹介します。Graph500世界1位を通算10期獲得した大規模グラフ探索技術や、兆エッジ級グラフの分散処理は、研究室で最も層の厚い研究領域のひとつであり、グラフ・AIの応用を計算基盤の側から支えています。

## 金融：グラフニューラルネットワークによる金融犯罪リスクの低減（NeurIPS Workshop'19） {nav=金融犯罪の検知}

金融犯罪は大きく、かつ拡大を続ける問題であり、ほぼすべての金融機関が何らかの形で関わっています。金融機関は金融犯罪との戦いの最前線にあり、そのため多くの人的・技術的資源をこの取り組みに割く必要があります。金融上の不正を検知する現在の仕組みには、悪意のある行動と通常の金融活動を効果的に見分ける能力に限界があります。その結果、疑わしい取引が大幅に過剰に報告されがちで、時間と費用のかかる人手による確認が必要になっています。機械学習をはじめとするこの分野の技術の進歩は、金融機関の既存の仕組みの有効性を高めることができます。しかし、多くの金融機関が抱え続けている大きな課題は、他社の知見を持たないまま、金融犯罪に個別に対処していることです。金融機関が自社の視点だけで金融犯罪に対処していると、犯罪者は機関や地域をまたぐ巧妙な手口を考え出すことができます。金融機関は能力を高めるために絶えず取り組んでおり、機関の垣根を越えて知見・パターン・能力を共有する連携を結んでいます。こうした官民の連携には厳しい規制とデータのプライバシーの要件が課されるため、従来の技術による解決策に頼ることは困難です。本論文では、連合学習とグラフ学習の手法を活用して、より精度の高い機械学習モデルを構築できる連合グラフ学習基盤を用いて、機関の間で重要な情報を共有する方法を提案します。英国 FCA の TechSprint のデータセットを用いて、連合モデルがローカルモデルを20%上回ることを示しました。この新しい基盤は、世界規模のマネーロンダリングを効率的に検知する道を開くものです。

::paper suzumura2019towards
::paper stavarache2019exploring

![金融取引のネットワークの可視化。マネーロンダリングの検知では、こうした取引のつながりを手がかりにする。出典：T. Suzumura ほか, "Towards Federated Graph Learning for Collaborative Financial Crimes Detection"（NeurIPS 2019 Finance Workshop・arXiv:1909.12946）の研究](images/transaction-network.png){width=80%}

## グラフニューラルネットワークによる市場予測（NeurIPS Workshop 2019） {nav=市場予測}

近年、金融市場の正確な予測に機械学習を役立てることへの関心が急速に高まっています。金融と AI が交わるこの分野では目覚ましい進歩がある一方、現在の手法の多くは、各銘柄の株価の過去の傾向を捉えるテクニカル分析に限られており、良い予測結果を得られるのは特定の実験の条件に限られています。一方で、プロの投資家は、市場の間や企業の間の関係についての豊富な知識も使って企業や出来事のつながりを描き、それをもとにより良い市場予測を行っています。例えば、ある企業の株価の動きを、その企業の過去の株価の傾向だけでなく、仕入先や顧客の業績、業界全体、マクロ経済の要因や通商政策にもとづいて予測します。本論文では、企業の知識グラフを予測モデルに直接組み込むことで投資家の意思決定の仕方をまねられる可能性を持つ、市場予測とグラフニューラルネットワークを組み合わせた手法の有効性を調べます。本研究の主な目的は、ローリングウィンドウ分析によるバックテストを用いて、異なる市場とより長い期間にわたってこの手法の妥当性を検証することです。本研究では、日経225の個別銘柄の株価を約20年にわたって予測することに焦点を当てます。知識グラフには、主に日本企業と海外企業の間の仕入れ関係を示す豊富なデータセットである日経バリューサーチのデータを用います。予備的な結果では、市場のベンチマークと比べてリターンが29.5%、シャープレシオが2.2倍向上し、ベースラインの LSTM モデルと比べてそれぞれ6.32%、1.3倍向上しました。

::paper matsunaga2019exploring

![日本企業のサプライチェーン（仕入れ関係）のネットワーク。本研究は、こうした企業のつながりを株価の予測に使う。出典：D. Matsunaga ほか, "Exploring Graph Neural Networks for Stock Market Predictions with Rolling Window Analysis"（NeurIPS 2019 Workshop on Robust AI in Financial Services・arXiv:1909.10660）の研究](images/topic-others-03.png){width=80%}

## COVID-19 が航空網に与えた影響（IEEE BigData 2020） {nav=COVID-19と航空網}

COVID-19 の感染が世界に広がるにつれ、各国政府はさらなる感染を防ぐために渡航制限を発表し、実施してきました。こうした制限は各国の間の国際線の便数に直接影響し、大きな社会的・経済的な損失をもたらしています。この状況を定量的に理解するため、OpenSky Network のデータを分析し、世界の航空便のパターンと密度を明らかにしました。さらに、バルセロナにおける便数と、新規感染者数および経済（失業率）との関係を調べました。その結果、1日あたりの便数は徐々に減少したのち、2020年3月後半に米国と欧州が渡航制限を実施した後に64%急減したことが分かりました。また、この期間に世界の航空網の密度が51%減少したことも観察されました。新規感染者数については、渡航制限にかかわらず、世界全体で予想外の急増が見られました。最後に、スペインが国境の閉鎖を決めた後の数週間で、観光業と航空業の臨時雇用者の解雇が4.3倍に増えました。

::paper suzumura2020the

<figure style="margin:6px auto;width:80%;max-width:100%"><video controls playsinline preload="none" poster="images/flight-network-eu-poster.jpg" aria-label="欧州の航空網の変化の動画" style="width:100%;border-radius:12px;border:1px solid var(--line);display:block"><source src="videos/flight-network-eu.mp4" type="video/mp4"></video><figcaption style="font-size:12px;color:var(--muted);margin-top:8px;line-height:1.7;text-align:center">欧州の航空網の変化（2020 年 1 月 1 日〜6 月 27 日）。各国の渡航制限が発令された3月中旬以降、便のつながりが減っていく。出典：T. Suzumura, H. Kanezashi ほか, "The Impact of COVID-19 on Flight Networks"（IEEE BigData 2020・arXiv:2006.02950）の研究（データは OpenSky Network）</figcaption></figure>

## 10億規模のソーシャルネットワーク分析（WWW 2013） {nav=ソーシャルネットワーク分析}

Twitter、Facebook、MySpace、LinkedIn などのソーシャルネットワークサービスは著しく成長しています。ソーシャルネットワークの分析については、さまざまな研究があります。Haewoon Kwak は2009年の Twitter のネットワークを分析し、分離次数を示しました。しかし、2009年の利用者数は約4,170万人であり、現在のグラフと比べると規模はそれほど大きくありません。本論文では、4億6,990万人の利用者と287億の関係からなる Twitter の利用者データを用いて、地域ごとの成長、スケールフリー性、相互性、分離次数、直径の観点から Twitter のネットワークを分析します。実験の結果、現在の Twitter のネットワークにおける分離次数の値は4.59であることを報告します。

::paper watanabe2013how

<figure style="margin:6px auto;width:80%;max-width:100%"><video controls playsinline preload="none" poster="images/twitter-network-poster.jpg" aria-label="Twitter の利用者とつながりの広がりの動画" style="width:100%;border-radius:12px;border:1px solid var(--line);display:block"><source src="videos/twitter-network.mp4" type="video/mp4"></video><figcaption style="font-size:12px;color:var(--muted);margin-top:8px;line-height:1.7;text-align:center">Twitter の利用者とつながりの広がりを地球の上に描いた動画（2009 年 1 月の 730 万人から 2012 年 5 月の 4.16 億人まで）。出典：M. Watanabe, T. Suzumura, "How social network is evolving? A preliminary study on billion-scale Twitter network"（WWW Companion 2013）の研究</figcaption></figure>

## Graph500ベンチマークのための高スケーラブルグラフ探索 {nav=Graph500}

Graph500 は大規模グラフ探索問題でスーパーコンピュータを格付けする国際ベンチマークです。公式のリファレンス実装が大規模分散環境でスケールしないことを発見し、2次元分割・通信圧縮・頂点ソートなどを組み合わせた最適化手法を考案しました。最適化実装は、687億頂点・1.1兆エッジのグラフの幅優先探索（BFS）を、1,366ノード・16,392 CPUコアを用いて10.58秒（103.9 GE/s）で処理します。この技術は、後の「京」での Graph500 世界1位につながりました。

![左: Graph500 の性能の推移（2010〜2015 年）。「京」（K Computer）は 2015 年に 38,621 GTEPS に達した。右: 第 1 位の認定証（2015 年 7 月の第 10 回のランキング。「京」が Scale 40 で 38,621.4 GE/s）。出典：研究室の発表資料（左は図の数値から作り直した）。関連する論文：K. Ueno ほか, "Efficient Breadth-First Search on Massively Parallel and Distributed Memory Machines"（IEEE BigData 2016）](images/topic-others-graph500-trend-certificate.jpg)

::article sys-graph500
::article sys-bfs
::article sys-scalegraph

## 兆エッジ級グラフのための分散エッジ分割 — PVLDB 2019 {nav=分散エッジ分割}

高い分割品質を保ちながら兆エッジ級グラフにスケールする並列・分散グラフ分割手法 Distributed NE（Distributed Neighbor Expansion）を提案しました。各パーティションを1頂点から貪欲に拡張し頂点カットの増加を局所最小に抑える「並列拡張」というヒューリスティックに基づき、分割品質の理論的上界も証明しています。既存の分散グラフ分割アルゴリズムより高品質な分割を、桁違いの空間効率で実現し、兆エッジグラフをわずか256台のマシンで70分以内に分割できます。

![Distributed NE の並列拡張。複数の頂点から同時にパーティションを広げる。各パーティションは、境界の頂点のうち残りの辺が最も少ないものを選んでその辺を取り込み、頂点カット（複数のパーティションにまたがる頂点）の増加を局所的に最小に抑える。ランダムな割り当てがほとんど入らないので分割の品質が高く、品質の上界も理論的に示している。出典：M. Hanai ほか, "Distributed Edge Partitioning for Trillion-edge Graphs"（PVLDB 12(13), 2019・arXiv:1908.05855・DOI 10.14778/3358701.3358706）の第 1 著者による実装のリポジトリ（GitHub・MIT License）の図](images/topic-others-08.png){width=80%}

::article sys-edge-partition

## スーパーコンピュータ上での分散 GNN 学習 {nav=分散GNN学習}

これらの大規模グラフ処理の技術を、グラフニューラルネットワーク（GNN）の学習に生かす研究も進めています。数十億頂点・数千億エッジに達する実世界のグラフでは、グラフをどう分割しても計算ノードの間の通信が生じます。グラフの分割と配置、通信と計算の重ね合わせ、スーパーコンピュータの実機での評価を組み合わせ、動的GNNの分散学習では最大30倍の高速化を達成しました（SC 2021）。

![スナップショットの分割と再配置。時刻ごとのグラフを 3 つのプロセッサ（色）に分け、GCN と RNN の間でデータを配り直す。出典：V. T. Chakaravarthy ほか, "Efficient Scaling of Dynamic Graph Neural Networks"（SC 2021・arXiv:2109.07893・DOI 10.1145/3458817.3480858）の図 3(a)](images/topic-others-gnn-snapshot-partitioning.jpg){width=80%}

::article graph-dyngnn-scaling
