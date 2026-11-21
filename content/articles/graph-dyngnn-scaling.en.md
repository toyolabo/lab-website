---
title: Efficient Scaling of Dynamic Graph Neural Networks
venue: SC 2021
summary: Work on scaling GNN training to large graphs had focused on static GNNs, not dynamic GNNs for graphs that change over time. A dynamic GNN processes a graph snapshot at every timestep, so GPU memory runs short and CPU-to-GPU transfers and inter-GPU communication dominate. This work splits the snapshots across GPUs by timestep and regroups them by vertex before the RNN step, keeping communication linear in the input size for any number of GPUs. Since consecutive snapshots are nearly identical, it transfers only the difference from the previous one. In experiments using billion-size graphs, training on 128 GPUs ran up to 30x faster than on one GPU (ideal: 128x), and on a single node transfer time fell by up to 4.1x and total run time by up to 40%.
translated: manual
figureCaption: Source: part (a) of Fig. 3 of V. T. Chakaravarthy, S. S. Pandian, S. Raje, Y. Sabharwal, T. Suzumura, S. Ubaru, "Efficient Scaling of Dynamic Graph Neural Networks" (SC 2021, arXiv:2109.07893), from the original paper (CC BY-NC-ND 4.0, figure content unmodified)
---

## Overview

This work presents distributed algorithms for training dynamic Graph Neural Networks (GNN) on large-scale graphs spanning multi-node, multi-GPU systems — to our knowledge the first scaling study on dynamic GNN. We devise mechanisms for reducing GPU memory usage and identify two execution-time bottlenecks: CPU-GPU data transfer and communication volume. Exploiting properties of dynamic graphs, a graph-difference-based strategy significantly reduces transfer time, and a simple but effective data distribution technique keeps communication volume fixed and linear in input size for any number of GPUs. Experiments using billion-size graphs on a system of 128 GPUs show (i) up to 30x speedup from the distribution scheme over a single GPU (ideal: 128x) and (ii) on a single node, up to 4.1x transfer-time reduction (EvolveGCN and TM-GCN; up to 2x for CD-GCN) and up to 40% overall execution-time reduction from graph differences. Published at SC 2021; work done by the authors at IBM Research (India and T.J. Watson), including Prof. Suzumura while at IBM.

## Highlights

- To the authors' knowledge, the first scaling study of dynamic GNN training on multi-node, multi-GPU systems (SC 2021)
- Graph-difference transfer strategy speeds up CPU-GPU transfer by up to 4.1x on a single node (EvolveGCN, TM-GCN), cutting total execution by up to 40%
- Distribution scheme keeps communication fixed and linear in input size for any GPU count — up to 30x speedup on 128 GPUs over one GPU (ideal: 128x)

## Background

Static GNN scaling is well studied (PinSage, DGL, PyG, AliGraph), with optimizations for the GPU-memory and communication bottlenecks: large graphs must stream from CPU to GPU in chunks, and communication volume governs multi-GPU scaling. Real graphs, however, evolve. Dynamic GNNs for discrete-time dynamic graphs (DTDG) combine per-snapshot graph convolutions with per-vertex RNNs across the timeline — the framework followed by CD-GCN, EvolveGCN, and TM-GCN — yet no scalability study existed for this setting.

## Method

The time-series aspect provides specific optimization opportunities. For communication: natural vertex-partitioning schemes have volume dependent on graph density, growing with system size, with irregular patterns; our distribution technique (partitioning across snapshots and vertices) keeps communication fixed and linear in input size regardless of GPU count. For transfer: consecutive snapshots differ little, so transferring only graph differences instead of full snapshots sharply cuts CPU-GPU time. The optimizations are applied to three representative models: CD-GCN, EvolveGCN, and TM-GCN.

![Snapshot partitioning and redistribution. (a) The graphs (A_t) and features (X_t) at each timestep are assigned to three processors (colors) by timestep for the GCN, redistributed by vertex before the RNN, and redistributed back after it. (b) With gradient checkpointing, the timesteps are split into blocks and each block is assigned the same way. Source: Fig. 3 of V. T. Chakaravarthy, S. S. Pandian, S. Raje, Y. Sabharwal, T. Suzumura, S. Ubaru, "Efficient Scaling of Dynamic Graph Neural Networks" (SC 2021, arXiv:2109.07893), CC BY-NC-ND 4.0, figure content unmodified](images/article-graph-dyngnn-scaling-01.png)

## Results

Experiments using billion-size graphs on a system of 128 GPUs show that the distribution scheme achieves up to 30x speedup over one GPU (ideal: 128x); on a single node, the graph-difference technique reduces transfer time by up to 4.1x (EvolveGCN and TM-GCN; up to 2x for CD-GCN) and overall execution time by up to 40%.

## Significance

This work addresses distributed training of dynamic GNNs on large graphs, making CD-GCN, EvolveGCN, and TM-GCN trainable on multiple GPUs.

## Outlook

The paper lists three directions for future work (Sec. 7): a hybrid partitioning scheme for large snapshots; exploring computation-communication overlap; and scaling continuous-time dynamic graphs (CTDG), where the evolving graph is represented by insertions and deletions of vertices and edges.
