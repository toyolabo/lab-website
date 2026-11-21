---
title: Highly Scalable Graph Search for the Graph500 Benchmark
venue: HPDC 2012
summary: Scaled large-scale graph search on the TSUBAME supercomputer to reach 4th place on the Graph500 (November 2011) — the origin of our large-scale graph processing research.
translated: manual
figureCaption: Summary of BFS optimizations and Graph500 results: optimizations used at each competition, about a 12x speedup in three years on TSUBAME 2, and first-place certificates (2014 and 2015) and performance on the K computer. Source: the lab's presentation (slide 8). Related paper: K. Ueno et al., "Efficient Breadth-First Search on Massively Parallel and Distributed Memory Machines" (IEEE BigData 2016)
---

## Overview

This work develops a highly scalable distributed implementation of breadth-first search (BFS) for the Graph500 benchmark. After showing that the provided reference implementations do not scale in large distributed environments, we devised an optimized method based on 2D partitioning plus communication compression and vertex sorting. On Tokyo Tech's TSUBAME 2.0 using 1,366 nodes and 16,392 CPU cores, the implementation performs BFS on a graph with 2³⁶ vertices (68.7 billion) and 2⁴⁰ edges (1.1 trillion) in 10.58 seconds — a traversal record of 103.9 GE/s at the time, with which TSUBAME 2.0 ranked 4th on the Graph500 list (November 2011). Published at HPDC 2012 (Delft); by Ueno and Suzumura — the origin of our lab's large-scale graph processing research.

## Highlights

- Showed official Graph500 reference implementations do not scale; developed 2D-partitioned BFS with communication compression and vertex sorting
- BFS over 68.7B vertices / 1.1T edges in 10.58 s on TSUBAME 2.0 (1,366 nodes) — a world record 103.9 GE/s
- Earned TSUBAME 2.0 4th place on the Graph500 list (November 2011)

## Background

Graph analysis targets grew to tens of billions of vertices and hundreds of billions of edges across social networks, protein interactions, and the web. Since 1994 the de facto supercomputer ranking was the compute-centric TOP500 (Linpack); Graph500, launched in 2011, instead measures data-intensive performance: BFS over Kronecker graphs modeling real web/social networks, ranked by TEPS (traversed edges per second). The benchmark comprises graph construction (Kernel 1), BFS (Kernel 2), and a 5-rule validation; the largest class (Scale 42) requires ~1.1 PB of memory. The authors' earlier study (IEEE IISWC 2011) had thoroughly analyzed the reference implementations, identifying their scalability limits.

![How Graph500 works. BFS is run on a large synthetic graph (a Kronecker graph), and supercomputers are ranked by the number of edges traversed per second (TEPS). Source: the lab's introductory materials (2024)](images/article-sys-graph500.png){width=720}

## Method

Optimizations span: parallel level-synchronized BFS on a 2D-partitioned adjacency matrix with improved cache-hit ratios via graph structure design and vertex sorting; communication compression to cut inter-node traffic — the scalability bottleneck; and a lighter-weight end-to-end benchmark flow with faster graph construction and validation.

## Results

On TSUBAME 2.0 (Fat-Tree InfiniBand), the implementation achieved 103.9 GE/s — BFS over 68.7B vertices / 1.1T edges in 10.58 s on 1,366 nodes — with a thorough comparative performance study against the reference implementations.

## Significance

The 2D-partitioned BFS and communication optimizations established here evolved through GPU BFS (HiPC 2013) to the world #1 Graph500 result on the full K computer (IEEE BigData 2016) — the starting point of the lab's graph × HPC axis.

## Outlook

This work is the starting point of our graph × HPC axis. Its 2D-partitioned BFS and communication optimizations evolved through GPU implementations (HiPC 2013) to the world #1 Graph500 result on the full K computer (38,621.4 GTEPS, IEEE BigData 2016). The expertise in scaling communication-bound, data-intensive workloads carries through ScaleGraph, trillion-edge partitioning (PVLDB 2019), and distributed dynamic-GNN training (SC 2021). BFS is the kernel of connected components, centrality, and shortest paths, so its extreme performance propagates across graph processing — and now underpins our program on supercomputer-scale pre-training of graph foundation models.
