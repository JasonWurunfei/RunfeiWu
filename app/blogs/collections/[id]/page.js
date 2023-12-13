import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import styles from './collection.module.css';
import { getFormatTimeString } from '@/app/lib/time';
import {
  getBlogMetaDataListByCollection,
  getAllCollectionIds
} from '@/app/lib/blog';

// the space in the id is escaped to '_' in the url
const escaped_ids = getAllCollectionIds(); 

export default async function Blog({ params }) {
  const id = params.id.replace('_', ' ');
  const BlogMetas = getBlogMetaDataListByCollection(id);
  return (
    <>
    <header><Navbar /></header>
    <main className={styles.main}>
      <h1>{id}</h1>
      <ul className={styles.cards}>
      {BlogMetas.map(meta => (
        <li key={meta.title}>
          <Link href={`/blogs/${meta.id}`}>
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
  )
}

export function generateStaticParams() {
  return escaped_ids.map(id => ({id}));
}