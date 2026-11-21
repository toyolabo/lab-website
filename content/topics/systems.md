---
id: systems
name: 研究基盤・サービス
en: Research Infrastructure & Services
axes: [hpc]
image: images/topic-systems.jpg
catch: 大規模計算システムとサービスの運用に参画し、研究を基盤から支える。
desc: データ活用社会創成プラットフォームmdx、大規模GPUシステムSYNKA、材料研究のデータ基盤ARIM-mdx、大規模AI推論サービスmdx-MaaSなど、研究を支える基盤とサービスの運用と、それらを使った研究。
cases: [a2, mi-lims]
casesHeading: 論文で発表した成果
casesLead: ここまで紹介した基盤について、研究として取り組んだ内容を紹介します。
---

本研究室は、東京大学情報基盤センターをはじめとする学内外の機関と連携し、研究を支える基盤とサービスの運用に携わっています。全国の大学・研究機関が共同で運用するデータ活用社会創成プラットフォームmdxと、東京大学の複数の機関による大規模GPUシステムSYNKAでは、その運用に加わっています。mdxの上では、材料研究のデータ基盤ARIM-mdxの運用に携わり、大規模AI推論サービスmdx-MaaSの設計と構築、運用を担っています。研究室のグラフ・AIの研究の多くも、これらの基盤を使って進めています。

## データ活用社会創成プラットフォーム mdx {nav=mdx}

mdx は、全国の大学・研究機関でつくるデータ活用社会創成プラットフォーム協働事業体が運用する、データ科学と分野横断研究のためのプラットフォームです。本研究室はその運用の一部に携わっています。mdx の設計思想と構成、運用の状況は、鈴村教授が筆頭著者の論文で報告しています。マテリアルズインフォマティクスをはじめ、研究室の応用研究の多くも mdx を使って進めています。

![mdx の全体像。計算ノードとストレージを、仮想ネットワークでプロジェクトごとに分けて使う（紫・青・橙の枠）。SINET5 を通して全国の研究機関や IoT 機器などのデータ源とつながり、ABCI などのスーパーコンピュータとも連携する。出典：T. Suzumura ほか, "mdx: A Cloud Platform for Supporting Data Science and Cross-Disciplinary Research Collaborations"（IEEE DASC/PiCom/CBDCom/CyberSciTech 2022・arXiv:2203.14188）の図1（原論文より・CC BY 4.0）](images/article-sys-mdx.png){width=70%}

[データ活用社会創成プラットフォーム mdx](https://mdx.jp/)

[論文: mdx: A Cloud Platform for Supporting Data Science and Cross-Disciplinary Research Collaborations（IEEE DASC/PiCom/CBDCom/CyberSciTech 2022）](https://doi.org/10.1109/DASC/PiCom/CBDCom/Cy55231.2022.9927975)

::article sys-mdx

## 大規模 GPU システム SYNKA {nav=SYNKA}

大規模 GPU システム SYNKA は、東京大学臨床医療システムAI研究推進機構および東京大学生産技術研究所の GPU クラスタで、東京大学情報基盤センターとともに運用にあたっています。NVIDIA H200 GPU を搭載した計算ノード 50 台（GPU 400 基）を備え、AI 学習・推論やデータ解析など、AI for Science に資する研究に使われています。本研究室は、利用制度の設計や利用者向けの案内の整備などを通じて、その運用に携わっています。

![SYNKA のシステム構成。H200 を 8 基ずつ載せた GPU ノード 50 台と CPU ノード 6 台を、高速通信ネットワーク（InfiniBand）と一般アクセスのネットワーク（Ethernet）でつなぎ、高速ストレージ（2.1 PB）と大容量ストレージ（5 PB）を共有する。拠点間の接続は GW サーバから SINET（L2VPN）を通す。出典：SYNKA システム公式サイト（https://synka-jp.org/）のシステム構成図](images/topic-systems-synka.png)

[SYNKA システム公式サイト](https://synka-jp.org/)

## 材料研究のデータ基盤 ARIM-mdx {nav=ARIM-mdx}

全国の共用実験施設とスーパーコンピュータのデータを mdx に集め、材料研究者が使えるようにするデータ基盤 ARIM-mdx データシステムの運用に携わっています。ネットワークにつながらない実験装置からもデータを集められるようにした大学共用施設向け LIMS（実験情報管理システム）は、ARIM-mdx を実現する構成要素の一つです。

[ARIM-mdx データシステム](https://arim.mdx.jp/)

::article a2
::article mi-lims

## 大規模 AI 推論サービス mdx-MaaS {nav=mdx-MaaS}

mdx の上で、大規模言語モデルなどのオープンな AI モデルを使えるようにする推論サービス mdx-MaaS の設計と構築、運用に取り組んでいます。プログラムから呼び出せる API に加えて、ブラウザで使えるチャットの画面も用意しています。研究者が自分で GPU サーバを用意しなくても、mdx の中で安全に AI を研究に使えるようにすることを目指しています。

[mdx-MaaS ポータルサイト](https://sites.google.com/view/mdx-maas/)

[論文: mdx MaaS: 学術クラウド基盤mdxにおけるスケーラブルなAI推論基盤（大学ICT推進協議会 2025年度年次大会）](https://doi.org/10.24669/axies.2025.0_361)
