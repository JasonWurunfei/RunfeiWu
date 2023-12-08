import fs from 'fs'
import path from 'path';
import matter from 'gray-matter';

const blogFolderPath = path.join(process.cwd(), 'blogs');

export function getBlogIDs() {
  return fs.readdirSync(blogFolderPath)
           .filter(fileName => fileName != 'images')
           .map(fileName => fileName.replace(/\.md$/, ''));
}

export const IDs = getBlogIDs();

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
  return IDs.map(id => getBlogMetaData(id));
}

export function getAllCollectionIds() {
  const metaList = getBlogMetaDataList();
  const collections_ids = new Set(metaList.map(meta => meta.collection).flat());
  var ids = [...collections_ids];
  ids = ids.map(id => id.replace(' ', '_'));
  return ids;
}

export function getBlogMetaDataListByCollection(collection) {
  const metaList = getBlogMetaDataList();
  return metaList.filter(meta => meta.collection.includes(collection));
}

export function getBlogIDsByCollection(collection) {
  const metaList = getBlogMetaDataList();
  const out = [];
  metaList.forEach((meta, i) => {
    if (meta.collection.includes(collection)) {
      out.push(IDs[i]);
    }
  });
  return out;
}