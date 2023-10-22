import fs from 'fs'
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import styles from './blog.module.css'
import 'highlight.js/styles/atom-one-dark.css';
import { Lato } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { getFormatTimeString } from '@/app/lib/time';

const font = Lato({ subsets: ['latin'], weight: ['300', '400', '700']})

const blogFolderPath = path.join(process.cwd(), 'blogs');
const ids = fs.readdirSync(blogFolderPath)
                    .filter(fileName => fileName != 'images')
                    .map(fileName => fileName.replace(/\.md$/, ''));

function getBlogPath(id) {
  return path.join(blogFolderPath, `${id}.md`);
}

function replaceBlogImageURI(mdContent) {
  const pattern = /\!\[(.*)\]\(images\/(.*)\)/g
  return mdContent.replace(pattern, "![$1](\/images/blogs/$2)")
}

function highlight(html) {
  //console.log(html)
  const highlightedHTML = html.replace(/<pre><code class="language-(.*)">((.|\n|\s)*?)<\/code><\/pre>/gm,
   (_, p1, p2) => {
    const code = hljs.highlight(p2, {language: p1}).value
    const codefix = code.replace("&amp;#x3C;", "&lt;") // fix highlight.js bug
                        .replace(/&amp;<span class="hljs-meta">#x3C;(.*)&gt;(.*)<\/span>/g, "&lt;$1&gt;$2"); 
    return `<pre><code class="language-${p1}">${codefix}</code></pre>`;
   })
  return highlightedHTML;
}

async function  getBlogData(id) {
  const blogPath = getBlogPath(id);
  const fileContents = fs.readFileSync(blogPath, 'utf8');

  const matterResult = matter(fileContents);
  

  const content = matterResult.content;

  const contentURI_Update = replaceBlogImageURI(content);

  const processedContent = await remark()
    .use(html)
    .process(contentURI_Update);
  const contentHtml = processedContent.toString();

  const highlightedHTML = highlight(contentHtml)

  const data = matterResult.data;
  return {
    highlightedHTML,
    ...data
  };
}



export default async function Blog({ params }) {
  const data = await getBlogData(params.id);
  return (
    <>
    <header><Navbar /></header>
    <main className={styles.main}>
      <article className={`${styles.blog} ${font.className}`}>
      <div className={styles.datetime}>
        <time dateTime={data.datetime}>
          {getFormatTimeString(data.datetime)}
        </time>
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.highlightedHTML }} />
      </article>
    </main>
    <Footer />
    </>
  )
}

export  function generateStaticParams() {
  return ids.map( id => ({id}));
}