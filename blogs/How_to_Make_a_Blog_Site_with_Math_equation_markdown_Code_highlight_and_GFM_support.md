---
title: How to make a blog site with math equations, markdown, code highlight, and GFM (GitHub Flavored Markdown) support in Next.js
datetime: 2023-12-07T11:33:00.000+01:00
tags: [blog, math, markdown, code highlight, Next.js, remark, rehyp, mathjax, highlight.js]
collection: [Web Development]
---

# How to make a blog site with math equations, markdown, code highlight, and GFM (GitHub Flavored Markdown) support in Next.js

I have been looking for a way to make a blog site with math equations, markdown, and code highlight support in Next.js. I found a few solutions, including the ones that requires me to write janky code to make it work. I finally found a solution that is simple and elegant. I am going to share it with you in this post.

## Remark, Rehype, and Unified
Unified is a tool that allows you to write plugins for parsing and transforming markdown. Remark and Rehype are two plugins that allow you to parse and transform markdown. Remark is for parsing markdown into an abstract syntax tree (AST), and Rehype is for transforming the AST into HTML. You can imagine there is a lot you can do once the document is parsed into an AST. For example, you can add a plugin to transform the AST into HTML that supports math equations and code highlight. Then all you need to do is transform the AST into HTML again using Rehype.

## Node.js Version & Required Plugins
### Node.js Version
This setup requires Node.js version **16 or above**.
### Required Plugins
The following plugins are required to make this work:

    "rehype"
    "rehype-highlight"
    "rehype-mathjax"
    "remark"
    "remark-html"
    "remark-math"
    "rehype-raw"
    "remark-gfm"
    "remark-rehype"
    "unified"
    "highlight.js"

Just simply install them using npm or yarn.

I also have frontmatter in my markdown files. So I need to install the following package to parse the frontmatter:
    
    "gray-matter"

## Implementation
```javascript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import rehypeMathjax from 'rehype-mathjax';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import {unified} from 'unified';

import 'highlight.js/styles/atom-one-dark.css'; // or any other theme you like

function replaceBlogImageURI(mdContent) {
  const pattern = /\!\[(.*)\]\(images\/(.*)\)/g
  return mdContent.replace(pattern, "![$1](\/images/blogs/$2)")
}

async function getBlogData(id) {
  const blogPath = getBlogPath(id);
  const md = fs.readFileSync(blogPath, 'utf8');

  const {data, content} = matter(md);

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeRaw)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeMathjax)
    .use(rehypeStringify)
    .process(replaceBlogImageURI(content));

  return {
    HTML: String(file),
    ...data
  };

  export default async function Blog({ params }) {
  const data = await getBlogData(params.id);
  return (
    <>
      <article className={`${styles.blog} ${font.className}`}>
      <div className={styles.datetime}>
        <time dateTime={data.datetime}>
          {getFormatTimeString(data.datetime)}
        </time>
      </div>
      <div 
        className={styles.content} 
        dangerouslySetInnerHTML={{ __html: data.HTML }} 
      />
      </article>
    </>
  )
}
}
```

The `replaceBlogImageURI` function is just a helper function to replace the image URI in the markdown file. You can ignore it if you don't need it. `allowDangerousHtml` is set to true because it is required by the `rehypeRaw` plugin to parse the raw HTML in the markdown file. 

There you have it. It is that simple. You can now use the `getBlogData` function to get the blog data. If your frontmatter looks something like this:

    ---
    title: How to make a blog site with math equations, markdown, and code highlight support in Next.js
    datetime: 2023-12-07T11:33:00.000+01:00
    tags: [blog, math, markdown, code, highlight, Next.js, remark, rehyp, mathjax, highlight.js]
    ---

The `getBlogData` function will return an object with the following properties:
    
        HTML: The HTML content of the blog
        title: The title of the blog
        datetime: The datetime of the blog
        tags: The tags of the blog

And you can use the data to render the blog content just like the one you are reading right now.

So now if you have Markdown list like this in your markdown file:

    - Item 1
    - Item 2
    - Item 3
  
You will see the list rendered correctly as follows:

- Item 1
- Item 2
- Item 3

And
  
      1. Item 1
      2. Item 2
      3. Item 3


You will see the list rendered correctly as follows:

1. Item 1
2. Item 2
3. Item 3

If you have latex math expressions like this in your markdown file:

    $$
    \begin{aligned}
    \frac{1}{2} \cdot \frac{1}{3} &= \frac{1 \cdot 1}{2 \cdot 3} \\
    &= \frac{1}{6}
    \end{aligned}
    $$

or inline math expressions like this:

    I am writing a blog about $1 + 1 = 2$.

or even matrix like this:

    $$
    \begin{bmatrix}
    1 & 2 & 3 \\
    4 & 5 & 6 \\
    7 & 8 & 9
    \end{bmatrix}
    $$

You will see the math expressions rendered correctly as follows:

$$
\begin{aligned}
\frac{1}{2} \cdot \frac{1}{3} &= \frac{1 \cdot 1}{2 \cdot 3} \\
&= \frac{1}{6}
\end{aligned}
$$

I am writing a blog about $1 + 1 = 2$.

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

And if you have code blocks like this in your markdown file:

    ```javascript
    function add(a, b) {
      return a + b;
    }
    ```

You will see the code block rendered correctly as follows:

```javascript
function add(a, b) {
  return a + b;
}
```

## GFM (GitHub Flavored Markdown) Support
### Autolinked Literals
GFM supports autolinked literals. For example, if you have a URL like this in your markdown file:

    www.example.com, https://example.com, and contact@example.com.

You will see the URL rendered correctly as follows:

www.example.com, https://example.com, and contact@example.com.

### Footnote
GFM supports footnote. For example, if you have a footnote like this in your markdown file:

    Here is a footnote reference,[^1] and another.[^longnote]

    [^1]: Here is the footnote.

    [^longnote]: Here's one with multiple blocks.

        Subsequent paragraphs are indented to show that they
    belong to the previous footnote.
  
      ``` javascript
      function add(a, b) {
        return a + b;
      }
      ```

You will see the footnote rendered correctly as follows:

Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.
  
    ``` javascript
    function add(a, b) {
      return a + b;
    }
    ```


### Strikethrough
GFM supports strikethrough. For example, if you have a strikethrough like this in your markdown file:

    ~~Mistaken text.~~

You will see the strikethrough rendered correctly as follows:

~~Mistaken text.~~

### Table
GFM supports table. For example, if you have a table like this in your markdown file:

    | Syntax      | Description |
    | ----------- | ----------- |
    | Header      | Title       |
    | Paragraph   | Text        |

You will see the table rendered correctly as follows:

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

### Task List Items
GFM supports task list items. For example, if you have a task list item like this in your markdown file:

    - [x] Write the press release
    - [ ] Update the website
    - [ ] Contact the media
    - [ ] Prepare for the party
  
You will see the task list item rendered correctly as follows:

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
- [ ] Prepare for the party


Finally, if you don't like the default theme of the code highlight, you can change it by importing the theme you like. For example, if you want to use the `atom-one-dark` theme, you can import it like this:

    import 'highlight.js/styles/atom-one-dark.css';

If you want to see the full implementation, you can check out the repo [here](https://github.com/JasonWurunfei/RunfeiWu).

