---
title: Graph-Enhanced EEG Foundation Model
venue: IEEE EMBC 2025
summary: Labeled EEG data are hard to collect, so foundation models pre-trained on large amounts of unlabeled EEG are attracting attention. Yet existing EEG foundation models such as BENDR treat EEG as separate time series per electrode and do not use the relationships between electrodes. GEFM adds a two-layer GNN in front of BENDR and learns temporal and inter-electrode information together through a graph in which electrodes closer on the scalp are more strongly connected, while also aligning signal lengths that differ across datasets. Pre-trained on the TUEG clinical EEG corpus and tested on motor imagery (MMI), P300 and ERN, the edge-weighted GCN outperformed BENDR on all three tasks (MMI accuracy 0.646 to 0.849), suggesting a more robust foundation model.
translated: manual
figureCaption: Source: Fig. 1 of L. Wang, T. Suzumura, H. Kanezashi, "GEFM: Graph-Enhanced EEG Foundation Model" (arXiv:2411.19507), from the original paper (CC BY 4.0)
---

## Overview

GEFM (Graph-Enhanced EEG Foundation Model) is a novel foundation model for EEG integrating both temporal and inter-channel information. While both are vital for understanding EEG signals, existing EEG foundation models focus primarily on temporal dynamics. GEFM combines GNNs — which effectively capture relational structures — with a masked autoencoder for efficient pre-training, and is to our knowledge the first work applying the GNN-plus-sequence-model combination (analogous to KG × LLM integration) to EEG analysis. Evaluated on three downstream tasks across multiple GNN architectures, GEFM — particularly with an optimized GCN configuration — consistently outperformed baselines on all tasks. First-authored by Limin Wang (master's student) with Suzumura and Kanezashi (IEEE EMBC 2025).

## Highlights

- First graph-enhanced EEG foundation model integrating inter-channel spatial relationships
- First application of GNN × foundation-model integration (analogous to KG × LLM) to EEG analysis
- Sequence-length adjustment enables cross-dataset pre-training; outperforms baselines on all three downstream tasks

## Background

EEG is the most widely used brain-activity measurement, underpinning clinical diagnosis and neurological disorder prediction. Labeled EEG is scarce — annotation requires costly expertise — while unlabeled data abound, making the foundation-model paradigm especially valuable. Existing EEG foundation models such as BENDR and Neuro-GPT treat EEG as per-channel time series processed by Transformers/autoencoders, yet EEG inherently involves complex inter-channel interactions whose abnormalities can indicate neurological disorders — relationships inadequately addressed by prior work.

## Method

GEFM builds on BENDR, integrating GNNs by representing EEG as a graph: channels as nodes, signals as node features, inter-channel connections as edges. A key challenge: foundation models must apply across datasets, but GNNs require fixed-length node features while EEG sequence lengths vary by task and setup. A sequence-length adjustment mechanism standardizes signals to a target length, ensuring cross-dataset compatibility. Experiments address four research questions — best GNN architecture (GCN vs. GAT vs. GraphSAGE), which downstream tasks benefit most, the best length-adjustment strategy, and the most robust base configuration (two BENDR variants).

![GEFM architecture (fine-tuning). The graph of inter-electrode relations (bottom left) is processed by a 2-layer GNN before BENDR. Source: cropped from Fig. 1 of L. Wang, T. Suzumura, H. Kanezashi, "GEFM: Graph-Enhanced EEG Foundation Model" (arXiv:2411.19507), CC BY 4.0](images/article-a-brain1-01.png){width=400}

## Results

Pre-trained at scale and evaluated on three downstream tasks, GEFM with an optimized GCN configuration consistently outperformed baseline methods across all tasks — evidence that adding inter-channel information yields a robust, task-agnostic EEG foundation model.

## Significance

The first step in extending our lab's graph foundation model vision to neuroscience and the first GNN-integrated EEG foundation model, forming with the companion EEG-GraphAdapter a neuroscience × graph-AI research line.

## Outlook

EEG foundation models are especially valuable where labeled data are scarce, and GEFM adds the missing ingredient — the brain's spatial structure. Three directions follow: more principled spatial modeling incorporating electrode coordinates and anatomical knowledge; scaling of pre-training data and model size, testing whether LLM-style scaling laws hold for EEG; and broader downstream tasks including seizure prediction, sleep staging, and BCI. Together with the complementary EEG-GraphAdapter (retrofitting spatial structure onto existing models), GEFM extends our Graph Foundation Model vision into neuroscience.
