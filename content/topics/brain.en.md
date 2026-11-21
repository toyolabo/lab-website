---
id: brain
catch: Reading brain states and disorders from EEG with foundation models.
desc: Methods for reading brain states and disorders from EEG, built around EEG foundation models.
---

Electroencephalography (EEG) records the brain's electrical activity through many electrodes placed on the head. Because it is non-invasive, it is used as a clue for diagnosing conditions such as epilepsy and depression, and in medicine and healthcare more broadly. Labeling EEG, however, takes considerable expert effort, so labeled data are scarce. Moreover, recording equipment, patient populations, recording procedures, and labeling practices differ from one institution to another, so a model trained on one dataset often does not work well on data from another institution.

Our lab studies EEG foundation models: models pre-trained on large amounts of unlabeled EEG and then used, with only a few labels, for tasks such as classifying disorders. We treat EEG as a graph of relationships between electrodes, building on the lab's expertise in graph machine learning.

## EEG foundation models

Like large language models, EEG foundation models are pre-trained on unlabeled data and then adapted (fine-tuned) to each task. Fine-tuning the whole model, however, is computationally expensive, which is a particular problem when labeled data are scarce. EEG-GraphAdapter (AAAI 2025 Workshop) keeps the pre-trained model frozen and trains only a small graph module (an adapter). While reducing the computation and data required, it improved the F1 score over the original model (BENDR) by up to 16.1% on two tasks: detecting depression and detecting abnormal EEG.

We are also working to overcome the differences between institutions. In joint research with Digital Hospital (IEEE EMBC 2025), we proposed a domain adaptation model that adapts a model trained on epilepsy EEG to epileptic seizure data from another institution and to depression data. Besides improving classification accuracy, we confirmed that medically meaningful features are preserved, such as the 20 Hz spikes associated with epilepsy and the suppression of parietal alpha waves that accompanies depression.

::article brain-adapter
::article a-brain1

## Enhancing EEG models with graphs

EEG is a relationship-rich signal recorded simultaneously by many electrodes. Existing EEG foundation models, however, mainly learn how the signal of each electrode changes over time, and do not fully use the relationships between electrodes. We represent EEG as a graph whose nodes are electrodes and whose edges are the connections between them, and build graph neural networks (GNNs) into EEG foundation models.

GEFM (IEEE EMBC 2025) is an EEG foundation model that combines GNNs with pre-training by a masked autoencoder. It also includes a mechanism that aligns signal lengths, which differ across datasets. In a comparison of several GNNs, GEFM outperformed the baselines on all three downstream tasks, particularly when using a GCN with an optimized configuration. EEG-GraphAdapter, introduced above, applies the same idea in a form that can be added afterward to an already pre-trained model.

::article a-brain1
