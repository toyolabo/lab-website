---
title: Graph-Based Audience Expansion Model for Marketing Campaigns
venue: SIGIR 2024
summary: Discovers potential customers similar to existing ones from graph structure to expand campaign audiences.
translated: manual
---

## Overview

AudienceLinkNet is a graph-based audience expansion model for marketing campaigns. It formulates audience expansion as a graph problem, combining pre-trained knowledge graph embeddings with graph convolutional networks (GCNs), whose structural retention properties overcome challenges of cross-service data usage, sparsity, and limited seed users. Extensive experiments on Rakuten AIris Target Prospecting, Rakuten's advertising platform, demonstrate its effectiveness. Joint work with the Rakuten Institute of Technology, published at SIGIR 2024 (Washington DC).

## Highlights

- Formulates audience expansion as a graph problem: pre-trained KG embeddings + GCN aggregation (SIGIR 2024)
- Aggregates KG triples (entity + relation) rather than neighbor entities, mitigating oversmoothing
- Extensive validation on Rakuten’s production AIris TP platform, with candid discussion of limitations

## Background

Audience expansion finds users similar to seeds who are likely to achieve a campaign's business goal. Practical complications abound: some campaigns need thousands of expanded users, others millions; focusing only on buying behavior or demographics misses latent users with high conversion potential; and preferences shift dynamically with seasons and context. Rakuten operates 70+ services with many users active in one and inactive in others, motivating cross-service integration. Following E-CLM (SIGIR 2023), this work adds graph neural learning over a knowledge graph built from the Rakuten Ecosystem.

## Method

AudienceLinkNet has two stages: pre-training knowledge graph embeddings over user-item interactions across the ecosystem, then audience expansion via GCN aggregation. Arguing that homophily holds in expansion-task graphs, it uses three aggregation techniques that smooth the pre-trained model. Distinctively, rather than aggregating neighbor entity embeddings as traditional KG-GNN models do, it aggregates KG triples (knowledge queries represented as the sum of entity and relation embeddings), mitigating oversmoothing and irrelevant smoothing and improving expansion precision.

## Results

Extensive experiments on the production AIris TP platform demonstrate effectiveness: the design preserves pre-trained KG embedding properties while gaining GCN structural learning, addressing cross-service, sparsity, and limited-seed challenges. The paper also candidly presents the model's limitations.

## Significance

The second installment of the Rakuten collaboration after E-CLM, combining academic novelty (triple-based GCN aggregation) with deployment on a production advertising platform.

## Outlook

Serving expansion requests from thousands to millions of users per campaign with one model reflects advertising reality. The triple-based aggregation — summing entity and relation embeddings into knowledge queries — offers a general remedy for oversmoothing in KG-GNN integration, applicable beyond recommendation to search and question answering. Future directions include tracking dynamic preference shifts (seasonality, trends), campaign-context-conditioned expansion, and combining LLM-based product understanding with graph-based behavior understanding. The Rakuten collaboration continuing from E-CLM (SIGIR 2023) remains a model case of research deployed in production.
