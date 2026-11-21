---
title: Learnable Spectral Wavelets on Dynamic Graphs to Capture Global Interactions
venue: AAAI 2023
summary: Most methods for dynamic graphs build features by aggregating neighboring nodes. This passes mainly low-frequency signals, so relationships between distant nodes, the global interactions, are hard to capture. DEFT captures the graph spectrum with learnable wavelets: it approximates them with Chebyshev polynomials instead of an eigendecomposition, computes the coefficients with a GNN, and updates the GNN's weights at each timestep with an RNN, so the spectrum follows the evolving graph. These global features are learned together with spatial features from neighborhood aggregation. Across eight datasets, the Transformer-based variant beat existing methods on all three link prediction datasets (MAP on AS: 0.588 versus 0.233 for the best baseline).
translated: manual
figureCaption: Source: Fig. 2 of A. Bastos, A. Nadgeri, K. Singh, T. Suzumura, M. Singh, "Learnable Spectral Wavelets on Dynamic Graphs to Capture Global Interactions" (AAAI 2023, arXiv:2211.11979), from the original paper (CC BY 4.0)
---

## Overview

This work proposes learnable spectral graph wavelets to capture global interactions on dynamic graphs, and DEFT, a framework integrating these dynamically captured spectra with spatial features. Existing dynamic-graph methods rely on local neighborhood aggregation — essentially capturing only low-pass signals and local interactions. Experiments on eight standard datasets show significant improvements over related methods on various dynamic-graph tasks. Published at AAAI 2023; joint work with IIT Hyderabad, RWTH Aachen, and Cerence.

## Highlights

- Learnable spectral wavelets capture global interactions that neighborhood aggregation (a low-pass filter) misses on dynamic graphs
- Wavelets cost O(N+|E|) versus O(N³) eigendecomposition, and learn the history of the evolving spectrum
- Significantly outperforms existing methods on 8 datasets, with interpretable learned filters

## Background

Mainstream dynamic-graph learning combines GNN message passing with RNNs (e.g., EvolveGCN), but neighborhood aggregation attends to low frequencies. The paper's motivating example: in a transaction graph, fraudulent users are a skewed minority whose links to genuine users create high-frequency signals; low-pass aggregation lets the majority (genuine) pattern wash out the fraud pattern, so capturing global properties is necessary for detection. Similarly, in citation graphs local properties reveal a paper's category while global properties reveal interdisciplinarity. The classical route — full eigendecomposition — costs O(N³), multiplied by T timesteps for dynamic graphs.

## Method

Spectral graph wavelets offer four advantages: (1) efficient O(N + |E|) computation via Chebyshev polynomial approximation, (2) sparsity relative to the graph Fourier transform, (3) vertex-domain localization for interpretability, with the scale parameter shifting focus from local to global, and (4) learnability, capturing the history of the evolving spectrum where static, non-learnable wavelets show empirical limitations. DEFT integrates these spectral features with spatial features into homogeneous representations, accounting for shift invariance among node features arising from temporality. Theoretical analysis shows the filter learning at each timestep is decoupled from previous errors, keeping error bounded over time.

![The DEFT architecture. The part that learns GNN weights at each timestep (yellow box) passes them to the spectral module (learnable wavelets) and the spatial module, and the integration module (red box) combines their features. Source: part (a) of Fig. 2 of A. Bastos, A. Nadgeri, K. Singh, T. Suzumura, M. Singh, "Learnable Spectral Wavelets on Dynamic Graphs to Capture Global Interactions" (AAAI 2023, arXiv:2211.11979), cropped, CC BY 4.0](images/article-gfm-wavelets-01.png)

## Results

On eight standard datasets — including brain activity networks, transaction networks, and social networks — DEFT significantly outperforms existing dynamic-graph methods on node classification and link prediction. Visualizations on the Brain dataset show learned filters resembling band-reject, low-pass, and all-pass responses; the corresponding wavelets shift from concentrated (local) to diffused (global) focus with scale, respecting brain structure by focusing on relevant regions (e.g., brain stem) and mitigating noise from unrelated regions.

## Significance

The idea of learnably tracking a dynamic graph's spectrum is also cited in the authors' later ICLR 2024 paper on the Evolving Graph Fourier Transform.

## Outlook

The paper lists, as future work, building wavelets on frameworks for joint time and graph Fourier transforms of dynamic graphs, and checking whether these could be used for graph sampling to improve computational efficiency on extremely large graphs (Conclusion). The vertex-domain localization of wavelets lets one examine where the model looks on the graph, as shown on the Brain dataset (Fig. 1).
