import fs from 'fs'
import path from 'path';
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import styles from './blogs.module.css'
import { getBlogMetaDataList } from '@/app/lib/blog';
import { getFormatTimeString } from '@/app/lib/time';

const blogFolderPath = path.join(process.cwd(), 'blogs');
const ids = fs.readdirSync(blogFolderPath)
              .filter(fileName => fileName != 'images')
              .map(fileName => fileName.replace(/\.md$/, ''));


export default function Blogs() {
  const BlogMetas = getBlogMetaDataList();
  return (
    <>
    <header><Navbar /></header>
    <main className={styles.main}>
      <ul className={styles.cards}>
      {BlogMetas.map((meta, idx) => (
        <li key={meta.title}>
          <Link href={`/blogs/${ids[idx]}`}>
            <div className={styles.card}>
              <h2>{meta.title}</h2>
              <div className={styles.datetime}>
                <time  dateTime={meta.datetime}>
                  {getFormatTimeString(meta.datetime)}
                </time>
              </div>
              <ul className={styles.tags}>
                {meta.tags.map(tag => (
                  <li key={tag} className={styles.tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </Link>
          
        </li>
      ))}
      </ul>
    </main>
    <Footer />
    </>
  );
}
