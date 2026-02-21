---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi! My name is Zekun Li (李泽坤). I am a third-year Ph.D. student in Computer Science at [Brown University](https://www.brown.edu/), working with [Prof. Srinath Sridhar](https://cs.brown.edu/people/ssrinath/index.html) at [Interactive 3D Vision & Learning Lab](https://ivl.cs.brown.edu/).

Before studying at Brown, I received my B. Eng. degree with honors in Computer Science at the University of Electronic Science and Technology of China ([UESTC](https://www.uestc.edu.cn/)). My undergraduate research advisor is [Prof. Zhao Kang](https://zhaokang.site/). Previously, I have enriched my research experience as an intern at Meta, Honda Research Institute, and Tencent AI Lab.

My research interest focuses on Generative Models and Computer Graphics. I am keen on combining knowledge-based principles and learning-based networks to achieve robust, responsible, controllable, and creative models for visual content generation.
Recently, I mainly focused on vision content customization and human-X interaction.

<!-- I am looking for research internship for 24 Summer, here is my [CV](images/CV_ZekunLi.pdf). Please freely contact me without any hesitation! (○'◡'○)ﾉ  -->
I'm always open to collaboration. If you want to work with me, please contact me without hesitation! (○'◡'○)ﾉ


<!-- # 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/llamo.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**LLaMo: Scaling Pretrained Language Models for Unified Motion Understanding and Generation with Continuous Autoregressive Tokens**

<b><u>Zekun Li</u></b>, Sizhe An, Chengcheng Tang, Chuan Guo, Ivan Shugurov, Linguang Zhang, Amy Zhao, Srinath Sridhar, Lingling Tao, Abhay Mittal
<br>
[[paper]](https://arxiv.org/abs/2602.12370)    [[project]](https://kunkun0w0.github.io/project/LLaMo/)

**TL;DR:** Propose a generic framework to extend pretrained LLMs for human motion generation and understanding, while preserving the original text-only performance via a modality-specific Mixture-of-Transformers (MoT).
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/PackUV.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**PackUV: Packed Gaussian UV Maps for 4D Volumetric Video**

Aashish Rai, Angela Xing, Anushka agarwal, Xiaoyan Cong, <b><u>Zekun Li</u></b>, Tao Lu, Aayush Prakash, Srinath Sridhar
<br>
[[paper]]()    [[project]]()

**TL;DR:** Propose a new volumetric video representation and the largest multi-view 4D dataset.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">In Submission</div><img src='images/videoGPA.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**VideoGPA: Distilling Geometry Priors for 3D-Consistent Video Generation**

Hongyang Du*, Junjie Ye*, Xiaoyan Cong*, Runhao Li, Jingcheng Ni, Aman Agarwal, Zeqi Zhou, <b><u>Zekun Li</u></b>, Randall Balestriero, Yue Wang
<br>
[[paper]](https://arxiv.org/abs/2601.23286)    [[project]](https://hongyang-du.github.io/VideoGPA-Website/)

**TL;DR:** Propose a video diffusion model post training solution to enhance 3D consistent.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">In Submission</div><img src='images/egoreact.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**EgoReAct: Egocentric Video-Driven 3D Human Reaction Generation**

Libo Zhang, <b><u>Zekun Li</u></b>, Tianyu Li, Zeyu Cao, Rui Xu, Xiao-Xiao Long, Wenjia Wang, Jingbo Wang, Yuan Liu, Wenping Wang, Daquan Zhou, Taku Komura, Zhiyang Dou
<br>
[[paper]](https://arxiv.org/abs/2512.22808)    [[project]](https://frank-zy-dou.github.io/projects/EgoReAct/index.html)

**TL;DR:** Propose a real-time ego-perception driven human reaction generation model and a motion dataset with spatially aligned ego-video.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">WACV2026</div><img src='images/genhsi.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**GenHSI: Controllable Generation of Human-Scene Interaction Videos**

<b><u>Zekun Li</u></b>, Rui Zhou, Rahul Sajnani, Xiaoyan Cong, Daniel Ritchie, Srinath Sridhar
<br>
[[paper]](https://arxiv.org/abs/2506.19840)    [[project]](https://kunkun0w0.github.io/project/GenHSI/)

**TL;DR:** Propose chain-of-frame prompting for VDM to generate plausible HSI videos without training.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AI4CC2025</div><img src='images/Art3D.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Art3D: Training-Free 3D Generation from Flat-Colored Illustration**

Xiaoyan Cong, Jiayi Shen, <b><u>Zekun Li</u></b>, Rao Fu, Tao Lu, Srinath Sridhar
<br>
[[paper]](https://arxiv.org/abs/2504.10466)    [[project]](https://joy-jy11.github.io/)

**TL;DR:** Propose a training-free solution for reconstructing geometry from flat-colored images.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV2024</div><img src='images/SurfD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Surf-D: High-Quality Surface Generation for Arbitrary Topologies using Diffusion Models**

Zhengming Yu, Zhiyang Dou, Xiaoxiao Long, Cheng Lin, <b><u>Zekun Li</u></b>, Yuan Liu, Norman Müller, Taku Komura, Marc Habermann, Christian Theobalt, Xin Li, Wenping Wang
<br>
[[paper]](https://arxiv.org/abs/2311.17050)    [[project]](https://yzmblog.github.io/projects/SurfD/)

**TL;DR:** Design a novel UDF-based latent diffusion model for shape generation.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR2024</div><img src='images/MANUS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**MANUS: Markerless Grasp Capture using Articulated 3D Gaussians**

Chandradeep Pokhariya, Ishaan Nikhil Shah, Angela Xing, <b><u>Zekun Li</u></b>, Kefan Chen, Avinash Sharma, Srinath Sridhar
<br>
[[paper]](https://arxiv.org/abs/2312.02137)    [[project]](https://ivl.cs.brown.edu/research/manus.html)

**TL;DR:** Provide a new multi-view grasping dataset with contact annotation and articulated Gaussian hand model for the benchmark.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR2023</div><img src='images/AnchorDEF.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Learning Anchor Transformations for 3D Garment Animation**

Fang Zhao, <b><u>Zekun Li</u></b>, Shaoli Huang, Junwu Weng, Tianfei Zhou, Guosen Xie, Jue Wang, Ying Shan
<br>
[[paper]](https://arxiv.org/abs/2304.00761)    [[project]](https://semanticdh.github.io/AnchorDEF/)

**TL;DR:** Design adaptive anchors to predict 3D garment animation from a body motion sequence, especially for loose-fitting garments.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV2022</div><img src='images/SGA.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Eliminating Gradient Conflict in Reference-based Line-art Colorization**

<b><u>Zekun Li</u></b>, Zhengyang Geng, Zhao Kang, Wenyu Chen, and Yibo  Yang
<br>
[[paper]](https://arxiv.org/abs/2207.06095)    [[code]](https://github.com/kunkun0w0/SGA)

**TL;DR:** Design a novel BP scheme to solve the gradient issue in Attention.
</div>
</div>

<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

<!-- # 💬 Professional Service
- *Conference Reviewer*: CVPR 2024, SIGGRAPH 2024, ECCV2024, AAAI 2025, ICLR 2025
- *Google explore CSR*: Ph.D. mentor 2024 -->


# 📖 Educations
- *2023.09 - 2028.06 (expected)*, <b>Ph.D. in Computer Science</b>, [Brown University](https://www.brown.edu/).
- *2019.09 - 2023.06*, <b>B. Eng. Degree in Computer Science</b>, University of Electronic Science and Technology of China ([UESTC](https://www.uestc.edu.cn/)).


# 💻 Internships
- *2025.5 - 2025.8*, Research Intern, [Meta](https://www.meta.com/about/company-info/), working on human motion foundation model with [Abhay Mittal](https://scholar.google.com/citations?user=BwE_L4MAAAAJ&hl=en).
- *2024.6 - 2024.8*, Research Intern, [Honda Research Institute](https://usa.honda-ri.com/), working on human-object-interaction tracking with [Enna Sachdeva](https://ennasachdeva.github.io/).
- *2022.10 - 2023.6*, Research Intern, [Tencent AI Lab](https://ai.tencent.com/ailab/en/index), working on garment animation and generation, supervied by [Prof. Fang Zhao](https://zhaofang0627.github.io/).
- *2020.09 - 2022.09*, Research Intern, Cognitive Computing and Intelligent Decision Lab at [UESTC](https://www.uestc.edu.cn/), working on image translation, supervied by [Prof. Zhao Kang](https://zhaokang.site/).
