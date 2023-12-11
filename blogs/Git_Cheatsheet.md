---
title: Git Cheatsheet
datetime: 2023-12-11T14:12:00.000+01:00
tags: [Git, Github, version control, workflow]
collection: [Dev Tools]
---
# Git Cheatsheet
Git is a distributed version control system used for tracking changes in source code during software development. GitHub, on the other hand, is a cloud-based hosting service that lets you manage Git repositories. Here's a quick rundown of how to use Git, along with a common workflow example involving GitHub:
## Basic Git Commands
- `git init`: Initialize a local Git repository in your project directory.
- `git clone [URL]`: Clone a remote repository (from GitHub, for example) to your local machine.
- `git add [file]` or `git add .`: Add files to the staging area to prepare them for a commit.
- `git commit -m "[commit message]"`: Commit your changes along with a descriptive message.
- `git status`: Check the status of changes as untracked, modified, or staged.
- `git push [remote] [branch]`: Push your committed changes to a remote repository (like GitHub).
- `git pull [remote]`: Update your local repository to the newest commit from a remote.
- `git branch`: List, create, or delete branches.
- `git checkout [branch]`: Switch branches or restore working tree files.
- `git merge [branch]`: Merge a different branch into your active branch.

## Common Workflow Example

### Case 1: You're working on a project alone.
1. **Create a Repository (Repo)**: On GitHub, create a new repository.
2. **Clone the Repo**: Use git clone to clone this repository to your local machine.
3. **Create a Branch**: Create a new branch using git branch [branch-name] and switch to it using git checkout [branch-name].
4. **Make Changes and Commit**: Work on your project files in your local machine. Use git add to stage changes and git commit to commit them with a message.
5. **Push Changes**: Push your branch to GitHub using git push origin [branch-name].
6. **Create Pull Request (PR)**: On GitHub, open a pull request to merge your branch into the main branch.
7. **Review and Merge the PR**: The repository owner reviews the pull request and, if everything is okay, merges it into the main branch.
8. **Pull the Changes**: Finally, use git pull to update your local main branch.

### Case 2: You're working on a project with a team.
1. **Clone the Repo**: Use git clone to clone the repository to your local machine.
2. **Fetch the list of branches**: Use git fetch to fetch the list of branches from the remote repository.
```bash
git fetch --all
```
3. **See the list of branches**: Use git branch -a to see the list of branches.
```bash
git branch -a
```
4. **Checkout the branch**: Use git checkout [branch-name] to checkout the branch you want to work on.
```bash
git checkout [branch-name] origin/[branch-name]
```
5. **Pull the latest changes**: Use git pull to pull the latest changes from the remote repository.
```bash
git pull origin [branch-name]
```
6. **Make Changes and Commit**: Work on your project files in your local machine. Use git add to stage changes and git commit to commit them with a message.
7. **Push Changes**: Push your branch to GitHub using git push origin [branch-name].
