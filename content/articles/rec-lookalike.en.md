---
title: Exploring 360-Degree View of Customers for Lookalike Modeling
venue: SIGIR 2023
summary: Integrates multi-faceted customer information for lookalike modeling.
translated: manual
---

## Overview

E-CLM (Embedding based Customer Lookalike Modeling) is a lookalike framework built on a 360-degree view of customers — unifying demographics, buying behaviors across platforms, and loyalty. Large-scale experiments on real Rakuten e-commerce (Ichiba) and travel datasets demonstrate its effectiveness for user targeting. A collaboration with the Rakuten Institute of Technology, deployed on Rakuten AIris Target Prospecting (AIris TP) — Rakuten's customer targeting framework in production since 2018 — and published at SIGIR 2023.

## Highlights

- Lookalike model E-CLM built on a 360-degree customer view: demography, loyalty, e-commerce, travel, and family (SIGIR 2023)
- Unifies knowledge graphs of dissimilar services, capturing prospects invisible to single-service models
- Validated on Rakuten AIris Target Prospecting, in production since 2018

## Background

Lookalike modeling (audience expansion) finds users similar to seed users who already showed interest in a product or campaign — a core capability of ad platforms like Facebook, Google, and LinkedIn. Practical challenges include reliance on a single feature type (demographics or purchases), overfitting with few seeds, and highly varied targeting topics. The key insight is cross-service behavior: Rakuten operates 90+ services, and many customers are active in Ichiba but inactive in Rakuten Travel or vice versa. A customer who regularly books luxury hotels may well afford premium cosmetics, yet single-service models would never target them — lookalike models should capture affordability and lifestyle, not just preferences.

## Method

E-CLM defines five explicit customer views — demography, loyalty, Ichiba (e-commerce), travel, and family — learning a user representation from each and combining them. Knowledge graphs are built for e-commerce and travel, with TransE-based embeddings; heterogeneous literal values (age, area code, registration date) are encoded character-level via an N-gram compositional function. An extension, E-CLM++, is also discussed.

## Results

Extensive experiments on real e-commerce and travel datasets show E-CLM achieves significant accuracy against the AIris TP baselines — the first lookalike model to explicitly define and combine distinct customer views, demonstrating that cross-service integration improves prospect discovery.

## Significance

Validated on a production commercial targeting platform, this work quantified the value of unifying scattered customer data and evolved directly into the graph-based audience expansion work (AudienceLinkNet) at SIGIR 2024.

## Outlook

This work's practical significance lies in quantifying, on a production platform, the value of unifying customer data scattered across an enterprise. Within the 90+ service Rakuten ecosystem, five views are a starting point: more services, temporal preference dynamics (seasons, life events), and real-time targeting updates are natural extensions. The N-gram compositional embedding of literal values (ages, dates, area codes) offers a practical answer to handling non-entity attributes — ubiquitous in industrial knowledge graphs. The findings developed directly into AudienceLinkNet (SIGIR 2024), making this a model industry-academia collaboration with consecutive SIGIR publications.
