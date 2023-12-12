import fs from 'fs'
import path from 'path';
import matter from 'gray-matter';
import rehypeMathjax from 'rehype-mathjax'
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import {unified} from 'unified'
import styles from './blog.module.css'
import 'highlight.js/styles/atom-one-dark.css'
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


async function getBlogData(id) {
  const blogPath = getBlogPath(id);
  const md = fs.readFileSync(blogPath, 'utf8');

  const {data, content} = matter(md);

  const file = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeMathjax)
    .use(rehypeStringify)
    .process(replaceBlogImageURI(content));

  return {
    HTML: String(file),
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
      <div 
        className={styles.content} 
        dangerouslySetInnerHTML={{ __html: data.HTML }} 
      />
      </article>
    </main>
    <Footer />
    </>
  )
}

export function generateStaticParams() {
  return ids.map( id => ({id}));
}