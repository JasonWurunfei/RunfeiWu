import fs from 'fs'
import path from 'path';
import matter from 'gray-matter';

const blogFolderPath = path.join(process.cwd(), 'blogs');
const ids = fs.readdirSync(blogFolderPath)
                    .filter(fileName => fileName != 'images')
                    .map(fileName => fileName.replace(/\.md$/, ''));

function getBlogPath(id) {
  return path.join(blogFolderPath, `${id}.md`);
}

export function getBlogMetaData(id) {
  const blogPath = getBlogPath(id);
  const fileContents = fs.readFileSync(blogPath, 'utf8');

  const matterResult = matter(fileContents);
  return matterResult.data;
}

export function getBlogMetaDataList() {
  return ids.map(id => getBlogMetaData(id));
}