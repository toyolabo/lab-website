---
id: mi
catch: Streamlining computation and experiments to accelerate materials discovery.
desc: Accelerating materials discovery from three sides — the materials data platform ARIM-mdx (systems), the electrolyte and phonon databases OEDB and Phonix (data), and GNNs that generate crystal structures and predict atomic motion (models).
---

Finding new materials for batteries, semiconductors, catalysts, and more means searching a vast number of candidates for substances with the desired properties. Simulations such as first-principles calculations and molecular dynamics can reveal these properties, but they are computationally expensive, so not every candidate can be examined. Research is therefore spreading on machine learning models that learn from simulation results and take over part of the computation.

Our lab tackles these challenges from three sides: systems, data, and models. On the systems side, we develop and operate ARIM-mdx, a data platform for materials research that collects and manages data from experimental instruments and supercomputers across Japan. On the data side, we take part in joint research that builds databases of battery electrolytes and crystal phonons (OEDB and Phonix). On the model side, we represent substances such as crystals, molecules, and glasses as graphs whose nodes are atoms and whose edges connect nearby atoms, and use graph neural networks (GNNs) to generate crystal structures and to predict atomic motion. This is a flagship applied domain where all three pillars — graph, AI, and HPC — intersect.

## Systems — ARIM-mdx, a data platform for materials research {nav=Systems (ARIM-mdx)}

Using machine learning in materials research requires a way to collect experimental and computational data at scale. As part of MEXT's Advanced Research Infrastructure for Materials and Nanotechnology (ARIM), we develop and operate the ARIM-mdx Data System, a data platform for materials research built on the data platform mdx (IEEE BigData 2024). Combining petabyte-scale dedicated storage with the computing resources of mdx, it connects more than 40 shared experimental instruments at The University of Tokyo and can transfer data from nine supercomputers in Japan, including Fugaku. In its trial phase, 11 universities and research institutes across Japan took part, and more than 800 researchers from about 140 organizations used it (more than 900 as of December 2024).

[ARIM-mdx Data System](https://arim.mdx.jp/en/)

::article a2
::article mi-lims

## Data — OEDB and Phonix, databases of electrolytes and phonons {nav=Data (OEDB, Phonix)}

Data-driven materials discovery needs large amounts of data computed under the same conditions. We take part in joint research with materials scientists that builds materials databases by running simulations automatically and in large numbers. In addition to generating data, our lab provides the computing infrastructure (ARIM-mdx), builds the systems for publishing the data, and builds machine learning models.

OEDB (Open Electrolyte Database for Batteries, npj Computational Materials 2026) is a database of battery electrolytes. Properties of an electrolyte such as ionic conductivity and viscosity are determined by the solution structure that solvent molecules and ions form together. Existing chemical databases, however, mainly hold information on single molecules, and data on the solution structures and properties of electrolytes had not been compiled. Using a workflow that, given only the composition of an electrolyte, automatically runs everything from generating the initial structure through molecular dynamics simulation to analyzing structure and properties, the project ran about 16 million CPU-hours on mdx to produce data for 5,616 electrolytes. The data can be explored and compared on the web (oedb.jp). We also proposed a framework in which a large language model (LLM), given an application and target properties in natural language, refers to the data in OEDB and suggests candidate compositions.

[OEDB: Open Electrolyte Database for Batteries](https://oedb.jp/)

Phonix (npj Computational Materials 2026) is a database of the anharmonic properties of phonons (lattice vibrations of crystals), which govern how heat travels through a crystal, among other things. Using auto-kappa, a workflow developed by our collaborators that runs first-principles calculations automatically, the project built data for more than 6,500 inorganic compounds. Training a GNN on this data to predict thermal conductivity and its spectrum from crystal structure, we observed a scaling law in which prediction accuracy improves as the training data grows. Screening with this model identified candidates with high and low thermal conductivity.

[Phonix database](https://phonix-db.org/)

::article mi-oedb
::article mi-phonix

## Models — generation and prediction with graph neural networks {nav=Models (GNN)}

Representing the structure of a substance as a graph lets one model handle substances of different compositions and sizes. We use GNNs to build models that generate crystal structures and models that predict atomic motion.

ContinuouSP (AAAI 2025 Workshop) is a generative model that predicts crystal structures from the species of atoms. We mathematically formulated two properties: the result does not change when a crystal is translated or rotated, or when its unit cell is chosen differently (invariance), and a small change in atomic positions gives only a small change in the output (continuity). By combining an energy-based model with a modified CGCNN, we proved as theorems that both properties hold. In evaluation, it outperformed traditional machine learning approaches and performed comparably to several existing generative models.

BOTAN (J. Chem. Phys. 2023) is a GNN that predicts how atoms in a glass will move from the static structure before they start moving. Existing GNNs learned only the motion of each particle; BOTAN also learns the change in distance between neighboring pairs of particles (values on edges). Evaluated on molecular dynamics data, it predicted the mobility of particles more accurately than an existing GNN over the entire time range examined and at all three temperatures. Training was run on the Wisteria/BDEC-01 supercomputer at the Information Technology Center, The University of Tokyo.

::article mi-continuousp
::article mi-botan
::article mi-cgcnn
::article mi-ssl
