---
title: Database and deep-learning scalability of anharmonic phonon properties by automated brute-force first-principles calculations
venue: npj Comput. Mater. 2026
summary: A database of the anharmonic phonon properties that govern heat conduction in crystals, computed from first principles for more than 6,500 inorganic compounds. A GNN trained on it showed a scaling law in which the accuracy of thermal-conductivity prediction improves as the data grow.
translated: manual
figureCaption: Source: Fig. 3(a)(b) of M. Ohnishi et al., "Database and deep-learning scalability of anharmonic phonon properties by automated brute-force first-principles calculations" (npj Computational Materials 12, 150 (2026), DOI 10.1038/s41524-026-02033-w), from the original paper
---

## Overview

We built Phonix, a database of anharmonic properties of phonons (lattice vibrations) in crystals, such as phonon lifetimes and thermal conductivity, computed from first principles at scale. We developed auto-kappa, software that automates anharmonic phonon calculations, and produced data for more than 6,500 inorganic compounds. Training graph neural networks (GNNs) on this data to predict thermal conductivity and its spectrum from crystal structure, we observed a scaling law in which prediction accuracy improves as the training data grow. Published in npj Computational Materials 12, 150 (2026). This is international joint research led by the School of Engineering of The University of Tokyo (Shiomi lab); Hanai and Suzumura contributed to the machine learning and the database construction. The database is available at phonix-db.org.

## Highlights

- Built Phonix, with 6,641 materials and 7,342 data points, using auto-kappa, a workflow that automatically links first-principles calculations (VASP) and phonon calculations (ALAMODE)
- With GNNs that predict thermal conductivity and its spectrum from crystal structure (CGCNN for thermal conductivity, e3nn for cumulative thermal conductivity), confirmed a scaling law in which the mean absolute error falls as a power of the training data size (scaling factor 0.17 for the Peierls lattice thermal conductivity κp and 0.14 for cumulative thermal conductivity)
- Screening 381,000 crystal structures (GNoME) with the trained model identified three compounds with thermal conductivity above 200 W/(m·K) and nine below 0.2 W/(m·K)

## Background

Materials databases are the foundation of materials informatics. Large databases such as the Materials Project and OQMD mainly cover crystal structures and properties from relatively simple calculations, such as band gaps. For lattice thermal properties, which govern heat transport in non-metallic materials, most data rely on harmonic approximations or simple models, and data on phonon lifetimes and thermal conductivity computed from first principles including anharmonicity were limited. Experimental data are influenced by conditions that are often not recorded, such as grain size and impurities.

## Method

auto-kappa automates everything from structure optimization through the calculation of harmonic and anharmonic force constants to thermal conductivity, and also handles unstable cases such as those with imaginary frequencies. We computed non-metallic, non-magnetic inorganic compounds selected from the Materials Project and Phonondb, obtaining anharmonic phonon properties for more than 6,500 materials. On this data we trained two GNNs — CGCNN to predict scalar values such as thermal conductivity, and e3nn to predict spectra — and examined prediction accuracy while varying the amount of training data.

## Results

The figure at the top of this page shows the relationship between the amount of training data and the prediction error. For both thermal conductivity (a) and cumulative thermal conductivity as a function of mean free path (b), the error decreased as a power of the training data size. The scaling factors were comparable to those reported for large language models and for force prediction in crystals. Among the candidates found by screening with the trained model, the thermal conductivities confirmed by calculation were 284 W/(m·K) at the highest (hexagonal NpPH) and 0.14 W/(m·K) at the lowest (trigonal Cs₆Rb₂SnPbI₁₂).
