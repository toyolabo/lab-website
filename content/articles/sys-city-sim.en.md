---
title: Toward Simulating Entire Cities with Behavioral Models of Traffic
venue: IBM Journal of Research and Development 2013
summary: A large-scale traffic simulation platform reproducing the behavior of all vehicles in a city — a pioneering social application of large-scale systems.
translated: manual
figureCaption: Traffic simulator screen for Sendai. For a location with road damage, it compares no action and three road-closure scenarios by number of cars, jam length and CO2 emissions. Source: T. Osogami et al., "Toward Simulating Entire Cities with Behavioral Models of Traffic" (IBM Journal of Research and Development 57(5), 2013, DOI 10.1147/JRD.2013.2264906), Fig. 1 (from the original paper, © 2013 IBM; road colors on the map © OpenStreetMap contributors, CC BY-SA 2.0)
---

## Overview

This work concerns IBM Mega Traffic Simulator (Megaffic), an agent-based large-scale traffic simulator that reproduces the behavior of vehicles across entire cities using behavioral models of individual drivers. Its distinguishing feature: driver behavior is governed by foundational principles learned from probe-car data — estimating each driver's personality in route selection across metrics like travel time, distance, and number of turns. Built in the X10 language for massively parallel execution, it simulates traffic across large metropolitan areas, with use cases in disaster recovery and resilient transportation reported for Sendai, Nairobi, and Rio de Janeiro. Published in the IBM Journal of Research and Development (2013); by IBM Research - Tokyo (Osogami, Imamichi, Mizuta, Suzumura, Ide).

## Highlights

- Estimates each driver’s route-selection personality (weighing time, distance, turns) from probe-car data
- X10-based massively parallel execution enables microscopic simulation of entire metropolitan areas
- Applied in Sendai (post-earthquake recovery), Nairobi, and Rio de Janeiro (IBM Journal of R&D 2013)

## Background

Resilient transportation systems enable quick evacuation, rescue, and relief distribution during disasters, and their resilience hinges on decisions informed by traffic simulation. Microscopic models (tracking individual vehicles) capture effects macroscopic models cannot — e.g., minute merging-lane changes that significantly reduce congestion, or control of specific vehicles like ambulances — but face two practical walls. Calibration: the many parameters governing speed, lane, route, origin, and destination choices are time-consuming to set and rely on expert intuition, so details get omitted (e.g., assuming drivers always minimize travel time). Scalability: congestion interacts across a city, requiring all roads and intersections; prior whole-region simulations (all of Switzerland with MATSIM, all of Chicago) had to simplify — e.g., queue models instead of car-following models.

## Approach

Megaffic (version 2) targets both limitations. For calibration, probe-car data are used to estimate individual drivers' route-selection personalities — how they weigh travel time, distance, and turns — embedding data-derived behavioral models in the simulation. For scalability, the simulator is built in X10 for massively parallel execution, partitioning the road network across compute nodes to simulate entire metropolitan areas microscopically.

## Use Cases

![The traffic simulation screen for Sendai. Top left: the target area. The other four: results with no action and with three road-closure scenarios (colors show congestion; the boxes show the number of cars, jam length and CO2 emission). Source: Fig. 1 of T. Osogami et al., "Toward Simulating Entire Cities with Behavioral Models of Traffic" (IBM Journal of Research and Development 57(5), 2013, DOI 10.1147/JRD.2013.2264906) (© 2013 IBM; street colors © OpenStreetMap contributors, CC BY-SA 2.0)](images/article-sys-city-sim.png)

Three cities are reported: Sendai — evaluating measures to accelerate recovery after the 2011 Tohoku earthquake; Nairobi and Rio de Janeiro — analyses toward resilient transportation in rapidly developing, severely congested cities.

## Significance

The framework of data-learned behavioral models × massively parallel simulation pioneered the social application of large-scale systems technology, and is an origin of the lab's later spatio-temporal research: traffic forecasting (AAAI 2023) and human mobility modeling (SIGSPATIAL 2023).

## Outlook

Megaffic's framework — behavioral models learned from real data × massively parallel simulation — anticipated today's digital-twin and smart-city research. Its use in Sendai after the 2011 earthquake exemplifies resilience applications; the Nairobi and Rio analyses show its value for infrastructure decision support in rapidly developing cities. Technically, its agent simulation and road-network graph processing are origins of our lab's spatio-temporal research: traffic forecasting (MegaCRN, AAAI 2023) and mobility modeling (MobGT, SIGSPATIAL 2023). As transportation research converges on fusing simulation (forward what-if analysis) with ML prediction (induction from data), holding both technical lineages is a distinctive strength of our lab.
