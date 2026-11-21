---
title: Extreme Scale Breadth-First Search on Supercomputers
venue: IEEE BigData 2016
summary: Optimization techniques scaling BFS to extreme scales on supercomputers, underpinning our Graph500 world #1 results.
translated: manual
figureCaption: Left: Graph500 BFS applied to the Twitter follower network (41 million vertices, 1.47 billion edges); 99.97% of users are reached within six levels. Right: Graph500 performance on TSUBAME 2 (about 12x in three years). Sources: left, K. Fujisawa et al., "Advanced Computing and Optimization Infrastructure for Extremely Large-Scale Graphs on Post-peta-scale Supercomputers" (Advanced Software Technologies for Post-Peta Scale Computing, Springer, 2019, DOI 10.1007/978-981-13-1924-2_11), Fig. 11.4; right, the lab's presentation (slide 8)
---

## Overview

This work presents a new distributed parallel BFS method that computes BFS on a trillion-vertex graph within half a second, earning the K computer the #1 rank on Graph500 using all 82,944 nodes in June and November 2015 and June 2016, at 38,621.4 GTEPS. Building on Beamer's hybrid-BFS, we devise optimizations for extreme node counts, including a new efficient graph data structure, vertex reordering, and load balancing; on 30,720 nodes the new BFS is 3.19x faster than a base version using the previously known best techniques. Presented at IEEE BigData 2016; joint work of Tokyo Tech, IBM T.J. Watson, RIKEN, and Kyushu University (Ueno, Suzumura, Maruyama, Fujisawa, Matsuoka).

## Highlights

- Extended hybrid (direction-optimizing) BFS to extreme scale: trillion-vertex BFS in under half a second
- 38,621.4 GTEPS on all 82,944 nodes of the K computer — Graph500 world #1 from June 2015, held for years
- Beat machines with far more cores and FLOPS (Sequoia, TaihuLight), proving interconnect and algorithms decide graph performance

## Background

Modern graph applications — social media, brain synaptic connectivity, protein interaction networks — reach billions of edges and trillion-scale vertices. Graph500 measures data-analytics performance via BFS over Kronecker graphs in TEPS; BFS is a kernel of connected-components and centrality analyses. Hybrid BFS heuristically switches between top-down search (efficient for small frontiers) and bottom-up search (efficient for large frontiers) and excels on small-diameter graphs, but scaling it to top-tier supercomputers with tens of thousands of nodes and hundreds of thousands of cores was unestablished.

![Breadth-first search (BFS). Given an input graph and a root vertex, BFS visits vertices level by level by their distance from the root and outputs a BFS tree. Source: K. Ueno et al., "Extreme Scale Breadth-First Search on Supercomputers" (slide 5 of the IEEE BigData 2016 presentation)](images/article-sys-bfs.png)

## Method

The work extends hybrid-BFS data structures and algorithms to extreme scale: a new efficient graph data structure over the 2D-partitioned adjacency matrix, vertex reordering to handle power-law degree skew, load balancing optimizations, and communication design attentive to the K computer's Tofu interconnect.

## Results

Using all 82,944 nodes and 663,552 cores of the K computer, the implementation achieved 38,621.4 GTEPS — #1 on Graph500 for three consecutive editions from 2015 (and long after) — outperforming machines like Sequoia and TaihuLight with far more cores and FLOPS. On 30,720 nodes it runs 3.19x faster than the best-known baseline. The result demonstrates that interconnect performance and algorithmic advances, not FPU counts, drive large-scale graph performance — also explaining why clouds are absent from Graph500's top ranks.

## Significance

An emblematic demonstration that algorithms and system software set world records in data-intensive computing; these techniques underpin the lab's later graph analytics and distributed GNN training work (SC 2021 onward).

## Outlook

The K computer's Graph500 crown was an emblem of Japanese supercomputing and a proof that algorithms and system software, not raw hardware, set world records — a legacy continued by Fugaku's Graph500 leadership. The efficient graph data structures, vertex reordering, and load balancing developed here are foundations for distributed graph processing generally: PageRank, connected components, and GNN training. We connected this lineage to distributed GNN training (SC 2021) and now to the computational backbone for graph foundation model pre-training. Sub-second traversal of trillion-scale graphs is the groundwork for an era of humanity's largest graphs — entire social networks, whole-brain synaptic connectivity.
