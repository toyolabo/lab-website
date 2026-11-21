---
title: Is Self-Supervised Pretraining Good for Extrapolation in Molecular Property Prediction?
venue: arXiv 2023
summary: Examines whether self-supervised pretraining helps molecular property prediction generalize to out-of-distribution (extrapolation) regimes.
translated: manual
figureCaption: Source: Fig. 2 of S. Takashige et al., "Is Self-Supervised Pretraining Good for Extrapolation in Molecular Property Prediction?" (arXiv:2308.08129)
---

## Overview

This work systematically examines whether self-supervised pretraining helps extrapolation in molecular property prediction — predicting property values outside the range of the training data. Since discovering materials with completely unseen properties is an ultimate goal achievable only through extrapolation, we formulate extrapolation over the distribution of output labels (the regression setting natural to property prediction) and empirically reveal: (1) existing models cannot predict beyond a certain value in extrapolation; (2) while models cannot accurately extrapolate absolute property values, self-supervised pretraining enables them to learn relative tendencies of unobserved values, improving extrapolation; (3) utilizing validation data during pretraining contributes to performance. First-authored by Shun Takashige (master's student) with Hanai, Suzumura, Wang, and Taura (arXiv 2023).

## Highlights

- Formulates extrapolation — the essence of materials discovery — over the output-label distribution
- Shows existing models plateau, unable to predict beyond the training label range
- Reveals pretraining cannot extrapolate absolute values but does capture relative tendencies in unobserved regions

## Background

Property prediction identifies promising candidates for batteries, semiconductors, catalysts, and pharmaceuticals. Physical simulations (DFT, coupled cluster) are costly, motivating surrogate ML models. Existing work assumes i.i.d. train/test (interpolation), but materials development needs extrapolation. We adopt a label-based formulation — the extrapolation region lies outside the min/max of training labels — because extreme values are precisely what matters in materials discovery. A situation unique to materials is the abundance of unlabeled data (structures known, properties uncalculated), making self-supervised pretraining a natural lever whose effect on extrapolation had not been verified.

## Framework and Findings

Data are split by the label distribution (left side for training, right side as the extrapolation region). Using Graphormer on properties such as the HOMO-LUMO gap, we compare seven regimes: no pretraining, three pretraining approaches without validation data, and three with it. Results: models without pretraining plateau, unable to predict beyond a certain value; pretraining does not recover absolute values but captures relative tendencies in the unobserved region, improving extrapolation; and using (unlabeled) validation structures during pretraining helps.

## Significance

The study separates the promise from the limits of pretraining for extrapolation: ML can rank candidates (relative tendencies) while absolute values still require physical computation — a directly actionable insight for materials informatics practice, and one starting point of our lab's materials × AI line leading to ContinuouSP.

## Outlook

The finding — absolute values unreachable, relative tendencies learnable — has direct practical implications for materials informatics: ML is effective for screening (ranking candidates) while determining property values still requires physical computation such as DFT. Future directions include designing pretext tasks explicitly aimed at extrapolation (this study evaluates existing pretraining methods), quantifying extrapolation uncertainty, and principled improvement by embedding physical constraints into models — a direction partially realized in ContinuouSP, whose invariance and continuity guarantees originate from the same problem awareness that this study seeded in our materials-AI research.
