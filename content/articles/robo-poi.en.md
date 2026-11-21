---
title: Revisiting Mobility Modeling with Graph: A Graph Transformer Model for Next Point-of-Interest Recommendation
venue: ACM SIGSPATIAL 2023
summary: Models human mobility as a graph and predicts the next point of interest with a graph Transformer.
translated: manual
figureCaption: Source: Fig. 1 of X. Xu et al., "Revisiting Mobility Modeling with Graph: A Graph Transformer Model for Next Point-of-Interest Recommendation" (ACM SIGSPATIAL 2023, arXiv:2310.01224)
---

## Overview

MobGT (Mobility Graph Transformer) is a next point-of-interest (POI) recommendation model that fully leverages graphs to capture both spatial and temporal features of human mobility. It combines individual spatial and temporal graph encoders — capturing features unique to each and global user-location relations — with a Graph Transformer-based mobility encoder extracting higher-order relations between POIs, plus a novel Tail Loss addressing the long-tailed problem in spatio-temporal data. MobGT outperforms state-of-the-art models across datasets and metrics, achieving 24% improvement on average. Published at ACM SIGSPATIAL 2023 (Hamburg); first-authored by Xiaohang Xu of our lab, joint work with Toyota Motor Corporation. Code: github.com/Yukayo/MobGT.

## Highlights

- MobGT combines dedicated spatial and temporal graph encoders with a Graph Transformer (SIGSPATIAL 2023)
- Disentangled encoding resolves the spatial-temporal entanglement problem and captures higher-order patterns like closed loops
- Tail Loss addresses long-tailed check-in data; average 24% improvement over state-of-the-art models

## Background

Location-based services generate massive spatio-temporally labeled check-in data, with next-POI recommendation a prominent application. Sequential models (RNNs, Transformers) treat trajectories as plain sequences; recent graph-based approaches add global user-location relations via GNNs. Yet three limitations remained: (1) ineffective global integration of spatial and temporal information — some state-of-the-art models drop spatial modeling on the claim that temporal relations implicitly capture it, but the next location depends on spatial context too (a cinema spatially adjacent to two restaurants lets us recommend to user B the restaurant user A visited after a movie — invisible to temporal-only models); (2) higher-order patterns in individual mobility, such as closed-loop trajectories returning home and repeated patterns at different times, which sequential models handle poorly; (3) the long-tailed distribution of check-ins.

![An example of viewing human mobility as a graph. The points of interest (POIs) visited by two users in each time slot are shown on a map, linking spatially adjacent places and shared mobility patterns. Source: X. Xu et al., "Revisiting Mobility Modeling with Graph: A Graph Transformer Model for Next Point-of-Interest Recommendation" (ACM SIGSPATIAL 2023)](images/article-robo-poi-01.png){width=336}


## Method

MobGT employs separate spatial and temporal graph encoders extracting fine-grained features unique to each modality, a Graph Transformer mobility encoder capturing higher-order POI dependencies globally via attention (including cyclic and repeated patterns), and Tail Loss to improve predictions for infrequent POIs.

## Results

On real-world check-in datasets (Foursquare and others), MobGT outperforms state-of-the-art sequential and graph baselines across metrics with an average 24% improvement; ablations confirm the contribution of each component.

## Significance

Conducted with Toyota Motor Corporation, this urban mobility work is widely cited by subsequent POI research and anchors the lab's human-mobility graph modeling.

## Outlook

Next-POI recommendation underpins maps, tourism, urban planning, and mobility services; this Toyota collaboration feeds personalization of movement experiences in the connected-car era. Each design element admits extension: disentangled encoding can absorb additional context modalities (weather, events, traffic); Tail Loss generalizes to cold-start recommendation of newly opened venues. The graph modeling of human mobility, together with our traffic forecasting (MegaCRN) and city-scale simulation (Megaffic), forms part of our urban spatio-temporal research, with dialogue-based mobility assistance combining LLM intent understanding in scope.
