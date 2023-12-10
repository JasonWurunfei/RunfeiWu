---
title: Linear Transformations
datetime: 2023-12-10T14:31:00.000+02:00
tags: [Math, Linear Algebra, Matrix]
collection: [Math]
---

# Linear Transformations

> Notes from video [What is Jacobian? | The right way of thinking derivatives and integrals - YouTube](https://www.youtube.com/watch?v=wCZ1VEmVjVo)

## Linear map

A transformation is called linear if

- Parallel lines stays parallel
- Even spacings preserved
- Origin is fixed

A linear transformation can be captured by an array of vectors for example:

$$
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$

the columns of this matrix are the vectors that the transformation maps the basis vectors to.

In the example above, the transformation maps the basis vectors $\begin{bmatrix}1 \\ 0\end{bmatrix}$ and $\begin{bmatrix}0 \\ 1\end{bmatrix}$ to $\begin{bmatrix}1 \\ 3\end{bmatrix}$ and $\begin{bmatrix}2 \\ 4\end{bmatrix}$ respectively.


The ratio between the area (if 2D) or volume (if 3D) of the transformed space and the original space is the same across the whole space. This is called the determinant of the matrix. If the determinant is negative, the transformation is a reflection.


