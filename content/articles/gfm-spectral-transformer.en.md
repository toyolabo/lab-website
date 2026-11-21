---
title: How Expressive are Transformers in Spectral Domain for Graphs?
venue: TMLR 2022
summary: Transformers are increasingly used for graphs, but the vanilla Transformer is known to learn them poorly. GNN expressiveness had been studied through the frequency spectrum of graph signals, but no such theory existed for Transformers. This work links attention in the spatial domain to the spectral domain and proves that attention is effective only for low-pass filters, so it cannot selectively attend to particular frequencies. We therefore propose FeTA, which derives filter coefficients from each attention head with a GNN and uses a spectral GNN to attend over the entire graph spectrum. FeTA beat the vanilla Transformer on all six benchmarks (ZINC MAE 0.696 to 0.412), and adding it to GAT, a low-pass GNN, improved results on every dataset.
translated: manual
figureCaption: Source: Fig. 2 of A. Bastos et al., "How Expressive are Transformers in Spectral Domain for Graphs?" (TMLR 2022, arXiv:2201.09332), from the original paper (CC BY 4.0)
---

## Overview

This work is a theoretical study of how expressive Transformers are in the spectral domain for graphs. We formally establish the link between the Transformer's spatial and spectral spaces, and prove that the spatial attention mechanism cannot effectively capture desired frequency responses — Transformers are only effective at learning the class of filters with low-pass characteristics, and cannot selectively attend to specific frequencies. To overcome this, we propose FeTA, a framework performing attention over the entire graph spectrum (the actual frequency components), analogous to spatial attention. Published in TMLR 2022; joint work with IIT Hyderabad, RWTH Aachen, Cerence, and IBM Research, with Suzumura and Kanezashi from our lab.

## Highlights

- Theoretical analysis of Transformer expressiveness in the spectral domain for graphs: spatial attention learns only low-pass filter classes
- FeTA attends over actual graph spectral components, yielding consistent gains over vanilla Transformers on all tasks
- FeTA works as a module in PE-based architectures and even improves low-pass GNNs like GAT — complementary and orthogonal to positional encoding research

## Background

Vanilla Transformers are inadequate for graph representation learning, prompting extensive research on positional/structural encodings. GNN expressivity has two analytic schools: Weisfeiler-Lehman equivalence (spatial) and spectral analysis; Transformers had only been analyzed spatially via WL, leaving their spectral behavior and limits unexplored.

## Contributions

First, we formally bridge the spatial and spectral spaces of the vanilla Transformer. Second, we theoretically establish that Transformers effectively learn only low-pass filter classes — they cannot selectively attend to frequencies via inherent spatial attention, an essential limitation since graph signals carry heterogeneous information across a wide frequency range. Third, FeTA attends over the actual graph spectrum (UᵀX); unlike SAN, whose attention is over eigenvector components (and whose attention maps empirically exhibit the same low-pass limitation as vanilla Transformers), FeTA operates on true spectral components.

![The core of FeTA. From the Transformer's attention maps (left), a GNN computes filter coefficients over frequencies (2), and a spectral GNN applies the filters (3). The line entering from the top is the Transformer's output. Source: cropped from Fig. 2 of A. Bastos et al., "How Expressive are Transformers in Spectral Domain for Graphs?" (TMLR 2022, arXiv:2201.09332), CC BY 4.0](images/article-gfm-spectral-transformer-01.png)

## Results

On standard graph classification/regression and node classification benchmarks (ZINC, MolHIV, etc.), FeTA delivers homogeneous gains over vanilla Transformers across all tasks. Inducing FeTA's ability to perform attention over the entire graph spectrum into GAT, a low-pass GNN filter model, significantly improves GAT's performance, empowering it to attend to all frequencies. Extensive experiments show no state-of-the-art positional encoding is dataset-agnostic, yet replacing vanilla attention with FeTA in PE-based Transformer architectures improves most tasks — making this work complementary and orthogonal to positional encodings. Attention heat maps show low-pass filters yielding similar values within clusters (short-range dependencies) and high-pass filters alternating values between neighbors (long-range dependencies), adapted per task and graph.

## Significance

A theoretical analysis of graph Transformer expressivity from the spectral point of view.

## Outlook

The paper states that its spectral analysis of Transformers' limitations opens a new direction for studying Transformers more rigorously (Sec. 7). As open directions it lists inducing topological information in FeTA, building a position encoding that gives consistent performance regardless of dataset, and altering self-attention so that it can express arbitrary spectral filters. It also notes that full attention costs O(N^2) in space and time, which sparse attention can alleviate (Limitations).
