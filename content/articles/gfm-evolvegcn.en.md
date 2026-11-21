---
title: EvolveGCN: Evolving Graph Convolutional Networks for Dynamic Graphs
venue: AAAI 2020
summary: Many real graphs, such as social networks and financial transactions, change over time. Most earlier methods use an RNN to regulate the node embeddings, so each node has to be known over the whole time span, which makes them hard to use when nodes frequently appear and disappear. EvolveGCN instead uses an RNN (GRU or LSTM) to evolve the GCN weights themselves at every time step. Only the RNN parameters are trained, so the model does not grow with the number of time steps and can be applied to newly appearing nodes. Across seven datasets, both versions beat GCN and GCN-GRU in edge classification on all three datasets, and EvolveGCN gave the best link prediction results on three of five datasets (MAP on AS: 0.153 vs. 0.071 for the best baseline).
translated: manual
figureCaption: Source: Fig. 1 of A. Pareja et al., "EvolveGCN: Evolving Graph Convolutional Networks for Dynamic Graphs" (AAAI 2020, arXiv:1902.10191), from the original paper (© 2020 AAAI)
---

## Overview

EvolveGCN is a graph neural network for dynamic graphs built on a key inversion: instead of evolving node embeddings, evolve the GCN's weight parameters with an RNN. A collaboration of the MIT-IBM Watson AI Lab, IBM Research, and MIT CSAIL published at AAAI 2020, it comes with an open-source implementation (github.com/IBM/EvolveGCN).

## Highlights

- Evolves the GCN weight matrices with an RNN instead of node embeddings, handling dynamic graphs whose node sets change constantly
- GCN weights are computed by the RNN, so only RNN parameters are trained — model size does not grow with the number of timesteps
- Evaluated on 3 tasks and 7 datasets; generally outperforms prior methods, but not on every dataset (e.g., link prediction on BC-OTC and BC-Alpha)

## Background

GCNs succeed on static graphs, but real graphs evolve: friendships develop, citation networks grow, and in financial networks transactions carry timestamps while account behavior itself changes — an account joins money laundering, a user becomes a fraud victim. Early detection of such changes is crucial for law enforcement and loss minimization. Prior dynamic methods used GNNs as feature extractors with RNNs regulating node embeddings — requiring knowledge of each node across the full time span (training and testing). Nodes that frequently appear and disappear make such irregular behavior hard for RNNs to learn; in extreme scenarios node sets at different timesteps may completely differ, and performance on future new nodes cannot be promised.

## Method

EvolveGCN adapts the GCN along the temporal dimension without resorting to node embeddings: the GCN weight matrices at each timestep are computed by a recurrent network, performing model adaptation focused on the model itself rather than embeddings. Node set changes pose no restriction, and the evolved GCN remains sensible for new nodes without history. Notably, the GCN parameters are no longer trained — they are computed by the RNN, so only RNN parameters are trained, and model size does not grow with the number of timesteps.

Two variants: EvolveGCN-H treats weights as a GRU hidden state updated with current node embeddings (may be more effective when node features are informative); EvolveGCN-O treats weights as LSTM input/output, modeling the weight sequence directly (may be more effective when node features are not much informative but the graph structure plays a more important role).

![The two versions of EvolveGCN. Top: EvolveGCN-H (the GCN weights are the hidden state of a GRU that takes node embeddings as input). Bottom: EvolveGCN-O (the GCN weights are the input/output of an LSTM). In each, the left is the recurrent part, the middle the graph convolution, and the right the combined unit. Source: Fig. 2 of A. Pareja et al., "EvolveGCN: Evolving Graph Convolutional Networks for Dynamic Graphs" (AAAI 2020, arXiv:1902.10191), © 2020 AAAI](images/article-gfm-evolvegcn-01.png)

## Results

Across link prediction, edge classification, and node classification on SBM, who-trusts-whom networks of Bitcoin users (BC-OTC, BC-Alpha), UCI messages, Autonomous Systems, Reddit, and Elliptic (labeled illicit Bitcoin transactions), EvolveGCN generally outperforms the static GCN and GCN-GRU, although on link prediction for BC-OTC and BC-Alpha it is inferior to DynGEM and dyngraph2vec (Sec. 4.5). On Elliptic, EvolveGCN-O is better than the static GCN but not as good as GCN-GRU (Sec. 4.7).

## Significance

EvolveGCN proposed the idea of "evolving the model (the GCN weights), not the embeddings." Related work introduced on this site includes distributed scaling (SC 2021), spectral learning on dynamic graphs (AAAI 2023, ICLR 2024), and Ethereum fraud detection (KDD 2022 Workshop MLG).

## Outlook

Distributed training of discrete-time dynamic GNNs, including EvolveGCN, is covered in the SC 2021 work (done while Prof. Suzumura was at IBM). Spectral learning, which handles global structure that neighborhood aggregation misses, is covered in studies led by collaborators (AAAI 2023, ICLR 2024). Financial fraud detection is covered in the Ethereum heterogeneous-graph study (arXiv 2022).
