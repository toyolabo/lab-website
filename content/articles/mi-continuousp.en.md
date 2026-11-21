---
title: ContinuouSP: Generative Model for Crystal Structure Prediction with Invariance and Continuity
venue: arXiv 2025
summary: A generative model for crystal structure prediction that is proven to satisfy symmetry invariance and structural continuity by design. It outperformed traditional machine learning approaches and performed comparably to several existing generative models.
translated: manual
figureCaption: Source: Fig. 1 of Y. Tone et al., "ContinuouSP: Generative Model for Crystal Structure Prediction with Invariance and Continuity" (AAAI 2025 Workshop, arXiv:2502.02026)
---

## Overview

ContinuouSP is a generative model for crystal structure prediction (CSP) that simultaneously satisfies the invariance and continuity crystals inherently require. We mathematically formulate both properties and construct the model in the energy-based model (EBM) framework, using a modified CGCNN (CGCNN′) as the energy predictor — proving as theorems that invariance and continuity of the energy function are inherited by the probability density and loss. Preliminary evaluation shows ContinuouSP surpasses traditional ML approaches and performs comparably to several existing generative models, with supplementary experiments and theory clarifying its advantages and challenges. Accepted at the AAAI 2025 AI2ASE workshop; first-authored by master's student Yuji Tone with Hanai, Kawamura (RIKEN), Taura, and Suzumura. Code: github.com/packer-jp/ContinuouSP.

## Highlights

- Mathematically formulates the invariance (translation, rotation, permutation, re-description) and continuity that CSP generative models must satisfy
- EBM + modified CGCNN design provably transfers both properties to the probability density and loss (proven as theorems)
- Uniquely maintains performance on extraordinary datasets (unit-cell re-descriptions) where existing generative models collapse

## Background

CSP — predicting crystal structures from the atom species of one period — is central to discovering battery, semiconductor, and catalyst materials. For a function over materials to be physically meaningful it must be invariant to operations like translations and rotations, and continuous: small atomic displacements must yield small output changes. In generative models both the training map and the resulting probability density must satisfy these. Crystals add re-description freedom — infinitely many unit cells describe the same solid. Recent diffusion-based CSP models (CDVAE, DiffCSP, SyMat, DiffCSP++) achieve partial invariance via equivariant score predictors, but satisfying continuity simultaneously remained elusive.

## Method

ContinuouSP formalizes invariance (translation, rotation, permutation, re-description) and continuity for solids and periodic units, then builds an EBM whose energy predictor is CGCNN′. Because the EBM's density is defined through the energy function, proving strong re-description invariance and continuity for CGCNN′ transfers those properties to the generative distribution and the loss — established as theorems. Training uses contrastive-divergence-style gradient estimation with geometrically sampled steps.

## Results

While not state-of-the-art, ContinuouSP surpasses traditional ML approaches and matches several existing generative models on CSP benchmarks — with rigorous by-design guarantees of invariance and continuity, and robustness to unit-cell re-description that existing models lack. Supplementary analyses clarify remaining challenges.

## Significance

Embedding physically correct symmetry and continuity rigorously into model design exemplifies principle-driven generative modeling, building on our lab's materials informatics infrastructure work (ARIM-mdx, LIMS, extrapolation studies).

## Outlook

While diffusion-based CSP methods compete on empirical performance, this work charts a principle-driven route: rigorously guaranteeing physically correct properties by design. Though generation quality is not yet state-of-the-art, the invariance and continuity guarantees should pay off in generalization to data-scarce material systems and reduced dependence on data augmentation. Next steps include improving EBM sampling efficiency, theoretical integration with diffusion models, and validation against experimental data accumulating on the ARIM-mdx platform. First-authored by a master's student, the work also reflects an interdisciplinary mentoring team spanning materials science, systems, and graph AI.
