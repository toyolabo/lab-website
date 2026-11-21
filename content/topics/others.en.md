---
id: others
catch: Applying our three core technologies to challenges across many fields.
desc: Research beyond the six topics: large-scale graph processing and city-scale traffic simulation on supercomputers, and applications of graphs and AI to finance, markets, flight networks, and social networks.
translated: manual
---

The lab's three core technologies (graphs, AI, and HPC / large-scale systems) can be applied well beyond any single field. This topic introduces research that applies graph neural networks and graph algorithms to fields outside our other six topics: detecting financial crimes, predicting market trends, analyzing changes in flight networks during the COVID-19 pandemic, and examining billion-scale social network dynamics. The insights we gain from these real-world applications also feed back into the development of new algorithms and models.

## Finance: Graph Neural Networks To Mitigate Financial Crime Risks (NeurIPS Workshop'19) {nav=Financial crime}

Financial crime is a large and growing problem, in some way touching almost every financial institution. Financial institutions are the front line in the war against financial crime and accordingly, must devote substantial human and technology resources to this effort. Current processes to detect financial misconduct have limitations in their ability to effectively differentiate between malicious behavior and ordinary financial activity. These limitations tend to result in gross over-reporting of suspicious activity that necessitate time-intensive and costly manual review. Advances in technology used in this domain, including machine learning based approaches, can improve upon the effectiveness of financial institutions' existing processes, however, a key challenge that most financial institutions continue to face is that they address financial crimes in isolation without any insight from other firms. Where financial institutions address financial crimes through the lens of their own firm, perpetrators may devise sophisticated strategies that may span across institutions and geographies. Financial institutions continue to work relentlessly to advance their capabilities, forming partnerships across institutions to share insights, patterns and capabilities. These public-private partnerships are subject to stringent regulatory and data privacy requirements, thereby making it difficult to rely on traditional technology solutions. In this paper, we propose a methodology to share key information across institutions by using a federated graph learning platform that enables us to build more accurate machine learning models by leveraging federated learning and also graph learning approaches. We demonstrated that our federated model outperforms local model by 20% with the UK FCA TechSprint data set. This new platform opens up a door to efficiently detecting global money laundering activity.

::paper suzumura2019towards
::paper stavarache2019exploring

![A visualization of a financial transaction network. Anti-money-laundering detection uses such connections between transactions as clues. Source: research on T. Suzumura et al., "Towards Federated Graph Learning for Collaborative Financial Crimes Detection" (NeurIPS 2019 Finance Workshop, arXiv:1909.12946)](images/transaction-network.png){width=80%}

## Graph Neural Networks for Market Prediction (NeurIPS Workshop 2019) {nav=Market prediction}

Recently, there has been a surge of interest in the use of machine learning to help aid in the accurate predictions of financial markets. Despite the exciting advances in this cross-section of finance and AI, many of the current approaches are limited to using technical analysis to capture historical trends of each stock price and thus limited to certain experimental setups to obtain good prediction results. On the other hand, professional investors additionally use their rich knowledge of inter-market and inter-company relations to map the connectivity of companies and events, and use this map to make better market predictions. For instance, they would predict the movement of a certain company's stock price based not only on its former stock price trends but also on the performance of its suppliers or customers, the overall industry, macroeconomic factors and trade policies. This paper investigates the effectiveness of work at the intersection of market predictions and graph neural networks, which hold the potential to mimic the ways in which investors make decisions by incorporating company knowledge graphs directly into the predictive model. The main goal of this work is to test the validity of this approach across different markets and longer time horizons for backtesting using rolling window analysis. In this work, we concentrate on the prediction of individual stock prices in the Japanese Nikkei 225 market over a period of roughly 20 years. For the knowledge graph, we use the Nikkei Value Search data, which is a rich dataset showing mainly supplier relations among Japanese and foreign companies. Our preliminary results show a 29.5% increase and a 2.2-fold increase in the return ratio and Sharpe ratio, respectively, when compared to the market benchmark, as well as a 6.32% increase and 1.3-fold increase, respectively, compared to the baseline LSTM model.

::paper matsunaga2019exploring

![A supply-chain network of Japanese companies. This work uses such links between companies to predict stock prices. Source: research on D. Matsunaga et al., "Exploring Graph Neural Networks for Stock Market Predictions with Rolling Window Analysis" (NeurIPS 2019 Workshop on Robust AI in Financial Services, arXiv:1909.10660)](images/topic-others-03.png){width=80%}

## The Impact of COVID-19 on Flight Networks (IEEE BigData 2020) {nav=COVID-19 and flights}

As COVID-19 transmissions spread worldwide, governments have announced and enforced travel restrictions to prevent further infections. Such restrictions have a direct effect on the volume of international flights among these countries, resulting in extensive social and economic costs. To better understand the situation in a quantitative manner, we analyzed the OpenSky Network data to clarify flight patterns and flight densities around the world. Then we observed relationships between flight numbers with new infection cases and the economy (the unemployment rate) in Barcelona. We found that the number of daily flights gradually decreased and then suddenly dropped 64% during the second half of March in 2020 after the US and Europe enacted travel restrictions. We also observed a 51% decrease in the global flight network density during this period. Regarding new COVID-19 cases, the world had an unexpected surge regardless of travel restrictions. Finally, the layoffs for temporary workers in the tourism and airplane business increased by 4.3 fold in the weeks following Spain's decision to close its borders.

::paper suzumura2020the

