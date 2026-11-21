---
title: "Crystal Graph Convolutional Neural Network to Predict Atom-decomposed Properties"
venue: Meeting Abstracts of the Physical Society of Japan (2024)
figureCaption: Source: figure in M. Kawamura, M. Hanai, Y. Tone, H. Kanezashi, T. Suzumura, "Crystal Graph Convolutional Neural Network to Predict Atom-decomposed Properties", Meeting Abstracts of the Physical Society of Japan 79.2 (2024), 17aN101-4, © 2024 The Physical Society of Japan
summary: Extends CGCNN to predict properties at the level of individual atoms in a crystal (such as formal charges) rather than whole-crystal properties, evaluated on first-principles data for 13,984 materials.
translated: manual
---

## Overview

The Crystal Graph Convolutional Neural Network (CGCNN) is a machine learning model that predicts the properties of materials from their crystal structure. In this work, we extended CGCNN, which predicts one value from one crystal structure, and implemented a model that predicts per-atom quantities such as formal charges. The work was presented at the 79th Annual Meeting of the Physical Society of Japan (September 2024; in Japanese).

## Highlights

- Extends CGCNN, which predicts whole-crystal (bulk) properties, to predict per-atom values
- The targets are quantities that first-principles calculations give for each atom, such as formal charges
- Evaluated on first-principles data for 13,984 materials

## Background

CGCNN regresses physical quantities such as formation energy from crystal structure, and classifies materials, for example as metals or insulators. Because it handles materials with different compositions and structures in one model, it has been used to predict bulk properties such as band gaps, thermal conductivity, and transition temperatures.

First-principles calculations and other materials simulations, however, also give per-atom quantities in addition to bulk ones: Bader and Löwdin formal charges, magnetization, partial densities of states, and so on. Since a graph neural network treats atoms as nodes, it can also regress such local quantities.

## Method

We extended CGCNN, which obtains one bulk quantity from one structure, and implemented a machine learning model that predicts per-atom properties such as formal charges.

## Results

We evaluated the model on first-principles data computed by the authors for 13,984 materials. The figure at the top of this page compares, for the partial charge of each atom, the value from first-principles calculations (horizontal axis) with the model's prediction (vertical axis).
