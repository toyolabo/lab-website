---
id: gfm
catch: Building graph foundation models that learn dynamic connections across domains.
desc: Toward graph foundation models that can be reused across domains, we work on learning on dynamic graphs, distributed training on supercomputers, spectral representations, and fusion with LLMs and extension to EEG / spatiotemporal data.
translated: manual
---

Graphs are fundamental data structures that represent relationships between objects (vertices) connected by edges. They can represent a wide range of relationships in the digital, physical, and biological worlds — online social networks, user behavior on e-commerce sites, supply chain and financial transaction networks, road systems, neural networks in the brain, protein interactions, chemical structures, and knowledge graphs. With the increasing availability of digital data, these graphs can be enormous, each with geospatial and temporal semantics. Graph Neural Networks (GNNs) automatically learn from these graph structures.

Our lab combines its three core technologies (graphs, AI, and HPC / large-scale systems) to learn from graphs. This page introduces our goal of graph foundation models and the work that leads toward it: learning on dynamic graphs, distributed training at scale, spectral representations, and applications to domain-specific problems.

## Toward graph foundation models

Like foundation models in language, we aim to build graph foundation models — large pre-trained models transferable to any graph. Toward this goal, we work on extension to EEG and spatiotemporal data (the [Graph-Enhanced EEG Foundation Model](#/en/article/a-brain1), IEEE EMBC 2025, in the [Neuroscience](#/en/category/brain) topic) and large-scale training on distributed HPC infrastructure ([Research Infrastructure & Services](#/en/category/systems)), and we are also exploring knowledge reasoning fused with LLMs.

Real-world graphs differ from domain to domain in what their vertices and edges mean, in their features, and in their scale. Transferring across domains requires domain-independent representations of structure, a way to align different feature spaces, and designs that absorb differences in scale. We aim to bring together basic research such as representation learning on dynamic graphs and the spectral analysis of expressive power, applied research on EEG, finance, traffic, and recommendation, and distributed training infrastructure on supercomputers toward this goal. For integrating graphs with large language models (LLMs), we are exploring designs that combine the semantic understanding of LLMs with the structural modeling of GNNs.

::article a-brain1

## Learning on dynamic graphs

Real-world graphs evolve over time, and nodes appear and disappear. Most earlier methods use an RNN to regulate node embeddings, so they require knowledge of a node over the full time span. EvolveGCN (AAAI 2020) adapts the graph convolutional network (GCN) along the temporal dimension without resorting to node embeddings: an RNN evolves the GCN parameters themselves at every time step, so the model handles frequently changing node sets. Across seven datasets, both versions beat GCN and GCN-GRU in edge classification on all three datasets, and EvolveGCN gave the best link prediction results on three of five datasets. This work was done by Prof. Suzumura and collaborators at IBM Research, Prof. Suzumura's previous employer.

::article gfm-evolvegcn

## Scaling dynamic GNN training

A dynamic GNN processes a graph snapshot at every timestep, so on large graphs GPU memory runs short and CPU-to-GPU data transfer and inter-GPU communication dominate the execution time. The SC 2021 work presents distributed algorithms for training dynamic GNNs on multi-node, multi-GPU systems: a data distribution technique that splits the snapshots across GPUs by timestep, under which the communication volume remains fixed and linear in the input size for any number of GPUs, and a graph difference-based strategy that, since consecutive snapshots are nearly identical, transfers only the difference from the previous one. In experiments using billion-size graphs on a system of 128 GPUs, training ran up to 30x faster than on one GPU (ideal: 128x), and on a single node the graph-difference technique reduced the transfer time by up to 4.1x and the overall execution time by up to 40%. The paper describes it as, to the best of the authors' knowledge, the first scaling study on dynamic GNNs. This work was done by Prof. Suzumura and collaborators at IBM Research, Prof. Suzumura's previous employer.

::article graph-dyngnn-scaling

## Seeing graphs through the spectrum

Learning by local neighborhood aggregation essentially captures only low-pass signals and local interactions, so relationships between distant nodes, the global interactions, are easily missed. Through joint research, we have studied graphs in the spectral domain. We showed that attention in Transformers for graphs is effective only for low-pass filters, and proposed FeTA, which performs attention over the entire graph spectrum (TMLR 2022). We then developed DEFT, which captures the evolving spectrum of dynamic graphs with learnable spectral wavelets to learn global features (AAAI 2023), and the Evolving Graph Fourier Transform (EFT), an invertible spectral transform that jointly captures frequencies over time and over the graph on temporal graphs (ICLR 2024). EFT lowers the cost in the number of timesteps T from O(T^3) to O(T + T log T).

::article gfm-spectral-transformer
::article gfm-wavelets
::article gfm-eft

## Applying graph learning to domain-specific problems {nav=Domain applications}

We also apply graph learning to problems in specific domains. For fraud detection, we built a heterogeneous graph from the real Ethereum transaction network, distinguishing account types, and compared homogeneous GNNs with heterogeneous GNNs. RGCN, which convolves separately per edge type, was best (F1 0.812), above the best homogeneous GNN, GraphSAGE (0.735) (KDD 2022 Workshop MLG). For traffic forecasting, in joint research, we proposed Spatio-Temporal Meta-Graph Learning and the Meta-Graph Convolutional Recurrent Network (MegaCRN), and built EXPY-TKY, a traffic speed dataset that covers 1,843 expressway road links in Tokyo, releasing the code and dataset (AAAI 2023). For knowledge graph completion, in joint research, we proposed Knowledge Persistence (KP), a metric for faster evaluation of knowledge graph completion methods using persistent homology, which is highly correlated with ranking metrics while reducing evaluation time by about 99.96% on average (WWW 2023). Working with graphs whose meaning and scale differ from domain to domain also gives us clues for designing models that transfer across domains.

Other applications of graphs — detecting financial crimes, predicting market trends, analyzing changes in flight networks during the COVID-19 pandemic, and examining billion-scale social network dynamics — are introduced in [Other Application Areas](#/en/category/others).

::article gfm-ethereum
::article graph-traffic
::article graph-ph-kgc
::article sys-city-sim
