---
id: systems
catch: Taking part in operating large-scale computing systems and services to support research from the ground up.
desc: Operating research infrastructure and services, and research that makes use of them, including mdx (a platform for building data-empowered society), the large-scale GPU system SYNKA, the materials data platform ARIM-mdx, and the large-scale AI inference service mdx-MaaS.
casesHeading: Published Work
casesLead: This section introduces the research we have carried out on the platforms described above.
translated: manual
---

Working with the Information Technology Center at the University of Tokyo and other organizations inside and outside the university, our lab helps operate infrastructure and services that support research. We take part in operating mdx (a platform for building data-empowered society), which universities and research institutes across Japan operate together, and the large-scale GPU system SYNKA, run by several organizations of the University of Tokyo. On mdx, we help operate the materials data platform ARIM-mdx, and we design, build, and operate the large-scale AI inference service mdx-MaaS. Much of our own graph and AI research also makes use of these platforms.

## mdx: a platform for building data-empowered society {nav=mdx}

mdx is a cloud platform for supporting data science and cross-disciplinary research collaborations, jointly operated by 9 national universities and 2 national research institutes in Japan. Our lab contributes to part of its operation. The design, architecture, and operation of mdx are reported in a paper led by Prof. Suzumura. Much of our applied research, including materials informatics, also makes use of mdx.

![Overview of mdx. Compute nodes and storage are divided per project by virtualized networks (purple, blue, and orange frames). Through SINET5, mdx connects to data sources such as research institutions and IoT devices across Japan, and works together with supercomputers such as ABCI. Source: Fig. 1 of T. Suzumura et al., "mdx: A Cloud Platform for Supporting Data Science and Cross-Disciplinary Research Collaborations" (IEEE DASC/PiCom/CBDCom/CyberSciTech 2022, arXiv:2203.14188), from the original paper (CC BY 4.0)](images/article-sys-mdx.png){width=70%}

[mdx: a platform for building data-empowered society](https://mdx.jp/)

[Paper: mdx: A Cloud Platform for Supporting Data Science and Cross-Disciplinary Research Collaborations (IEEE DASC/PiCom/CBDCom/CyberSciTech 2022)](https://doi.org/10.1109/DASC/PiCom/CBDCom/Cy55231.2022.9927975)

::article sys-mdx

## The large-scale GPU system SYNKA {nav=SYNKA}

SYNKA is a GPU cluster of organizations of the University of Tokyo, including the Institute of Industrial Science, operated together with the Information Technology Center at the University of Tokyo. It has 50 compute nodes with NVIDIA H200 GPUs (400 GPUs in total) and is used for research that contributes to AI for Science, such as AI training and inference and data analysis. Our lab contributes to its operation, including designing its usage policies and preparing guides for users.

![System architecture of SYNKA. Fifty GPU nodes, each with eight H200 GPUs, and six CPU nodes are connected by a high-speed network (InfiniBand) and a general-access network (Ethernet), and share fast storage (2.1 PB) and large-capacity storage (5 PB). Connections between sites go through the gateway server over SINET (L2VPN). Source: system architecture diagram on the SYNKA system official site (https://synka-jp.org/, in Japanese)](images/topic-systems-synka.png)

[SYNKA system official site (in Japanese)](https://synka-jp.org/)

## The materials data platform ARIM-mdx {nav=ARIM-mdx}

We contribute to operating the ARIM-mdx Data System, a data platform that gathers data from shared experimental facilities and supercomputers across Japan onto mdx for materials researchers. Our university-scale LIMS (Laboratory Information Management System), which collects data even from instruments that cannot be connected to a network, is one of the building blocks that make ARIM-mdx possible.

[ARIM-mdx Data System](https://arim.mdx.jp/)

::article a2
::article mi-lims

## The large-scale AI inference service mdx-MaaS {nav=mdx-MaaS}

We design, build, and operate mdx-MaaS, an inference service on mdx that makes open AI models, such as large language models, available to researchers. In addition to an API that programs can call, it offers a chat interface in the browser. Our aim is to let researchers use AI safely within mdx, without preparing their own GPU servers.

[mdx-MaaS portal site](https://sites.google.com/view/mdx-maas/)

[Paper: mdx MaaS: A Scalable AI Inference Platform on the Academic Cloud System mdx (AXIES 2025 Annual Conference, in Japanese)](https://doi.org/10.24669/axies.2025.0_361)
