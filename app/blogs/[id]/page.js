import styles from './blog.module.css';
import 'highlight.js/styles/atom-one-dark.css';
import { Lato } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { getFormatTimeString } from '@/app/lib/time';

import { IDs, parseBlogData } from '@/app/lib/blog';

const font = Lato({ subsets: ['latin'], weight: ['300', '400', '700']})

export default async function Blog({ params }) {
  const data = await parseBlogData(params.id);
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
  return IDs.map( id => ({id}));
}