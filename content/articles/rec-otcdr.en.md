---
title: Modeling User Preferences as Distributions for Optimal Transport-Based Cross-Domain Recommendation
venue: PAKDD 2026
summary: Represents user preferences as distributions and bridges domains via optimal transport.
translated: manual
figureCaption: Source: Fig. 1 of Z. Xiao and T. Suzumura, "Modeling User Preferences as Distributions for Optimal Transport-Based Cross-Domain Recommendation under Non-Overlapping Settings" (PAKDD 2026, arXiv:2508.16210)
---

## Overview

DUP-OT (Distributional User Preferences with Optimal Transport) is a framework for non-overlapping cross-domain recommendation (CDR). It represents each user's preferences as a Gaussian Mixture Model (GMM) over item embeddings rather than a fixed discrete vector, and aligns Gaussian components across domains via optimal transport, enabling preference transfer when no users or items are shared. On Amazon Review datasets, DUP-OT outperforms single-domain baselines even without source-domain data and achieves lower RMSE than the cross-domain baseline TDAR under strictly non-overlapping settings, particularly reducing large prediction errors for cold-start users. Accepted at PAKDD 2026; code at github.com/XiaoZY2000/dup-ot.

## Highlights

- Cross-domain recommendation framework DUP-OT for the realistic non-overlapping setting (PAKDD 2026)
- User preferences as GMM distributions preserve multi-modal interests; optimal transport aligns Gaussian components across domains
- Outperforms single-domain and cross-domain (TDAR) baselines on Amazon Reviews, especially reducing large errors for cold-start users

## Background

CDR transfers knowledge from dense source to sparse target domains, but existing methods carry two unrealistic assumptions: they rely on overlapping users/items to bridge domains — rarely available due to privacy and system constraints — and represent preferences as discrete vectors, missing the fine-grained, multi-aspect nature of interests. Prior distributional work used simple single Gaussians or still required partial overlaps; expressive GMM-based modeling under fully non-overlapping settings remained open.

## Method

DUP-OT has three stages. (1) Shared preprocessing: a unified pre-trained sentence encoder embeds reviews, and a shared autoencoder trained on both domains reduces dimensionality into a unified feature space. (2) User preference modeling: each domain fits GMM components on item embeddings — shared domain-level components keep OT computationally feasible — and an MLP maps each user embedding to personalized mixture weights. (3) OT-based alignment: optimal transport matches Gaussian components across domains, transporting source GMM weights to enhance target-domain rating prediction.

## Results

On Amazon Review datasets, DUP-OT outperforms single-domain baselines and achieves lower RMSE than TDAR under strictly non-overlapping training, with pronounced effectiveness in reducing large errors for cold-start users — validating the distribution + optimal transport approach.

## Significance

The work answers the realistic problem of bridging preferences without overlapping entities using GMMs and optimal transport, deepening the theoretical side of the lab's recommender line (GLORY, AWRS, MA-DPO).

## Outlook

Privacy regulation increasingly prevents cross-platform user matching, making the non-overlapping setting — where overlaps may exist at evaluation but are unavailable for training — ever more realistic. Technically, shared domain-level Gaussian components with personalized mixture weights balance distributional richness against computational cost; natural next steps include extension to three or more domains and modalities beyond reviews (images, behavior sequences). Within our recommender lineage, DUP-OT shares the review-text focus of MA-DPO, and integrating distributional preference representations with LLM-based recommendation is on the horizon.
