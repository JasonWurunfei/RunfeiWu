---
title: How to Use conda
datetime: 2023-12-11T14:40:00.000+01:00
tags: [conda, python, virtual environment, workflow]
collection: [Dev Tools]
---
# How to Use conda
This blog is inspired by [Stop using pip! Use Conda instead! (Miniconda introduction)](https://www.youtube.com/watch?v=lBXDOY6ZtBg) and [Conda: Myths and Misconceptions](https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/).
## What is conda?
Conda is an open-source package management system and environment management system that runs on Windows, macOS, and Linux. Conda quickly installs, runs, and updates packages and their dependencies. Conda easily creates, saves, loads, and switches between environments on your local computer. It was created for Python programs, but it can package and distribute software for any language.

It is a package manager can
- Install 
- uninstall
- update
packages and binaries

It is a virtual environment manager that can
- create
- activate
- deactivate
- remove
virtual environments and
- isolate dependencies
- manage environment variables and settings

## MiniConda vs Anaconda
Miniconda is a free minimal installer for conda. It is a small, bootstrap version of Anaconda that includes only conda, Python, the packages they depend on, and a small number of other useful packages, including pip, zlib and a few others. 

From this blog [Conda: Myths and Misconceptions](https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/)
Conda is a package manager, It is used for installing and managing packages. Whereas Miniconda and Anaconda are distributions which come with conda, Python, and a bunch of other useful packages.

> A software distribution is a pre-built and pre-configured collection of packages that can be installed and used on a system.

However Conda is **not** a Python package manager. It is a package manager for any software (Python or not) that you install with conda. So it is more like a cross-platform version of `apt` or `yum`.

### Conda vs venv + pip
Conda has its own build-in environment manager, which is similar to `venv` + `pip`. However, conda is more powerful than `venv` + `pip` in the following ways:
- conda environments integrate management of different Python versions, including installation and updating of Python itself. Virtualenvs must be created upon an existing, externally managed Python executable.
- conda environments can track non-python dependencies. Even though pip can install non-python dependencies, it cannot track them. Conda can track non-python dependencies and update them together with Python packages.


## How to install conda?
Go to the official website [Miniconda](https://docs.conda.io/en/latest/miniconda.html) and download the installer for your operating system. Then follow the instructions to install it.

## How to use conda?
Just follow the instructions in the official website [Conda](https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html). Here I will just list some useful commands.

### Managing environments
1. check conda version
```bash
conda --version
```
2. update conda
```bash
conda update conda
```
3. check conda info
```bash
conda info
```
4. create a new environment
```bash
conda create --name [env_name] [package_name]
```
5. activate an environment
```bash
conda activate [env_name]
```
6. deactivate an environment
```bash
conda deactivate
```
7. remove an environment
```bash
conda remove --name [env_name] --all
```
8. list all environments
```bash
conda env list
```
9. list all packages in an environment
```bash
conda list -n [env_name]
```
10. install a package in an environment
```bash
conda install -n [env_name] [package_name]
```

### Managing Python
1. check Python version
```bash
python --version
```
2. create a new environment with a specific Python version
```bash
conda create --name [env_name] python=[python_version]
```
3. install a specific Python version for the current environment
```bash
conda install python=[python_version]
```

### Managing packages

1. install a package
```bash
conda install [package_name]
```
2. install a package in a specific environment
```bash
conda install -n [env_name] [package_name]
```
3. install a package with a specific version
```bash
conda install [package_name]=[package_version]
```
4. install a package from a specific channel
```bash
conda install -c [channel_name] [package_name]
```
4. search for a package
```bash
conda search [package_name]
```
5. search for a package in a specific channel
```bash
conda search -c [channel_name] [package_name]
```

### Managing Configurations
1. list all channels
```bash
conda config --show channels
```
2. add a channel
```bash
conda config --add channels [channel_name]
```
3. remove a channel
```bash
conda config --remove channels [channel_name]
```
4. set a channel as the highest priority
```bash
conda config --set channel_priority strict
```


## Install Jupyter Notebook?
1. create a new environment
```bash
conda create --name [env_name] python=[python_version]
```
2. activate the environment
```bash
conda activate [env_name]
```
3. install Jupyter Notebook
```bash
conda install -c conda-forge notebook
```
4. run Jupyter Notebook
```bash
jupyter notebook
```
