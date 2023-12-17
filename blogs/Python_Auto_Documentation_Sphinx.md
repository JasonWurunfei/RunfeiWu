---
title: Python Auto Documentation Sphinx
datetime: 2023-12-17T21:59:52.993+01:00
tags: [Python, Sphinx, Documentation]
collection: [Programming, Dev Tools]
---
# Python Auto Documentation Sphinx

## How to properly document your code

### Comments

There are different types of comments. The most common ones are:
- Alert
```python
# ! This is an alert comment
```
- TODO
```python
# TODO: This is a todo comment
```
- Question
```python
# ? This is a question comment
```
- Inline Hint
```python
# just normal inline comment
```
- Class and Method description (docstring)

There is a cool VScode extension called [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) that helps you to highlight different types of comments.

#### Don't comment the obvious
   
Instead of repeating the syntax or code itself, for example:
```python
class Bank:
    def __init__(self, name, address):
        self.name = name
        self.address = address
        self.history = []
    def deposit(self, amount, name):
        # append a tuple of (TransactionType, int, datetime, string) to self.history
        self.history.append(("deposit", amount, datetime.now(), name))
```

Comment the overall purpose and what is happening like this:
```python
class Bank:
    def __init__(self, name, address):
        self.name = name
        self.address = address
        self.history = []
    def deposit(self, amount, name):
        # append the history data to the history
        self.history.append(("deposit", amount, datetime.now(), name))
```


## Type Hints
Since Python 3.5, type hint is part of the standard library via PEP 484. They can be used by third party tools like mypy, pycharm, pylint, etc. to type check your code but also increase the readability of your code.

for example:
```python
def add(a: int, b: int) -> int:
    return a + b
```
This function takes two integers and returns an integer. This is a very simple example but it shows the basic syntax of type hints. The type hints are not enforced by the interpreter. Now when you need to use this function in some other parts of your code, you can see the type hints and know what type of arguments to pass in and what type of return value to expect.

you can change your VScode settings to change the type check mode to strict. This will highlight the type errors in your code. It is called `python.analysis.typeCheckingMode` and you can set it to `strict` or `off`.

## Docstring
Docstring is a string literal that occurs as the first statement in a module, function, class, or method definition. It is used to document the purpose of the code. It is also used by Sphinx to generate the documentation.

There are different styles of docstring. The most common ones are:
- Google
- Numpy
- reStructuredText
- Epytext
- Javadoc

For example:
```python
def add(a: int, b: int) -> int:
    """Add two integers and return the result.

    Args:
        a (int): The first integer.
        b (int): The second integer.

    Returns:
        int: The sum of the two integers.
    """
    return a + b
```

## Sphinx
Sphinx is a documentation generator that uses reStructuredText as its markup language.
