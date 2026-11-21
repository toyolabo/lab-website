---
title: Open electrolyte database generated via an automated molecular dynamics simulation framework
venue: npj Comput. Mater. 2026
summary: A database of the structures and properties of about 5,600 electrolytes, built with a framework that automatically runs everything from composition input through molecular dynamics simulation to analysis. It is published on the web (oedb.jp) and can also be referenced by LLMs.
translated: manual
figureCaption: Source: Fig. 1(c) of K. Nakamura et al., "Open electrolyte database generated via an automated molecular dynamics simulation framework" (npj Computational Materials 12, 215 (2026), DOI 10.1038/s41524-026-02093-y), from the original paper
---

## Overview

We built OEDB (Open Electrolyte Database for Batteries), an open database that compiles data on the solution structures and properties of battery electrolytes at scale. We developed a framework that, given only the composition of an electrolyte, automatically runs molecular dynamics (MD) simulation, analyzes structure and properties, and registers the results in the database, and used it to compute 5,616 electrolytes on the data platform mdx. The data can be explored and compared on the web (oedb.jp) and can also be referenced by large language models (LLMs). Published in npj Computational Materials 12, 215 (2026). This is joint research with the School of Engineering (Yamada and Shiomi labs) and the Graduate School of Frontier Sciences (Tsuda lab) of The University of Tokyo and Nagoya Institute of Technology; Hanai implemented the web interface and the LLM-assisted framework.

## Highlights

- Automatically links charge assignment, force-field parametrization, initial structure generation, MD simulation, analysis, and database registration, processing more than 100 compositions per day (versus about one per day by hand)
- Ran about 16 million CPU-hours of MD on mdx to produce data for 5,616 compositions spanning three cations (Li⁺, Na⁺, K⁺), nine anions, 26 solvents, and concentrations of 0.5–4.0 mol/kg (about 300 TB of trajectory data in total)
- Confirmed for representative systems that density, ionic conductivity, and viscosity are consistent with experimental values

## Background

Battery electrolytes must satisfy several requirements at once, such as high ionic conductivity, a wide electrochemical stability window, and stable interfaces with the electrodes. Because many of these properties compete with one another, searching compositions based on data is a promising approach. Existing databases (such as the Electrolyte Genome Project and PubChem), however, mainly hold the structures and properties of single molecules. Data on properties such as ionic conductivity and viscosity, which emerge when molecules and ions come together as a solution, had not been compiled.

## Method

An MD study is divided into many steps — charge assignment, force-field parametrization, initial structure generation, equilibration, and analysis — and usually needs manual work at each step. We deployed these programs on a single computing system and linked their input and output formats automatically, so that everything from composition input to analysis and registration runs without manual intervention. For each composition we compute radial distribution functions, coordination numbers, density, ionic conductivity, viscosity, diffusion coefficients, and more.

## Results

In an "electrolyte structure map" that places solution-structure descriptors in two dimensions with t-SNE, electrolytes separate first by cation species and then, within each region, by solvent and anion species. Overlaying ionic conductivity and viscosity on this map shows values that change smoothly, with regions of higher ionic conductivity tending to have lower viscosity.

The web interface (oedb.jp) links the structure map, correlation plots between properties, and a list of compositions, so that users can filter by conditions and compare electrolytes. We also built a framework in which, given an application, target properties, and constraints in natural language, an LLM refers to OEDB data through the Model Context Protocol and organizes candidate solvent–salt combinations and property trends. Fine-tuning an open LLM (Mistral) on questions and answers generated from OEDB made it answer questions about the compositions and properties in OEDB more accurately than the original model.
