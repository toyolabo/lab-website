---
id: rec
catch: Understanding users' behavior patterns and preferences to recommend the right products for each person.
desc: Tackling real-world problems with industry partners — advancing news, e-commerce, job, and mobility recommendation with deep learning.
translated: manual
---

Research in recommender systems has been ongoing for quite some time, yet there remains a wealth of aspects yet to be explored. We identify four compelling reasons to focus our efforts on this field.

Volume and variety of data — The core of a recommender system is to better understand user behaviors and intentions. Growing data volume enhances behavior modeling, and as web interfaces become more sophisticated we can capture nuanced, multifaceted signals such as clicks, add-to-cart actions, favorites, and purchases.

Advances in high performance computing — Computing chips keep getting faster and GPUs are now a staple, providing the processing power needed for complex modeling tasks.

Deep learning-based model architectures — The combination of the first two factors enables increasingly sophisticated neural architectures, opening numerous possibilities in model design.

Societal impact — With the growth of online platform companies, even a 1% improvement in accuracy can have substantial business implications, making recommender systems an attractive domain with real-world impact.

## Industry collaboration

By collaborating with industrial partners, we seek efficient and effective ways to model user behavior with deep learning — across news, mobility, e-commerce, job matching, and medical platforms.

Since September 2023 we have also been exploring how large language models can be leveraged for recommender systems, and we participate in the LLM-JP project for LLM pretraining.

[LLM-JP project](https://llm-jp.nii.ac.jp/)

## News recommendation

On news platforms, new articles arrive daily and user interest shifts quickly, so news recommendation needs a different approach from e-commerce. Our GLORY (Global-LOcal news Recommendation sYstem) combines a global news graph built from the behavior of all users with each user's own reading history. The method and results are presented in the selected research below.

::article rec-news-global
::article rec-awrs

## E-commerce recommendation

Lookalike models assume that user similarity plays an important role in product selling and advertising campaigns over a very large user base. With Rakuten Group, we proposed a lookalike framework unifying customers' demographics, cross-platform buying behaviors, and loyalty behaviors — a “360-degree view” — and demonstrated its effectiveness on real e-commerce and travel datasets (SIGIR 2023).

![](images/topic-rec-02.png)

::article rec-lookalike
::article rec-audience
::article rec-otcdr
::article a-rec1

## Job matching

With industrial partners, we work on job recommendation and matching. Conceptualizing the market as a network, we use graph neural networks to analyze its intricate connections and reinforcement learning to optimize outcomes for the entire market rather than individual users (AAAI 2024 EcoSys Workshop).

![](images/topic-rec-03.png)

![](images/topic-rec-04.png)


## Mobility and location recommendation

In collaboration with Toyota, we study representation learning for mobility, including a graph Transformer model that captures human movement as a graph for next point-of-interest recommendation (ACM SIGSPATIAL 2023).

![](images/topic-rec-05.png)

::article robo-poi
