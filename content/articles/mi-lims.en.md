---
title: Cloud Data Acquisition from Shared-Use Facilities in a University-Scale LIMS
venue: IEEE/ACM UCC 2023
summary: Automated acquisition of measurement data from shared-use facilities into a cloud-based university-scale LIMS — one of the building blocks of the materials data platform ARIM-mdx.
translated: manual
figureCaption: Source: the right half of Fig. 1 placed next to Fig. 3 (a photo of the IoT device) of M. Hanai et al., "Cloud Data Acquisition from Shared-Use Facilities in A University-Scale Laboratory Information Management System" (IEEE/ACM UCC 2023, DOI 10.1145/3603166.3632147), from the original paper (CC BY 4.0, adapted)
---

## Overview

This work designs and implements an IoT device and transfer algorithm for direct data transfer from non-networked, shared-use experimental facilities to a cloud system, within a university-scale LIMS (Laboratory Information Management System). We propose a novel data transfer algorithm that integrates user management with the transfer process, safely assigning each user's data to their private cloud storage space. Presented at IEEE/ACM UCC 2023 (Taormina, Italy), by Hanai, Kawamura, Ishikawa, Suzumura, and Taura.

## Highlights

- IoT device transferring data from non-networkable instruments (legacy OS, USB-only) directly to the cloud (IEEE/ACM UCC 2023)
- Recognized as USB storage by instrument PCs — no software installation or OS changes required
- Novel transfer algorithm integrating user management, safely routing shared-instrument data to each user’s private space

## Background

Cutting-edge materials research depends on shared high-end facilities such as atomic-resolution electron microscopes, whose data should flow automatically into cloud LIMS for structuring, analysis, and publication. But networking such facilities is often infeasible: control computers operate for over a decade with specially tailored hardware interfaces, drivers, and software; many permit external connections only via USB; and many run vulnerable legacy OSes (Windows XP/7) where updates or security patches are practically impossible — so even firewalled Ethernet poses substantial risk. Consequently, major shared facilities worldwide (NIST EM Nexus, UIUC MNTL/MRL, UTokyo-ARIM) still manage instruments standalone, extracting data manually via USB drives or DVDs — safe, but inefficient for large volumes from many users.

## System

![Comparison of ways to extract data from a shared-use facility. Left: the traditional way (data is copied to a USB stick or DVD and carried out by hand). Right: the proposed way (an IoT device connected to the instrument by USB sends the data to each user's folder in cloud storage). Source: Fig. 1 of M. Hanai et al., "Cloud Data Acquisition from Shared-Use Facilities in A University-Scale Laboratory Information Management System" (IEEE/ACM UCC 2023, DOI 10.1145/3603166.3632147) (CC BY 4.0)](images/article-mi-lims-01.png)

Observing that virtually all facilities support USB-based data extraction, we develop an IoT device that presents itself to the control computer as USB storage — requiring no software installation or OS changes on the instrument — and automatically forwards received data to cloud storage. The technical core integrates user management with transfer: in shared facilities, each measurement must be identified and safely assigned to the right user's private space, which our algorithm builds into the transfer process, eliminating data mixing and leakage risks. Users are identified by a temporary URL that the IoT device updates periodically: a user logs in through this URL in the facility room, and only after successful authentication is the data sent to that user's own space in the cloud. The device is implemented on a general-purpose small computer (Raspberry Pi 4) and keeps transferring even if the network or power supply is interrupted.

## Results and Significance

Deployment at UTokyo's shared-use laboratory center, with 30+ shared instruments and several hundred users, showed that cloud acquisition from non-networked instruments works in practice. The device and design insights evolved directly into the data acquisition architecture (RxT devices) of the nationwide ARIM-mdx Data System (IEEE BigData 2024), which, as of December 2024, collects data from 40+ shared-use instruments at the University of Tokyo.

## Outlook

Shared-facility data management is a worldwide challenge — as at NIST EM Nexus and UIUC — and the approach of connecting instruments untouched through USB, the least-common-denominator interface, is transferable to facilities globally. As future work, the paper notes that encryption and TLS processing are the bottleneck that keeps transfers from fully using the 1 Gbit/s network bandwidth.
