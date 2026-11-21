---
title: ScaleGraph: A High-Performance Library for Billion-Scale Graph Analytics
venue: IEEE BigData 2015
summary: An open-source high-performance library for billion-scale distributed graph analytics.
translated: manual
figureCaption: ScaleGraph at a glance. Left: library architecture, software stack, supported algorithms and performance. Right: applications (Twitter network analysis, Twitter diffusion simulation and traffic simulation). Source: T. Suzumura, K. Ueno, "ScaleGraph: A High-Performance Library for Billion-Scale Graph Analytics" (IEEE BigData 2015)
---

## Overview

ScaleGraph is an open-source high-performance library for billion-scale graph analytics on distributed-memory systems. Built on X10 — a PGAS parallel language pursuing "Performance and Productivity at Scale" — it centers on the XPregel framework, inspired by Google's Pregel computation model, as a building block for implementing graph kernels such as PageRank and spectral clustering. The work also optimizes the X10 runtime itself (collective communication and memory management). In a PageRank experiment with 16 machine nodes, ScaleGraph is 9.4x faster than Apache Giraph — to our knowledge the first X10-based library to address performance, scalability, and productivity for large-scale graph analytics. Presented at IEEE BigData 2015 (Suzumura, Ueno, et al.).

## Highlights

- Open-source billion-scale graph analytics library on the PGAS language X10 (IEEE BigData 2015)
- Vertex-centric XPregel framework plus optimizations of the X10 runtime itself (collectives, memory management)
- 9.4x Apache Giraph’s PageRank performance on 16 nodes

## Background

Gigantic graphs — social networks, web link graphs, Internet topologies — outgrew single machines, spawning distributed frameworks (PBGL, Apache Giraph, Google Pregel, GraphLab). Performance-oriented ones demand C/C++ and MPI expertise; productivity-oriented Java frameworks trade away performance. Toward exascale, combining performance with reduced software complexity is paramount. The PGAS model merges SPMD-style distributed memory with shared-memory data referencing, making remote data manipulation transparent — a promising path to productive HPC — yet PGAS graph analytics libraries were rare.

## Design

ScaleGraph exploits X10's referential semantics, collective communication, Cilk-style fork-join parallelism, and native code integration. The vertex-centric XPregel framework underpins kernel implementations. Two X10 runtime optimizations — optimized X10 Team collectives and Explicitly Managed Memory — significantly improve performance and memory consumption.

![Structure of ScaleGraph. Left: the software stack. Below user programs and graph algorithms are a Pregel-style graph processing engine (XPregel), sparse matrix computation, and file I/O, running on the ScaleGraph core library, the X10 runtime, and MPI. Right: graph distribution. A graph (vertices 0–7) is represented as an adjacency matrix and distributed column-wise across compute nodes (P0–P3). Source: slides 16 and 20 of the presentation for T. Suzumura and K. Ueno, "ScaleGraph: A High-Performance Library for Billion-Scale Graph Analytics" (IEEE BigData 2015), placed side by side](images/article-sys-scalegraph.png)

## Results

Performance and scalability evaluation with synthetic and real graphs shows most graph kernels scale well; against comparable libraries, ScaleGraph achieves 9.4x Giraph's PageRank performance on 16 nodes.

## Significance

A pioneering demonstration of PGAS-based large-scale graph analytics, released open source (scalegraph.org). Alongside the Graph500 work, it anchors the lab's graph systems research; the Megaffic city traffic simulator was also built on X10, forming an X10 research ecosystem.

## Outlook

ScaleGraph pioneered a third way past the performance (C/C++/MPI) vs. productivity (Java) trade-off, demonstrating PGAS-based graph analytics at scale. Released at scalegraph.org, it formed an X10 research ecosystem together with the Megaffic traffic simulator. Its design insights — vertex-centric programming, distributed graph representation, collective communication optimization — carried into distributed edge partitioning (PVLDB 2019) and distributed GNN training (SC 2021). The experience of confronting general-purpose runtime limits (GC, communication) also shaped the hybrid design principle — native code where performance-critical, high-level elsewhere — that guides our current graph learning infrastructure research.
