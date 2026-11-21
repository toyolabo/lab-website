---
title: mdx: A Cloud Platform for Supporting Data Science and Cross-Disciplinary Research
venue: IEEE DASC/PiCom/CBDCom/CyberSciTech 2022
summary: A report on the design, architecture, and operation of mdx (a platform for building data-empowered society), operated jointly by universities and research institutes across Japan. Our lab contributes to part of mdx's operation, and much of our data-platform research also makes use of it.
translated: manual
figureCaption: Source: Fig. 1 of T. Suzumura et al., "mdx: A Cloud Platform for Supporting Data Science and Cross-Disciplinary Research Collaborations" (IEEE DASC/PiCom/CBDCom/CyberSciTech 2022, arXiv:2203.14188), from the original paper (CC BY 4.0)
---

## Overview

mdx, a platform for building data-empowered society, is a nationwide cloud platform built to support data science and cross-disciplinary research collaborations. Jointly operated by 9 national universities and 2 national research institutes, its virtualization service launched in 2021. It provides flexible virtualized environments, strong security, and coupling with supercomputers and edge devices through high-performance networks (SINET), serving 50+ projects (at the time of the paper) across materials informatics, geo-spatial information science, life science, astronomy, economics, social science, and computer science. This paper reports mdx's design, architecture, and status; Prof. Suzumura is the lead author with researchers from UTokyo, Hokkaido, Tohoku, Tsukuba, NII, AIST, Tokyo Tech, Nagoya, Kyoto, Osaka, and Kyushu (IEEE DASC/PiCom/CBDCom/CyberSciTech 2022).

## Highlights

- A nationwide cloud platform for research, operated by a consortium of 9 universities and 2 institutes (service since 2021)
- Users build their own virtualized environments from the OS up, with direct SINET coupling to supercomputers, facilities, and edge devices
- Supported 50+ cross-disciplinary projects from materials science to economics at the time of the paper (IEEE DASC/PiCom/CBDCom/CyberSciTech 2022)

## Background

Growing data and analysis tools drive the "fourth paradigm" — bottom-up, data-driven discovery — now indispensable in materials science, life science, and weather prediction, while high-value societal problems (carbon control, smart cities, drug discovery) demand interdisciplinary collaboration. Existing infrastructure fits poorly: supercomputers restrict users to pre-installed OSes, libraries, and drivers, unable to serve data scientists needing specific PyTorch/TensorFlow/GPU-driver versions, Windows desktops, or shared Jupyter environments; commercial clouds raise cost, data-sovereignty, and academic-network connectivity issues. The breadth of needs — laptop-scale to supercomputer-scale — motivated a new platform type.

## Design

mdx's core pattern lets users set up their own virtualization computing platforms: isolated per-project VMs and virtual networks, freely configured from OS to software stack, with CPU and GPU nodes. Direct SINET connection enables fast, low-latency transfer from universities, facilities, and edge devices nationwide, holistically integrated with supercomputers. Authentication federates with GakuNin; operation is a consortium of university IT centers — itself a novel academia-run cloud model.

## Status and Significance

Since fall 2021, and as of the paper, mdx has supported 50+ projects including materials science, smart cities, carbon neutrality, and medical data analysis. Our lab contributes to part of mdx's operation and carries out data-platform research (the ARIM-mdx Data System, university-scale LIMS) on top of mdx. mdx also embodies the shift of academic infrastructure from computing to collecting, sharing, and utilizing data.

## Outlook

mdx embodies the shift of academic infrastructure from computing to collecting, sharing, and utilizing data, expanding as the national home for fourth-paradigm research. For our lab, mdx is doubly significant: as infrastructure, the ARIM-mdx Data System and university-scale LIMS run on it, and domain research data gathers there; on the research side, the issues around cloud-HPC converged systems — efficient GPU sharing, large-scale transfer, federated authentication — overlap with our lab's research themes. Meeting generative-AI-era compute demands (LLM and foundation-model training and inference) and the evolution toward mdx II are on the horizon.
