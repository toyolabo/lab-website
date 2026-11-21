---
title: Can Persistent Homology provide an efficient alternative for Evaluation of Knowledge Graph Completion Methods?
venue: WWW 2023
summary: The standard way to evaluate knowledge graph completion methods, ranking metrics, takes time quadratic in the number of entities. This work uses persistent homology to estimate model quality from the topology of the scores a model assigns, proposing Knowledge Persistence (KP), which stays highly correlated with the ranking metrics while cutting evaluation time by about 99.96% on average (WWW 2023).
translated: manual
figureCaption: Source: Fig. 1 of A. Bastos et al., "Can Persistent Homology provide an efficient alternative for Evaluation of Knowledge Graph Completion Methods?" (WWW 2023, arXiv:2301.12929)
---

## Overview

Knowledge Persistence (KP) is a novel method for faster evaluation of Knowledge Graph (KG) completion approaches. Current ranking-based evaluation is quadratic in KG size, causing long evaluation times and a high carbon footprint. KP represents the topology of KG completion methods through topological data analysis — concretely, persistent homology — whose properties let KP evaluate quality from only a fraction of the data. On standard datasets, KP correlates highly with ranking metrics (Hits@N, MR, MRR); in some cases evaluation time (validation+test) drops from 18 hours (Hits@10) to 27 seconds (KP), and on average across methods and data KP reduces evaluation time by ≈99.96%. Published at WWW 2023; joint work with IIT Hyderabad, Cerence, RWTH Aachen, and SAP.

## Highlights

- Replaces quadratic-cost ranking evaluation of KG completion with KP, a persistent-homology-based metric
- KP correlates highly with Hits@N, MR, and MRR while cutting evaluation time ~99.96% on average — 18 hours to 27 seconds in one case
- Explicitly motivated by making KGE research more inclusive and accessible to researchers with limited compute

## Background

KGs store facts as (subject, relation, object) triples powering entity linking, relation extraction, fact-checking, and question answering. For KG completion, ranking-based evaluation ranks all negative triples per test triple — quadratic in entity count. Over 100 KGE papers since 2019 use this protocol; one large benchmarking effort spent 24,804 GPU hours on evaluation. Two problems follow: evaluation-time efficiency is largely ignored (unlike training-time), and the compute demands exclude researchers with restricted GPU availability — challenging the inclusiveness of Web research. Ranking metrics are also biased towards popular entities.

## Method

KP characterizes the "shape" of learned KG representations via persistent homology: model scores over positive and negative triples define filtrations, and the birth/death of topological features is recorded as persistence diagrams. Good and poor models induce different topologies, so the distance between positive and negative diagrams (sliced Wasserstein) proxies quality. PH's stability lets KP evaluate from samples, with cost linear in the number of entities |E| — O(|E|) — and the paper proves KP changes in a bounded manner under gradually induced noise.

## Results

Across representative KGE methods on FB15k-237, WN18RR, and other standard datasets, KP correlates strongly with Hits@N, MR, and MRR — and KP could be used for early stopping (Table 4) — while cutting evaluation time by ≈99.96% on average, and from 18 hours to 27 seconds in one case.

## Significance

The paper says it aims to be the first study to make KGE evaluation more efficient (Sec. 1), explicitly motivated by accessibility for compute-constrained researchers, and it connects topological data analysis with graph learning.

## Outlook

The paper calls this work a first step toward a broader research agenda: for persistent-homology-based methods to be widely adopted, scaling issues across embedding methods, datasets, and KGs need to be solved collectively by the research community. It also notes that for some methods or datasets the correlation may be small or even negative. Directions it lists: (1) better sampling techniques than random sampling; (2) theoretical analysis of abilities and limitations across settings such as zero-shot and few-shot; (3) using KP or related metrics in continuous, differentiable form to approximate the ranking metrics when optimizing KGE methods (Sec. 6).
