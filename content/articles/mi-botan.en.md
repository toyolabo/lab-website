---
title: "BOTAN: BOnd TArgeting Network for prediction of slow glassy dynamics by machine learning relative motion"
venue: J. Chem. Phys. 2023
summary: A GNN that predicts how atoms in a glass will move from their static structure alone. By learning the change in distance between neighboring pairs of particles as well as the motion of each particle, it predicted more accurately than an existing GNN at all time scales and temperatures examined.
translated: manual
figureCaption: Source: Fig. 7 of H. Shiba, M. Hanai, T. Suzumura, T. Shimokawabe, "BOTAN: BOnd TArgeting Network for prediction of slow glassy dynamics by machine learning relative motion" (J. Chem. Phys. 158, 084503 (2023), arXiv:2206.14024), from the original paper as published in J. Chem. Phys.
---

## Overview

When a liquid is cooled rapidly, its atoms stop moving before they can line up in order, and it freezes into a glass that keeps a random structure. In a liquid approaching the glass transition, atomic motion becomes extremely slow, and regions where atoms move readily appear mixed with regions where they hardly move. This work proposes BOTAN (BOnd TArgeting Network), a graph neural network (GNN) that predicts these differences in motion from the static structure alone, before the atoms start to move. By training it on the relative motion of neighboring pairs of particles in addition to the motion of each particle, we made its predictions more accurate than those of an existing GNN. Published in The Journal of Chemical Physics 158, 084503 (2023), by Shiba (Information Technology Center, The University of Tokyo), Hanai, Suzumura, and Shimokawabe. Code: github.com/h3-Open-BDEC/pyg_botan.

## Highlights

- Represents particles as nodes and nearby pairs of particles as edges, and targets both nodes (the motion of each particle) and edges (changes in pair distance)
- Compared with an existing GNN (the model of Bapst et al.) on molecular dynamics data of a three-dimensional Kob–Andersen binary Lennard-Jones mixture
- Predicted the mobility of particles more accurately (in Pearson correlation coefficient) than the existing GNN over the entire time range examined and at all three temperatures (T = 0.44, 0.50, 0.64)

## Background

The structure of a glass is random and has no obvious features, so telling from the structure which atoms will move has long been a difficult problem. Recent work has shown that machine learning, and GNNs in particular, can predict the mobility of atoms from the static structure with high accuracy. The model of Bapst et al. learns the mobility of each particle as a value on its node. Its accuracy, however, was known to drop between the short-time and long-time stages of relaxation.

## Method

BOTAN takes the same encoder–process–decoder GNN as the model of Bapst et al. and adds a decoder that reads out edge features. This lets it learn the mobility of each particle (nodes) and the change in distance between neighboring particles (edges) at the same time. Because changes in pair distance represent relative motion, they are less affected by vibrations that spread across the whole system, and they make particle rearrangements easier to capture.

Training and testing were run on the Wisteria/BDEC-01 supercomputer (Aquarius subsystem, NVIDIA A100) at the Information Technology Center, The University of Tokyo.

## Results

The figure at the top of this page compares the mobility of particles predicted by BOTAN and by the existing GNN (NT-GNN) with the values from simulation (ground truth), at the lowest temperature (T = 0.44). BOTAN predicted the spatial distribution of mobile and immobile regions closer to the ground truth than the existing GNN did. The errors of the existing GNN were aligned with the flow of displacements averaged over neighboring particles, suggesting that motion spreading across the whole system is one reason for its lower accuracy.
