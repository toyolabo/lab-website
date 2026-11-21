---
title: Graph Adapter of EEG Foundation Models for Parameter Efficient Fine Tuning
venue: AAAI 2025 Workshop (W3PHIAI)
summary: Predicting disorders from EEG is in demand, but labeled data are limited because labeling takes physicians' time and patient privacy must be protected. Fine-tuning a foundation model together with a GNN is also costly and prone to overfitting. EEG-GraphAdapter keeps the pre-trained BENDR unchanged and trains only a small GNN adapter placed in front of it, with about 1 to 2 million trainable parameters instead of about 6.46 million for all of BENDR. F1 rose from 0.758 to 0.855 for major depressive disorder (MDD) detection (GAT) and from 0.433 to 0.503 for abnormal EEG detection on TUAB (GraphSAGE, a 16.1% improvement), and training became up to about 17% faster, showing that inter-electrode relations can be added at low cost.
translated: manual
figureCaption: Source: Fig. 1 of T. Suzumura, H. Kanezashi, S. Akahori, "Graph Adapter of EEG Foundation Models for Parameter Efficient Fine Tuning" (arXiv:2411.16155), from the original paper (CC BY 4.0)
---

## Overview

EEG-GraphAdapter (EGA) is a parameter-efficient fine-tuning (PEFT) approach for EEG foundation models. A GNN-based adapter module is integrated into a pre-trained temporal backbone (BENDR); the backbone is frozen and only the adapter is fine-tuned, effectively acquiring spatial representations among EEG sensors while significantly reducing computational overhead and data requirements. On two healthcare downstream tasks — Major Depressive Disorder (MDD) detection and abnormality detection (TUAB) — EGA improves F1-score by up to 16.1% over the baseline BENDR without the adapter. Joint work by Suzumura, Kanezashi, and Digital Hospital, Inc. (AAAI 2025 Workshop W3PHIAI).

## Highlights

- PEFT approach freezing the EEG backbone entirely, training only a lightweight GNN adapter
- Acquires spatial sensor relationships (e.g., frontal-parietal connectivity abnormalities in ASD) at low compute and data cost
- Up to 16.1% F1 improvement over baseline BENDR on MDD and abnormality detection

## Background

EEG provides direct, real-time access to brain dynamics with applications from mental-disorder diagnosis to BCIs. Two challenges hinder EEG representation learning: prohibitive computational cost of fully fine-tuning large models per downstream task, and insufficient labeled data — healthcare labels require costly expert annotation and privacy limits public data, so fine-tuning on small datasets risks overfitting. Meta- and transfer learning presume fine-tuned models on similar tasks, unavailable for many disease-prediction settings. Meanwhile, spatial relationships among sensors are essential — e.g., abnormal frontal-parietal functional connectivity is observed in autism spectrum disorder — yet most models treat channels independently.

## Method

EGA applies the PEFT idea (adapters, LoRA) to acquiring spatial structure: the pre-trained BENDR backbone — which already captures temporal characteristics — remains frozen, while a GNN-based module inserted on the input side performs message passing over the channel graph, incorporating spatial representations into the multivariate EEG signals. Only the adapter is updated, enabling effective downstream adaptation without altering the pre-trained model.

![Fine-tuning with EEG-GraphAdapter. BENDR is frozen and only the GNN adapter in front of it is trained. Source: cropped from Fig. 1 of T. Suzumura, H. Kanezashi, S. Akahori, "Graph Adapter of EEG Foundation Models for Parameter Efficient Fine Tuning" (arXiv:2411.16155), CC BY 4.0](images/article-brain-adapter-01.png){width=414}

## Results

On MDD detection and TUAB abnormality detection, EGA improves F1-score by up to 16.1% versus baseline BENDR, with runtime improvements — acquiring spatial information effectively with a fraction of trainable parameters.

## Significance

Complementary to GEFM, EGA's retrofit design makes graph enhancement accessible to medical settings with limited compute and data, charting a practical path to scalable, accurate EEG-based prediction.

## Outlook

Most clinical settings lack the compute to fully fine-tune large models. EGA's retrofit design delivers graph enhancement under this real constraint, complementing GEFM's pre-training-stage integration. Future directions include combining with other PEFT techniques such as LoRA, sharing and transferring adapters across downstream tasks to exploit common spatial patterns, and explainable diagnosis support — reading disease-specific functional connectivity abnormalities from trained adapters. Answering both parameter efficiency and spatial structure, EGA is an engineering foundation for the societal deployment of EEG foundation models.
