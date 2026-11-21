---
id: a-rec1
translated: reviewed
title: Multi-Aspect Preference Extraction from Review Text and Its Integration into DPO
venue: The 268th IPSJ SIG on Natural Language Processing
summary: We propose Multi-Aspect DPO, a method that injects multi-faceted user preferences extracted from reviews directly into an LLM's internal representations and integrates them into DPO-based recommendation training. Experiments on Yelp and Amazon Video Games confirm improved recommendation accuracy.
figureCaption: Source: slide 14 of the presentation for Y. Tomita, H. Kanezashi, T. Suzumura, "Extending Direct Preference Optimization to Recommendation Based on Multi-Faceted Understanding of User Preferences with Large Language Models" (the 268th IPSJ SIG-NL, 2026)
---

## Overview

This work proposes Multi-Aspect DPO (MA-DPO), a method for LLM-based recommender systems that integrates the multi-faceted preferences written in user reviews — genre, location, price range, and so on — into preference optimization (DPO) training. An LLM generates summaries of preference information from user and item reviews; these are converted into dense vectors via contrastive learning and injected directly into every decoder layer of the LLM during SFT and DPO training, yielding recommendations that reflect review-derived, multi-faceted preferences. Experiments on two real-world datasets, Yelp and Amazon Video Games, confirm that MA-DPO outperforms prior work that does not use review information (S-DPO) on all evaluation metrics, including HR@1, NDCG@5, and MRR. This work was presented at the 268th IPSJ SIG-NL meeting (June 2026).

## Background

Recommender systems predict a ranking of items a user is likely to be interested in based on past behavior such as purchases and ratings, and are used across online shopping, video streaming, news sites, and many other services. Sequential recommendation in particular predicts the next preferred item from dynamic features such as the order and timing of a user's behavior history; LLM-based sequential recommendation, which exploits the rich knowledge and strong natural-language understanding of LLMs, has recently attracted much attention.

