import Link from 'next/link'
import styles from './Navbar.module.css'
import { Zhi_Mang_Xing } from 'next/font/google'

import localFont from 'next/font/local'
const zmx_font = localFont({ 
  src: '../../public/fonts/ZhiMangXing-Regular.ttf', 
  weight: '400'
});

export default function Navbar({mode}) {
  var modeClass = mode === "light" ? styles.light : styles.dark;
  return (
    <nav className={`${styles.navbar} ${modeClass}`}>
      <div className={`${styles.logo} ${zmx_font.className}`}><Link href="/">吴润飞</Link></div>
      <ul className={styles.links}>
        <li className={styles.link}><Link href="/about">About</Link></li>
        <li className={styles.link}><Link href="/blogs">Blogs</Link></li>
        <li className={styles.link}><Link href="/CV.pdf">CV</Link></li>
      </ul>
    </nav>
  );
}