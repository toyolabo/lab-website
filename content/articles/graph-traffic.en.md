---
title: Spatio-Temporal Meta-Graph Learning for Traffic Forecasting
venue: AAAI 2023
summary: In joint research with Toyota Motor Corporation, we developed the Meta-Graph Convolutional Recurrent Network (MegaCRN), which learns road-network traffic flow as a spatio-temporal graph to forecast traffic with high accuracy. We also built a new large-scale traffic-speed dataset covering 1,843 expressway road links in Tokyo, and showed that the model adapts to abnormal situations such as accidents (AAAI 2023).
translated: manual
figureCaption: Source: Fig. 5(c)(d) of R. Jiang et al., "Spatio-Temporal Meta-Graph Learning for Traffic Forecasting" (AAAI 2023, arXiv:2211.14701)
---

## Overview

This work proposes Spatio-Temporal Meta-Graph Learning, a novel Graph Structure Learning (GSL) mechanism for spatio-temporal data, implemented as the Meta-Graph Convolutional Recurrent Network (MegaCRN): a Meta-Graph Learner powered by a Meta-Node Bank plugged into a GCRN encoder-decoder. Comprehensive evaluation on METR-LA, PEMS-BAY, and EXPY-TKY — a newly published large-scale dataset covering 1,843 expressway links in Tokyo — shows MegaCRN outperforming state-of-the-art models on all three. Qualitative studies demonstrate the model explicitly disentangles road links and time slots with different patterns and adapts robustly to anomalous traffic. Published at AAAI 2023; a collaboration of UTokyo (ITC and CSIS) and Toyota Motor Corporation. Code and datasets: github.com/deepkashiwa20/MegaCRN.

## Highlights

- Novel graph structure learning for spatio-temporal heterogeneity and non-stationarity in traffic (AAAI 2023)
- Meta-Node Bank memorizes traffic-pattern prototypes and generates graph structures adaptively — robust even to incidents
- New EXPY-TKY dataset (1,843 Tokyo expressway links) published; state-of-the-art on all three benchmarks

## Background

Traffic data carry spatio-temporal heterogeneity — conditions differ across road types (local roads, highways, interchanges) and times (off-peak, rush hours) — and non-stationarity when X factors, including accident and congestion, are present. GCN-based forecasting needs an adjacency structure; pre-defined graphs (inverse-distance Gaussian kernels) rely on empirical laws and ignore network dynamics. Adaptive graphs (Graph WaveNet, AGCRN, GTS) learn the adjacency as parameters; momentary graphs (SLCNN, StemGNN) condition it on inputs — but neither properly tackles heterogeneity and non-stationarity.

## Method

The Meta-Graph Learner performs graph structure learning in two steps: (1) querying node-level prototypes from a learnable memory, the Meta-Node Bank; (2) reconstructing node embeddings with a Hyper-Network to generate the graph. This localized memorization lets the modularized learner essentially distinguish traffic patterns across roads and time — generalizing even to incident situations. Plugged into a GCRN encoder-decoder, MegaCRN relies only on observational data to remain robust and adaptive from normal to non-stationary conditions.

## Results

MegaCRN outperforms state-of-the-art baselines on METR-LA, PEMS-BAY, and EXPY-TKY (larger scale, more complex incidents). Qualitatively, the meta-graph explicitly clusters links and time slots by pattern, and predictions adapt to incidents better than the baselines; the paper says these observations validate the power of the Meta-Graph Learner to explicitly distinguish spatio-temporal heterogeneity.

![Incident awareness of MegaCRN (an accident at road link 1 at 21:50 on December 13, 2021). (a) 60-minute-ahead predictions and the ground truth: MegaCRN follows normal fluctuations as well as rush hour and the accident (shaded red) better than the baselines (CCRNN and GW-Net). (b) Memory query weights to the Meta-Node Bank, whose querying pattern differs between normal situations and rush hour or the incident. (c) Locations of the road links around the intersection and the accident. (d) The learned local meta-graph (thicker lines mean higher edge weights; bigger nodes mean larger weighted outdegree). At 21:40, before the accident, road link 1 at the center of the intersection has the biggest impact; at 21:50, after the accident, its impact drops and road links 7–10 dominate. Source: R. Jiang et al., "Spatio-Temporal Meta-Graph Learning for Traffic Forecasting" (AAAI 2023, arXiv:2211.14701), Fig. 5](images/article-graph-traffic-01.png)


## Significance

The paper shows the progression of graph structure learning for spatio-temporal modeling as pre-defined, adaptive, momentary, and meta-graph (Fig. 1). This work proposes Spatio-Temporal Meta-Graph Learning to address spatio-temporal heterogeneity and non-stationarity, and publishes EXPY-TKY, a new traffic dataset of 1,843 expressway road links in Tokyo.

## Outlook

As future work, the paper plans to generalize the model to multivariate time series forecasting tasks (Conclusion).
