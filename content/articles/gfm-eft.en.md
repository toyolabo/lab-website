---
title: Beyond Spatio-Temporal Representations: Evolving Fourier Transform for Temporal Graphs
venue: ICLR 2024
summary: For graphs whose structure changes over time, neighbor-aggregating GNNs dominate; the spectral view that served static graphs well had not been applied. Joint graph-time frequencies need the eigendecomposition of a large matrix, costly as timesteps grow. EFT (Evolving Graph Fourier Transform) defines the transform as an optimization over the dynamic graph's Laplacian and, via pseudospectrum relaxations, splits it into a Fourier transform over time and a graph Fourier transform per timestep, yielding an invertible transform whose cost in T drops from O(T^3) to O(T + T log T). A model using EFT beat the best baseline on all three Amazon sequential recommendation sets (Recall@10 on CDs: 72.43 to 75.42) and raised MAP on AS from 0.233 to 0.672.
translated: manual
figureCaption: Source: Fig. 1 of A. Bastos, K. Singh, A. Nadgeri, M. Singh, T. Suzumura, "Beyond Spatio-Temporal Representations: Evolving Fourier Transform for Temporal Graphs" (ICLR 2024, arXiv:2402.16078), from the original paper (CC BY 4.0)
---

## Overview

We present the Evolving Graph Fourier Transform (EFT), to our knowledge the first invertible spectral transform that captures evolving representations on temporal graphs. We formulate the problem as an optimization over the Laplacian of the continuous-time dynamic graph and propose pseudo-spectrum relaxations that decompose the transformation process, making it highly computationally efficient, with proven theoretical bounds on the difference between EFT and the exact variational solution. A simple neural model induced with EFT achieves state-of-the-art performance on large-scale and standard temporal graph benchmarks. Published at ICLR 2024; joint work with HERE Technologies, IIT Hyderabad, RWTH Aachen, and Cerence.

## Highlights

- To the authors' knowledge, the first invertible spectral transform capturing the evolving spectrum of temporal graphs (ICLR 2024)
- Pseudo-spectrum relaxations replace the direct eigendecomposition of the joint Laplacian, whose cost grows by O(T³), with an efficient computation, with proven bounds to the exact solution
- Unifies DFT, GFT, and JFT as special cases; outperforms DGSR on decades-spanning sequential recommendation benchmarks

## Background

The Graph Fourier Transform decomposes graph signals into frequency components via Laplacian eigendecomposition, and spectral GNNs capture non-local dependencies on static graphs — but no spectral transform existed for temporal graphs with evolving structure. A naive extension — treating time as temporal edges, joining per-timestep node copies into one graph and eigendecomposing it — loses the distinction between temporal and vertex-domain variation and multiplies cost by O(T³), prohibitive for many timesteps. Joint transforms like JFT do not handle evolving structure.

## Method

EFT is formulated as an optimization of the variational form of the dynamic graph Laplacian, relaxed so the optimum lies within the ε-pseudospectrum. This yields a simple, efficient solution that provably stays close to the exact solution for Lipschitz-continuous dynamic graphs. The transform operates simultaneously along time and vertex dimensions, is computationally efficient compared to the direct eigendecomposition of the joint Laplacian, and keeps temporal and vertex frequency components distinct — giving interpretability. Existing transforms (DFT, GFT, JFT) can be simulated as special cases, making EFT their unifying generalization. A reference neural model applies learnable temporal and graph filters built on EFT.

![The idea behind EFT. The graphs at each timestep (G1 to G3) are combined with a ring over time (T), connecting nodes across timesteps into the graph J_D; for a static graph, the graph Fourier transform on J_D reproduces EFT. Source: right part of Fig. 1 of A. Bastos, K. Singh, A. Nadgeri, M. Singh, T. Suzumura, "Beyond Spatio-Temporal Representations: Evolving Fourier Transform for Temporal Graphs" (ICLR 2024, arXiv:2402.16078), cropped, CC BY 4.0](images/article-gfm-eft-01.png)

## Results

The model achieves state-of-the-art results across benchmarks. On sequential recommendation datasets spanning decades (Amazon Beauty, Games, CD; 1996-2018), EFT outperforms the dynamic-graph state of the art (DGSR), e.g., Recall@10 53.23 and NDCG@10 37.10 on Beauty. Ablations show removing the graph filter drops Beauty Recall@10 from 53.23 to 38.27 — confirming the graph filter suppresses long-range noise — and static filters (low/high/band-pass) all underperform the learnable ones.

## Significance

EFT answers the question of how to represent an evolving graph in the frequency domain with an invertible construction; to the authors' knowledge, no such transform existed for temporal graphs with evolving structure (Sec. 1).

## Outlook

The paper does not consider signed or directed graphs in its current scope and suggests, as future work, generalizing the Laplacian and the resulting transform to such graphs (Sec. 8). It also encourages researchers to explore EFT as a spectral representation of evolving graphs in downstream representation learning models.
