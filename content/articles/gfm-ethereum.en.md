---
title: Ethereum Fraud Detection with Heterogeneous Graph Neural Networks
venue: KDD 2022 Workshop (MLG)
summary: Phishing and other fraud are common in cryptocurrency transactions. Every transaction is public, but there are so many that it was unclear which GNNs help detect fraud. From the real Ethereum transaction network, we extracted a subgraph and labeled account types such as exchanges and wallets using Etherscan, making it a heterogeneous graph. We compared homogeneous GNNs (GCN, GAT, GraphSAGE) with heterogeneous GNNs (RGCN, HAN, HGT), splitting training and test data by transaction time. RGCN, which convolves separately per edge type, was best in F1 (0.812) and PR-AUC (0.890), above the best homogeneous GNN, GraphSAGE (F1 0.735). Simply adding account types as input features did not help; a heterogeneous GNN was needed to exploit them.
translated: manual
figureCaption: Source: Fig. 4 of H. Kanezashi, T. Suzumura, X. Liu, T. Hirofuchi, "Ethereum Fraud Detection with Heterogeneous Graph Neural Networks" (KDD 2022 Workshop MLG, arXiv:2203.12363), from the original paper (CC BY 4.0)
---

## Overview

This work detects phishing and other fraudulent accounts on the real Ethereum transaction network using graph neural networks. We construct a heterogeneous transaction network with multiple node and edge types and exhaustively compare representative homogeneous GNNs (GCN, GraphSAGE, GAT) against heterogeneous GNNs (RGCN, HAN, HGT) on a subgraph of the real network with imbalanced labels — a setting the paper says had not yet been studied. RGCN achieves the best overall performance and HGT also beats the best homogeneous model (GraphSAGE), while HAN is on par with the homogeneous GCN. By Kanezashi and Suzumura with AIST (KDD 2022 Workshop MLG).

## Highlights

- Exhaustive comparison of GNNs for fraud detection on a subgraph of the real Ethereum network with imbalanced labels, a setting the paper says had not yet been studied
- RGCN performs best overall among homogeneous (GCN, GraphSAGE, GAT) and heterogeneous (RGCN, HAN, HGT) GNNs; HGT also beats the best homogeneous model, while HAN is on par with GCN
- Confirms structural roles of node types — exchange and token-contract nodes act as network hubs

## Background

Blockchains enable decentralized data exchange, but money laundering and phishing scams are common on platforms like Bitcoin and Ethereum. Unlike traditional banks with account vetting and transaction monitoring, anyone can freely create wallets and transact — while all transaction records are public, the sheer volume of transactions and wallets makes detection time-consuming. Prior detection work relied on hand-crafted features (timestamps, amounts) or graph embeddings; few studies used GNNs, and, per the paper, models addressing the scale of vertices and edges and the imbalance of labels had not yet been studied.

## Method

From real Ethereum transaction logs and reported phishing labels, we build a heterogeneous network incorporating node types such as accounts (wallets and exchanges). Analysis of the real network reveals that certain node types act as hubs. Based on hypotheses drawn from these statistics, we exhaustively evaluate homogeneous GNNs (GCN, GraphSAGE, GAT) and heterogeneous GNNs (RGCN, HAN, HGT) across hyperparameters. The labels come from a public Kaggle dataset (1,165 fraudulent nodes); the subgraph is built from those nodes, 1,165 randomly chosen normal nodes, and their neighbors (9,629 nodes, 386,612 edges), and Etherscan information is used to assign account types such as exchange and token contract (Sec. 4.3).

![Examples of meta-paths (paths from an account to an account) used in HAN. Paths of length 2 and 3 pass through other node types such as cold wallets and exchanges. Source: Fig. 3 of H. Kanezashi, T. Suzumura, X. Liu, T. Hirofuchi, "Ethereum Fraud Detection with Heterogeneous Graph Neural Networks" (KDD 2022 Workshop MLG, arXiv:2203.12363), CC BY 4.0](images/article-gfm-ethereum-01.png)

## Results

RGCN, which learns separate parameters per edge type, performs best on overall metrics (F1 0.812, PR-AUC 0.890). HGT (F1 0.785) also beats the best homogeneous model, GraphSAGE (F1 0.735), but HAN (F1 0.5725) is on par with the homogeneous GCN (0.5843) (Sec. 4.4.1). Simply adding account types as input features did not help the homogeneous GNNs much; the type information is best used by a heterogeneous GNN (Sec. 4.4.2).

## Significance

This work compares homogeneous and heterogeneous GNNs for phishing detection on the real Ethereum transaction network. RGCN performs best, and the type information is best exploited by a heterogeneous GNN.

## Outlook

As future work, the paper lists a dynamic GNN that considers transaction timestamps, which may find patterns specific to fraudulent transactions more accurately, and the use of account attributes, with further evaluation and optimization of model performance (Conclusion).
