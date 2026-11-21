---
title: Our news recommendation paper won the Best Full Paper Runner-Up and Best Student Paper Awards at ACM RecSys 2023
summary: At ACM RecSys 2023, the news recommendation paper by graduate student Boming Yang and colleagues received the Best Full Paper Runner-Up Award and the Best Student Paper Award.
---

![](images/news-recsys-2023-award-banner.jpg)

## Overview

Our team has won the Best Full Paper Runner-Up Award (one of the top three candidates out of 251 Full Papers submitted) and the Best Student Paper Award at ‘RecSys 2023,’ an international conference on recommendation systems sponsored by the Association for Computing Machinery (ACM).

## About the ACM RecSys 2023

The conference series ‘RecSys’ is positioned as the top conference in the field of recommendation systems, which recommend products, personnel, etc., through Artificial Intelligence (AI). Its 17th conference was held in Singapore from September 18th to 23rd, 2023. This conference brought together 997 researchers involved in recommendation systems from around the world, including 58 from Japan. The breakdown of participants was 73% on-site and 27% remote. Notably, while 37% of the participants were from academia, such as universities and government research institutes, a high ratio of 63% were from private companies. This indicates a large participation from companies that are actually researching and developing advanced recommendation algorithms and utilizing them in services, highlighting the practical aspect of this conference. Out of a total of 483 research papers submitted on the latest deep learning technologies and recommendation algorithms using large-scale language models, 47 were accepted as Full Papers and 38 as Short Papers, and were presented at the conference. In particular, presentations from giant IT companies such as Amazon, Google, Netflix, and Tencent were notable. Furthermore, 18 workshops and 6 tutorial sessions were held, introducing research on recommendation algorithms in various fields, including e-commerce, news, job postings, music, and fashion.

![At the RecSys 2023 venue](images/news-recsys-2023-award-01.jpg){width=512}

![ACM RecSys 2023](images/news-recsys-2023-award-02.jpg){width=512}

![Boming Yang presenting the paper](images/news-recsys-2023-award-03.jpg){width=512}

![Commemorative photo at the RecSys 2023 Best Paper Award ceremony](images/news-recsys-2023-award-04.jpg){width=512}

See the [link to the RecSys Best Paper Awards](https://recsys.acm.org/best-papers/).

## Paper Information

Title: Going Beyond Local: Global Graph-Enhanced Personalized News Recommendations
Authors: Boming Yang, Dairui Liu, Toyotaro Suzumura, Ruihai Dong, Irene Li
Full text: [https://dl.acm.org/doi/10.1145/3604915.3608801](https://dl.acm.org/doi/10.1145/3604915.3608801)
Preprint: [https://arxiv.org/abs/2307.06576](https://arxiv.org/abs/2307.06576)
Code: [https://github.com/tinyrolls/glory](https://github.com/tinyrolls/glory)
Presentation: [ACM RecSys 2023](https://recsys.acm.org/recsys23/), September 20, 2023, Singapore

## Summary

This research focuses on a personalized article recommendation algorithm specialized for news platforms. News platforms and e-commerce platforms each have different operational characteristics. On news platforms, new articles are added almost daily, while the value of past articles, especially those related to current events, rapidly declines as new information is updated. In contrast, on e-commerce platforms, user interest in popular products often persists for a long period of time. Because user interest in news articles tends to shift in a short period of time, there is a demand for the development of effective recommendation algorithms for news platforms, which is different from e-commerce platforms.

To address this challenge, this research pursued a new approach to article recommendation on news platforms. The challenge is to clarify the criteria for recommending which articles when there is insufficient user reading behavior data for the new articles added daily. To overcome this problem, a new method was introduced that refers to the reading behavior data of other users. In particular, this new algorithm, utilizing Graph Neural Networks, enables article recommendations with significantly higher accuracy compared to conventional methods.

![Figure 1: An example of recommending news from the behavior history of other users. Common articles found in the behavior history of three individuals are indicated in green, blue, and orange. The hatched blue and green news indicates news articles related to the blue and green articles, respectively.](images/news-recsys-2023-award-05.png)

## Comments from Mr. Boming Yang

Truly honored to receive the Best Student Paper award. Grateful for the guidance and support I’ve received along the way. This achievement fuels my passion for continuous learning.

## Comments from Professor Toyotaro Suzumura

In an international conference where players advancing research and practical application of recommendation systems, such as Google and Amazon, participate, I believe we, in academia, have proven that we can conduct impactful research, so this award has further motivated us to proceed in this field. Also, the problem addressed in this research, namely, the selection of recommendation content in situations with limited user interaction, is expected to be applied in various fields, not just news platforms. Therefore, we would like to expand on this theme and continue our research.

## Research Group

Boming Yang, Graduate Student, Graduate School of Information Science and Technology, The University of Tokyo
Dairui Liu, Graduate Student, University College Dublin
Toyotaro Suzumura, Professor, Graduate School of Information Science and Technology, Information Technology Center, The University of Tokyo
Ruihai Dong, Assistant Professor, University College Dublin
Irene Li, Assistant Professor, Information Technology Center, The University of Tokyo

## Acknowledgements

Part of this research has been funded by JSPS KAKENHI JP21K21280, JP23H03408. Also, it is supported by the Recommendation Program for Young Researchers and Woman Researchers (using mdx) of the Information Technology Center, The University of Tokyo.

Reference information: [Young and Female Use (using mdx)](https://www.cc.u-tokyo.ac.jp/guide/young/2023/)

## Additional Information on the Paper

In the paper, an example shown in the following figure is used to demonstrate a case where the proposed method effectively functions. In this example, there is a history of the user reading three articles: “News,” “Finance,” and “Music” (articles indicated in blue). Based on this history, referring to the reading data of other users, the figure depicts how football-related news (articles indicated in green) is added as related articles to a graph structure called the Global News Graph. By constructing this graph, it is indicated that when recommending new articles, the policy is to recommend articles in orange, which are highly related to the football-related articles (in green).

![Figure 2: An example of recommendation using the Global News Graph](images/news-recsys-2023-award-06.png)
