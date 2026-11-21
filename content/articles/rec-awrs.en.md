---
title: A Look Into News Avoidance Through AWRS: An Avoidance-Aware Recommender System
venue: SDM 2025
summary: In joint research with Nikkei Inc., we developed AWRS (Avoidance-Aware Recommender System), which treats readers' deliberate choice not to read news (news avoidance) as a core element of recommendation. It consistently outperformed existing methods on news datasets in three languages, including Japanese (SIAM SDM 2025).
translated: manual
figureCaption: Source: Fig. 4 of I. L. R. Azevedo et al., "A Look Into News Avoidance Through AWRS: An Avoidance-Aware Recommender System" (SDM 2025, arXiv:2407.09137)
---

## Overview

AWRS (Avoidance-Aware Recommender System) is the first framework to systematically incorporate news avoidance — users deliberately not reading certain articles — into recommendation. We argue news articles are characterized by three interconnected principal elements: exposure, relevance, and avoidance, on the premise that avoidance conveys significant information about user preferences. Evaluations on news datasets in three languages — English (MIND), Norwegian (Adressa), and Japanese (Nikkei) — show AWRS consistently outperforms existing approaches across a wide range of metrics. Accepted at SIAM SDM 2025; first-authored by PhD student Igor L.R. Azevedo, joint work with Nikkei Inc.

## Highlights

- Characterizes news by exposure, relevance, and avoidance — the first systematic treatment of avoidance in recommendation
- Formalizes avoidance as the shortfall of clicks per exposure, integrating the "shown often but not read" signal
- Consistently outperforms baselines across three languages: English (MIND), Norwegian (Adressa), and Japanese (real Nikkei data)

## Background

Journalists have expressed growing concern about news avoidance, exacerbated by recommender systems. Surveys identify mental health concerns as the primary driver, with distrust of mainstream media — amplified during the pandemic by anti-vaccination advocates and conspiracy theorists — a significant contributor. News recommendation research advanced through NRMS, NAML, LSTUR, then GLORY (global graphs), LANCER (news lifetime), and PP-Rec (popularity), but integrating avoidance behavior remained unexplored. The binary clicked/not-clicked framing cannot distinguish active avoidance (exposed often, never clicked) from simple non-exposure.

## Method

AWRS starts by rigorously quantifying exposure and avoidance: Exposure Per Impression EPI(n,t) relates an article's exposures to total impressions, and avoidance Av(n,t) = 1 − clicks/exposures, ranging from 0 (full engagement) to 1 (total avoidance). The framework incorporates avoidance awareness with time and relevance modules, integrating the "shown often but avoided" article-level signal into user/news representations and matching, including hourly avoidance dynamics.

![Overall architecture of AWRS. The Click Predictor combines the outputs of the Document Encoder (news articles), the Avoidance-aware User Encoder (user representations that account for avoidance), and the Avoidance-aware Relevance Predictor to predict clicks. Source: I. L. R. Azevedo et al., "A Look Into News Avoidance Through AWRS: An Avoidance-Aware Recommender System" (SDM 2025)](images/article-rec-awrs-01.png)


## Results

On MIND-small (~124K training impressions), Adressa one-week (~181K), and the proprietary Nikkei one-week dataset (~137K), AWRS consistently outperforms baselines including NRMS and GLORY. Consistent gains across languages and reading cultures suggest the avoidance signal is universal rather than locale-specific.

## Significance

The first work to introduce avoidance as a behavioral axis in recommender systems, bridging journalism scholarship and recommendation algorithms, with direct applicability to Japanese media via real Nikkei data.

## Outlook

News avoidance is a worldwide phenomenon of growing concern in journalism research, and AWRS is the first algorithmic response from the recommender side. Practically, validation on real Nikkei data opens applications in engagement improvement and churn prevention grounded in understanding why readers don't read. Academically, avoidance signals generalize beyond news to any impression-logged domain: e-commerce (shown but not bought), video (thumbnail seen but not played), job boards (viewed but not applied). Future directions include inferring the reason for avoidance (discomfort, familiarity, distrust) and leveraging avoidance for recommendation diversity and filter-bubble mitigation.