<figure style="margin:6px auto;width:80%;max-width:100%"><video controls playsinline preload="none" poster="images/flight-network-eu-poster.jpg" aria-label="Video of changes in the flight network in Europe" style="width:100%;border-radius:12px;border:1px solid var(--line);display:block"><source src="videos/flight-network-eu.mp4" type="video/mp4"></video><figcaption style="font-size:12px;color:var(--muted);margin-top:8px;line-height:1.7;text-align:center">Changes in the flight network in Europe (January 1 to June 27, 2020). Connections decrease from mid-March, when countries announced travel restrictions. Source: research on T. Suzumura, H. Kanezashi et al., "The Impact of COVID-19 on Flight Networks" (IEEE BigData 2020, arXiv:2006.02950), with data from the OpenSky Network</figcaption></figure>

## Billion-Scale Social Network Analytics (WWW 2013) {nav=Social network analytics}

Social network services such as Twitter, Facebook, MySpace, LinkedIn have been remarkably growing. There are various studies about social networks analysis. Haewoon Kwak performed the analysis of the Twitter network on 2009 and shows the degree of separation. However, the number of users on 2009 is about 41.7 million, the graph scale is not very large compared with the current graph. In this paper, we conduct a Twitter network analysis in terms growth by region, scale-free, reciprocity, degree of separation and diameter using Twitter user data with 469.9 million users and 28.7 billion relationships. We report that the value of degree of separation is 4.59 in current Twitter network through our experiments.

::paper watanabe2013how

<figure style="margin:6px auto;width:80%;max-width:100%"><video controls playsinline preload="none" poster="images/twitter-network-poster.jpg" aria-label="Video of the growth of Twitter users and connections" style="width:100%;border-radius:12px;border:1px solid var(--line);display:block"><source src="videos/twitter-network.mp4" type="video/mp4"></video><figcaption style="font-size:12px;color:var(--muted);margin-top:8px;line-height:1.7;text-align:center">The growth of Twitter users and their connections drawn on the globe (from 7.3 million in January 2009 to 416 million in May 2012). Source: research on M. Watanabe, T. Suzumura, "How social network is evolving? A preliminary study on billion-scale Twitter network" (WWW Companion 2013)</figcaption></figure>

## Highly Scalable Graph Search for the Graph500 Benchmark {nav=Graph500}

Graph500 is an international benchmark that ranks supercomputers by a large-scale graph search problem. Having found that the official reference implementation does not scale in large distributed environments, we devised an optimization method that combines 2D partitioning, communication compression, and vertex sorting. Our optimized implementation performs breadth-first search (BFS) on a graph with 68.7 billion vertices and 1.1 trillion edges in 10.58 seconds (103.9 GE/s) using 1,366 nodes and 16,392 CPU cores. This technology later led to the world No. 1 Graph500 results on the K computer.

![Left: Graph500 performance over time (2010-2015). The K computer reached 38,621 GTEPS in 2015. Right: certificate for first place on the 10th Graph500 list (July 2015; the K computer, 38,621.4 GE/s at Scale 40). Source: the lab's presentation (the left chart was redrawn from its values). Related paper: K. Ueno et al., "Efficient Breadth-First Search on Massively Parallel and Distributed Memory Machines" (IEEE BigData 2016)](images/topic-others-graph500-trend-certificate.jpg)

::article sys-graph500
::article sys-bfs
::article sys-scalegraph

## Distributed Edge Partitioning for Trillion-edge Graphs — PVLDB 2019 {nav=Edge partitioning}

We proposed Distributed NE (Distributed Neighbor Expansion), a parallel and distributed graph partitioning method that scales to trillion-edge graphs while keeping high partitioning quality. It is based on a heuristic called parallel expansion, which greedily expands each partition from a single vertex while keeping the increase in vertex cuts locally minimal, and we also proved a theoretical upper bound on its partitioning quality. It achieves higher-quality partitions than existing distributed graph partitioning algorithms with orders of magnitude better space efficiency, and can partition a trillion-edge graph with only 256 machines in under 70 minutes.

![Parallel expansion in Distributed NE. Partitions grow simultaneously from several vertices. Each partition picks the boundary vertex with the fewest remaining edges and takes in its edges, keeping the increase in vertex cuts (vertices that span multiple partitions) locally minimal. Because little is allocated at random, partition quality is high, and an upper bound on quality is proven. Source: figure from the first author's implementation repository (GitHub, MIT License) for M. Hanai et al., "Distributed Edge Partitioning for Trillion-edge Graphs" (PVLDB 12(13), 2019, arXiv:1908.05855, DOI 10.14778/3358701.3358706)](images/topic-others-08.png){width=80%}

::article sys-edge-partition

## Distributed GNN Training on Supercomputers {nav=Distributed GNN training}

We are also applying these large-scale graph processing technologies to the training of graph neural networks (GNNs). In real-world graphs with billions of vertices and hundreds of billions of edges, communication between compute nodes arises no matter how the graph is partitioned. By combining graph partitioning and placement, overlapping communication with computation, and evaluation on real supercomputers, we achieved up to a 30x speedup in distributed training of dynamic GNNs (SC 2021).

![Snapshot partitioning and re-distribution: snapshots are split among three processors (colors), and data is re-distributed between the GCN and RNN steps. Source: V. T. Chakaravarthy et al., "Efficient Scaling of Dynamic Graph Neural Networks" (SC 2021, arXiv:2109.07893, DOI 10.1145/3458817.3480858), Fig. 3(a)](images/topic-others-gnn-snapshot-partitioning.jpg){width=80%}

::article graph-dyngnn-scaling
