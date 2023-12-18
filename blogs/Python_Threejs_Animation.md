---
title: Python Threejs Animation
datetime: 2023-12-18T14:53:42.840+01:00
tags: [threejs, Python, Animation, jupyter notebook]
collection: [Programming]
---
# Python Threejs Animation
In this blog I will use the [pythreejs](https://pythreejs.readthedocs.io/en/stable/index.html) library to create a 3D animation in a jupyter notebook.

## Installation
To setup the environment, I will use [conda](https://docs.conda.io/en/latest/). I wrote a [blog](/blogs/How_to_Use_conda) about conda and how to use it to setup a virtual environment.

The following command will create a conda environment named `pythreejs` with python version 3.9 and install the required packages.
```bash
conda create -n pythreejs python=3.9
conda activate pythreejs
conda install pythreejs
conda install jupyter
```

If you have problems with the installation, you can check out the [installation guide](https://pythreejs.readthedocs.io/en/stable/installing.html) on the pythreejs homepage.

In [this blog section](/blogs/MT_Setup_RAINBOW_Env#run-in-vs-code) I explain how to run a jupyter notebook in VS Code if you prefer that over the jupyter notebook app like me.



