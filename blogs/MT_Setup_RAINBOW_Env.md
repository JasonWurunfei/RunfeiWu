---
title: Setup RAINBOW Environment
datetime: 2023-12-13T16:33:00.000+01:00
tags: [Master Thesis, RAINBOW,  Environment]
collection: [Simulation]
---

# Setup RAINBOW Environment
This blog I will document the process of setting up the RAINBOW environment. 

## What is RAINBOW?
RAINBOW is a python code library for rigging, setting up and running simulations in Jupyter notebooks. The aim is to have simple interactive python tools that can be used with very little backgorund knowledge, while providing a back-end functionality in C++ or CUDA for developing new simulator technology and providing high performance code. It is developed at DIKU University of Copenhagen. Here is the [github repo](https://github.com/diku-dk/RAINBOW) and its [homepage](https://diku-dk.github.io/RAINBOW/). 

## My Thesis Project
My thesis project is to use RAINBOW to develop a computational method that potentially could accurately simulate the physical behavior of the human colon. The focus is on creating a high-fidelity representation that captures the unique characteristics of the colon as a hollow, soft body tube capable of deformation in the abdominal region of the human body.

## Setup RAINBOW Environment
### Install Conda
Conda is a package manager that can create virtual environments. It is very useful for managing different python environments and dependencies. It is designed to make setting up and managing data science environments quick and easy. I wrote a blog about it [here](/blogs/How_to_Use_conda).
