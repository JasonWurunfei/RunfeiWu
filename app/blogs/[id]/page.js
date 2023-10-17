import fs from 'fs'
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

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

    const data = matterResult.data;
    return {
      contentHtml,
      ...data
    };
}

export default async function Blog({ params }) {
  const data = await getBlogData(params.id);
  return (
    <article>
      <h1>{params.id}</h1>
      <time datetime={data.datetime}>{data.datetime}</time>
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
    </article>
  )
}

export  function generateStaticParams() {
  return ids.map( id => ({id}));
}