![Conceptual diagram of sequential recommendation: predicting the next preferred item from a user's behavior history. Source: slide 4 of our presentation at the 268th IPSJ SIG-NL (Tomita et al., 2026). The illustrations of people and items are combined from free stock materials](images/SR.png)

However, most LLM-based recommendation methods fail to fully exploit user reviews written in natural language. A review may touch on multiple aspects, and it is common for the evaluation to differ per aspect. Although recommendations should account for the importance of each aspect, existing methods do not reflect this. This work aims to capture users' multi-faceted preferences from reviews and propose a more accurate recommendation method.

## Related Work

Reinforcement Learning from Human Feedback (RLHF) is a representative approach for aligning LLM outputs with human preferences. RLHF trains a reward model on preference data (a prompt paired with a "preferred" and a "dispreferred" response) and then adjusts the LLM via reinforcement learning, but it suffers from reward-model design costs, the computational cost of RL, and training instability.

![Conceptual diagram of RLHF: optimizing an LLM via a reward model. Source: slide 7 of our presentation at the 268th IPSJ SIG-NL (Tomita et al., 2026). The original method: L. Ouyang et al., "Training language models to follow instructions with human feedback" (NeurIPS 2022)](images/RLHF.png)

Direct Preference Optimization (DPO) optimizes an LLM directly from preference data without a reward model, and has drawn attention as a way to resolve the issues of RLHF.

![Conceptual diagram of DPO: optimizing an LLM directly from preference data. Source: slide 8 of our presentation at the 268th IPSJ SIG-NL (Tomita et al., 2026). The original method: R. Rafailov et al., "Direct Preference Optimization: Your Language Model is Secretly a Reward Model" (NeurIPS 2023)](images/DPO.png)

DPO optimizes an LLM using one-positive/one-negative comparisons. For recommendation, extensions include Softmax-DPO (S-DPO), which generalizes to one positive versus multiple negatives, and K-order Ranking Preference Optimization (KPO), which optimizes the ordering of the top-K items. These methods, however, only use the user's behavior history and candidate item names in the prompt, leaving the multi-faceted preferences described in review text unused.

![Conceptual diagram of DPO-based recommendation, extended to one-positive/multiple-negative comparisons to match real-world settings. Left: S-DPO; right: KPO. Source: slide 9 of our presentation at the 268th IPSJ SIG-NL (Tomita et al., 2026). The original methods: Y. Chen et al., "On Softmax Direct Preference Optimization for Recommendation" (NeurIPS 2024) and S. Cai et al., "K-order Ranking Preference Optimization for Large Language Models" (ACL 2025)](images/SDPOKPO.png)

## Proposed Method

To address these issues we propose Multi-Aspect DPO (MA-DPO). MA-DPO converts preference information that an LLM extracts from review text into vectors and injects them directly into every decoder layer of the LLM during SFT and DPO training, realizing review-aware DPO-based recommendation.

The proposed method consists of three stages.

First, an LLM generates summaries of each user and each item from their reviews.

![Stage 1: an LLM generates item and user summaries from reviews. Source: slide 13 of our presentation at the 268th IPSJ SIG-NL (Tomita et al., 2026)](images/PM1.png)

Second, a summary encoder is trained with contrastive learning (InfoNCE loss), treating highly rated items within the same category as positives and low-rated ones as negatives, yielding user and item vectors that capture fine-grained preferences.

![Stage 2: the summary encoder is trained with contrastive learning, using highly rated items in the same category as positives and low-rated ones as negatives. Source: slide 13 of our presentation at the 268th IPSJ SIG-NL (Tomita et al., 2026)](images/PM22.png)

Third, User Cross-Attention (User CA), which injects the user vector across the whole token sequence, and position-aligned Item Cross-Attention (Item CA), which injects each item vector at its corresponding token positions, are added to every decoder layer, followed by SFT and S-DPO training. Item CA in particular adds the item embedding directly at each token position of the candidate item name, explicitly tying item information to the positions where the LLM generates the item name.

![Stage 3: the user vector is injected into the whole token sequence and the item vectors into the corresponding token positions, and the model is trained with S-DPO. Source: slide 14 of our presentation at the 268th IPSJ SIG-NL (Tomita et al., 2026)](images/PM3.png)

## Results

We evaluated the method on two real-world datasets: Yelp (restaurant recommendation) and Amazon Video Games (video game recommendation). Users and items with fewer than five interactions were removed; each user's most recent interaction was used for testing, the one before it for validation, and the rest for training. With Llama-3.2-1B as the backbone, the task was to select from 20 candidate items (Yelp: 50,173 train / 2,122 validation / 2,122 test; Amazon Video Games: 50,003 train / 8,953 validation / 8,953 test).

Against the prior method S-DPO, MA-DPO was superior on all metrics — HR@1, HR@3, HR@5, HR@10, NDCG@3, NDCG@5, NDCG@10, and MRR — on both datasets. On Yelp, HR@1 improved from 21.55% to 31.41% and MRR from 0.3269 to 0.4104; on Amazon Video Games, HR@1 improved from 30.95% to 36.58% and MRR from 0.4196 to 0.4672.

![Comparison of MA-DPO and S-DPO on the Yelp dataset. MA-DPO was superior on all metrics including HR@1, NDCG@5, and MRR. Source: slide 18 of our presentation at the 268th IPSJ SIG-NL (Tomita et al., 2026)](images/result_yelp.png)

![Comparison of MA-DPO and S-DPO on the Amazon Video Games dataset. MA-DPO was superior on all metrics including HR@1, NDCG@5, and MRR. Source: slide 19 of our presentation at the 268th IPSJ SIG-NL (Tomita et al., 2026)](images/result_amazon.png)

Case studies confirmed examples where, on Yelp, the model captured a user's main activity area (Philadelphia) and favorite cuisine (Italian) to predict the correct restaurant, and where, on Amazon Video Games, it read a user's preference for Xbox One accessories together with the fact that the item was an Xbox One exclusive to make a successful recommendation.

We also observed that MA-DPO's improvement grows with the length of the user's behavior history; on Amazon Video Games, a Spearman rank correlation of ρ = 0.900 was found between history length and HR@1 improvement.

![Improvement in HR@1 of MA-DPO over S-DPO by the length of the user's behavior history (Amazon Video Games). The longer the history, the larger the improvement. Source: slide 23 of our presentation at the 268th IPSJ SIG-NL (Tomita et al., 2026)](images/long.png)

An ablation study on Yelp showed that MA-DPO, combining both components, outperformed User CA alone and Item CA alone on all metrics (e.g., HR@1: 25.81% for user-only and 25.69% for item-only versus 31.41% for MA-DPO), indicating that both user-derived and item-derived preference information contribute to the accuracy gains.

![Ablation study results: combining User CA and Item CA (MA-DPO) outperformed either alone on all metrics. Source: slide 22 of our presentation at the 268th IPSJ SIG-NL (Tomita et al., 2026)](images/Ablation.png)

## Discussion

The results show that injecting preference vectors generated from user and item review summaries into an LLM via User CA and position-aligned Item CA improves DPO-based recommendation accuracy. The larger gains on Amazon Video Games are likely because that dataset contains many similar item names from the same franchises, so content information beyond the item-name string was especially useful for discrimination. The tendency for longer-history users to benefit more is attributed to user summaries reflecting richer preference information.

Future work includes addressing the cold-start problem for users and items with few reviews, and validation with larger models and datasets.
