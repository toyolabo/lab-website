---
id: robo
catch: Building a robot brain that understands how objects relate.
desc: Foundation models — the robot’s brain — that capture object interactions and spatial relationships as graphs.
---

For robots to act in the real world, they need to understand their relationships with surrounding objects and other robots. GIANT (IEEE/RSJ IROS 2025), proposed in joint research with Aarhus University and Paderborn University, is a multi-robot trajectory planning method for collision avoidance. It represents nearby objects as nodes of a graph handled by attentive graph neural networks, and incorporates pre-planned global paths into its observations. In simulation, it achieved higher success rates and lower collision rates than three established baselines.

At the [Annual Conference of the Robotics Society of Japan (RSJ2026)](#/en/news/rsj-2026), we presented two studies on vision-language-action (VLA) models, which output robot actions from images and language instructions: ShadowVLA, which re-grounds frozen VLA policies at test time so that behaviors that failed under new object placements succeed without retraining, and a training-free adaptation that mitigates the performance drop when only the gripper is changed, through interventions at inference time. We also presented LabMate, an evaluation methodology and execution framework for human–robot collaboration in laboratories that enable robots to ask humans for clarification when instructions are ambiguous and to refuse or stop execution when a task is unsafe.
