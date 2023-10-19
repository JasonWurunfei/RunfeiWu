import styles from './Footer.module.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2023 Jason Runfei Wu</p>
      <Link href="https://github.com/JasonWurunfei"><AiFillGithub  /></Link>
      <Link href="https://www.linkedin.com/in/runfei-wu"><AiFillLinkedin  /></Link>
    </footer>
  );
}