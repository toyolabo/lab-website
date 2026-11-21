---
title: "GIANT: Global Path Integration and Attentive Graph Networks for Multi-Agent Trajectory Planning"
venue: IEEE/RSJ IROS 2025
summary: Integrates global path information with attentive graph networks for multi-agent trajectory planning. Presented at IROS 2025.
translated: manual
figureCaption: Source: Fig. 1 of J. le Fevre Sejersen et al., "GIANT: Global Path Integration and Attentive Graph Networks for Multi-Agent Trajectory Planning" (IROS 2025, arXiv:2603.04659)
---

## Overview

GIANT (Global Path Integration and Attentive Graph Networks for Multi-Agent Trajectory Planning) is a novel approach to multi-robot collision avoidance that integrates global path planning with local navigation strategies, utilizing attentive graph neural networks to manage dynamic interactions among agents. A local navigation model leverages pre-planned global paths within its observation space, letting robots adhere to optimal routes while dynamically adjusting to environmental changes; noise injection during training yields superior robustness in complex, dynamic environments. Against established baselines — NH-ORCA, DRL-NAV, GA3C-CADRL — across structurally diverse simulated scenarios, GIANT achieves consistently higher success rates, lower collision rates, and more efficient navigation, especially where baselines struggle. Open-source implementation released. Accepted at IEEE/RSJ IROS 2025; international collaboration with Jonas le Fevre Sejersen (Aarhus University) and Prof. Erdal Kayacan (Paderborn University).

## Highlights

- GIANT integrates global path planning with local navigation for multi-robot trajectory planning (IROS 2025)
- Attentive GNNs model dynamic agent interactions, learning cooperative avoidance with any number of neighbors
- Consistently higher success and lower collision rates vs. NH-ORCA, DRL-NAV, GA3C-CADRL; open-source release

## Background

Decentralized multi-agent RL approaches split into end-to-end methods (raw sensor data to actions — efficient but lacking higher-level interpretation) and agent-based methods (abstracted positions/velocities — better decision-making but missing detail in complex environments). A critical open challenge is global path integration: purely local models are inherently susceptible to local minima — a warehouse robot relying only on local avoidance and a goal may get trapped in dead-end aisles or circle obstacles. Since global planners estimate time-efficient paths even in dynamic, noisy multi-agent environments, integrating global planning with local navigation is a fundamental requirement for robust real-world navigation.

## Method

Four contributions: (1) a learned local navigation model incorporating pre-planned global paths in the observation space, maintaining route adherence while reacting to dynamic changes; (2) graph structures with attentive GNNs handling an arbitrary number of neighboring agents, combined with LiDAR-based perception for complex obstacle avoidance; (3) training-time noise injection for robustness under noisy sensing; (4) an open-source implementation for community benchmarking.

## Results

Across structurally diverse scenarios including dense, dynamic environments, GIANT consistently outperforms NH-ORCA, DRL-NAV, and GA3C-CADRL in success rate, collision rate, and efficiency — most markedly in challenging scenarios.

## Significance

An advancement in multi-robot navigation with direct implications for logistics, where adaptability to unforeseen obstacles is essential — extending the lab's graph AI into robotics through international collaboration.

## Outlook

Applications where multiple robots share space — warehouse logistics, delivery, cleaning — are expanding rapidly, and global path integration that prevents local-minimum traps is a prerequisite for deployment. The next step is real-robot validation: whether the robustness demonstrated in simulation, aided by training-time noise injection, holds under real sensor and actuator uncertainty. The graph representation of agent interactions extends our lab's graph-AI lineage into robotics and lays groundwork toward robot foundation models that understand object and agent relationships. The international collaboration with Aarhus and Paderborn continues through visiting PhD researchers.
