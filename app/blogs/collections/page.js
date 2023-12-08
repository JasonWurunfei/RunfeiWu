import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import styles from '@/app/blogs/collections/collections.module.css';
import { getAllCollectionIds } from '@/app/lib/blog';

import config from '@/app/config';

const IDs = getAllCollectionIds();
const collection_background_image_URI = config.collection_background_image_URI;

export default function Blogs() {
  
  return (
    <>
    <header><Navbar /></header>
    <main className={styles.main}>
      <ul className={styles.cards}>
        {IDs.map(id => (
          <Link key={id} href={`/blogs/collections/${id}`}>
            <li className={styles.card}>
              <Image
                src={`${collection_background_image_URI}${id}.png`}
                alt={id}
                width={270}
                height={140}
              />
              <h3>{id.replace('_', ' ')}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </main>
    <Footer />
    </>
  );
}
