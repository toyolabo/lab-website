---
title: Distributed Edge Partitioning for Trillion-edge Graphs
venue: PVLDB 2019
summary: Efficient distributed edge partitioning for trillion-edge graphs, published in PVLDB.
translated: manual
figureCaption: Overview of Distributed NE. The input graph is randomly distributed to allocation processes; each expansion process starts from a random vertex and repeats vertex selection, edge allocation and boundary update (Steps 1-6). Dotted arrows show work flow and solid arrows show data flow. Source: M. Hanai et al., "Distributed Edge Partitioning for Trillion-edge Graphs" (PVLDB 12(13), 2019, arXiv:1908.05855, DOI 10.14778/3358701.3358706), Fig. 4
---

## Overview

Distributed Neighbor Expansion (Distributed NE) is a parallel and distributed graph partitioning method that scales to trillion-edge graphs while providing high partitioning quality. It is based on a new heuristic, parallel expansion, where each partition is constructed in parallel by greedily expanding its edge set from a single vertex such that the increase of vertex cuts becomes locally minimal. We theoretically prove an upper bound on partitioning quality. Empirically, Distributed NE produces higher-quality partitions than state-of-the-art distributed algorithms, with order-of-magnitude better space efficiency and comparable time efficiency — partitioning a trillion-edge graph using only 256 machines within 70 minutes. Published in PVLDB 2019; first-authored by Masatoshi Hanai (now Project Lecturer in our lab) with IBM T.J. Watson Research Center, SUSTech, and NTU.

## Highlights

- Distributed NE: parallel-expansion-based distributed edge partitioning with a proven quality upper bound (PVLDB 2019)
- Higher-quality partitions than state-of-the-art distributed methods, with order-of-magnitude better space efficiency
- Partitions a trillion-edge graph on just 256 machines within 70 minutes — the largest demonstrated scale

## Background

Graph partitioning determines the efficiency of distributed graph processing systems (Pregel, GraphX, PowerGraph, ScaleGraph, ...), minimizing communication while balancing load. Edge partitioning (vertex-cut) outperforms traditional vertex partitioning on real skewed graphs, since computational cost depends on edge counts and power-law degree distributions wreck vertex-partitioned load balance. The challenges are quality (vertex-cut minimization is NP-hard) and scalability: hash-based methods (1D/2D hash, DBH, Hybrid Hash) scale but allocate edges essentially at random (low quality, with limited gains from refinements like Oblivious and Hybrid Ginger), while high-quality sequential algorithms and even Sheep, the state-of-the-art distributed method, cannot reach trillion-edge scale — as real graphs like Facebook's social graph exceed a trillion edges.

## Method

Starting from multiple random vertices, each partition greedily expands its edge set in parallel, choosing edges that minimize vertex-cut increase — allocating most edges locally optimally with almost no random assignment. A novel distributed edge allocation resolves scalability and performance issues, and a further optimization speeds up partitioning while preserving quality. Theoretical analysis proves an upper bound on vertex cuts, better than existing distributed methods' bounds.

## Results

Across various skewed graphs, Distributed NE produces significantly higher-quality partitions than existing distributed algorithms, with order-of-magnitude better space efficiency and comparable time — successfully partitioning a trillion-edge graph on 256 machines within 70 minutes, the largest demonstrated scale for distributed edge partitioning at the time.

## Significance

Partitioning underlies all distributed graph processing and GNN training; this work provides the technical foundation for large-scale graph placement in the lab's distributed GNN program (SC 2021 onward).

## Outlook

Graph partitioning precedes all distributed graph processing and GNN training; its quality directly drives downstream communication, load balance, and runtime. In an era when Facebook's social graph exceeds a trillion edges, achieving quality and speed together with theoretical guarantees makes this work a reference point for subsequent research. Our lab applies its partitioning to large-graph placement in distributed GNN training (SC 2021), with "training-aware partitioning" — accounting for multi-layer aggregation communication patterns and feature/gradient sizes — as a current research question. First author Hanai, now Project Lecturer in our lab, brings this distributed-algorithm expertise to the lab's systems research including ARIM-mdx.
