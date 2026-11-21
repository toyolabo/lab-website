---
title: Going Beyond Local: Global Graph-Enhanced Personalized News Recommendations
venue: ACM RecSys 2023
summary: Enhances news recommendation with a global graph built from collective user behavior. ACM RecSys 2023 Best Paper Runner-Up Award.
translated: manual
figureCaption: Source: Fig. 2 of B. Yang et al., "Going Beyond Local: Global Graph-Enhanced Personalized News Recommendations" (ACM RecSys 2023, arXiv:2307.06576)
---

## Overview

GLORY (Global-LOcal news Recommendation sYstem) combines global representations learned from other users with local representations for personalized news recommendation. It builds a Global-aware Historical News Encoder — a global news graph with gated graph neural networks enriching news representations, fused by a historical news aggregator — and a Global-aware Candidate News Encoder using a global entity graph and candidate news aggregator. On two public datasets (MIND, Adressa), GLORY outperforms existing approaches and offers more diverse recommendations. It received both the Best Full Paper Runner-Up Award and Best Student Paper Award at ACM RecSys 2023 (Singapore). First-authored by master's student Boming Yang, with University College Dublin; code at github.com/tinyrolls/GLORY.

## Highlights

- First work introducing global news and entity graphs built from all users’ behavior into news recommendation
- Outperforms existing methods on MIND and Adressa while improving recommendation diversity
- Double award at ACM RecSys 2023: Best Full Paper Runner-Up and Best Student Paper (first-authored by our master’s student)

## Background

News recommendation operates in a highly dynamic environment — timeliness and novelty make article-user relevance change rapidly. Content-based methods using NLP (NRMS with multi-head self-attention, NAML with word/view-level attention) succeed but focus on each user's history individually, lacking a global view across users and failing to uncover hidden motivations beyond semantics. In the paper's example, user U1's history contains only an "orange" article with no similar candidates available — recommendation is impossible from U1's history alone, but a global news graph built from users U2 and U3's clicks reveals relationships between orange, blue, and green articles, enabling recommendations of related candidates.

## Method

The Global-aware Historical News Encoder aggregates cross-user click transitions into a global news graph, propagates information with GGNNs, and fuses via a historical news aggregator. The Global-aware Candidate News Encoder addresses candidate-side behavior sparsity with a global entity graph and candidate aggregator. Multi-head self-attention extracts user interests; matching scores come from user and candidate vectors.

## Results

On MIND (English) and Adressa (Norwegian), GLORY outperforms content-based (NRMS, NAML) and graph-based baselines — the first work to introduce homogeneous global news/entity graphs to news recommendation — while also improving recommendation diversity.

## Significance

The dual award at RecSys 2023 for master's-student-led research is exceptional. GLORY is now a standard baseline for subsequent news recommendation research (including our AWRS), and a flagship result of the lab's recommender systems program.

## Outlook

GLORY's public code made it a standard baseline in news recommendation. It seeded our lab's recommender line: AWRS (SDM 2025) builds on it for news avoidance, followed by multi-aspect preference extraction (MA-DPO) and optimal-transport cross-domain recommendation (PAKDD 2026). Technically, GLORY's philosophy — integrating individual history (local) with collective behavior (global) — remains valid in the LLM-recommendation era: LLMs excel at semantic understanding (local, content) while graphs capture collective behavioral patterns (global, collaborative); their integration is a central theme of our graph × LLM research.
