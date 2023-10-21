import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './about.module.css'

export default function About() {
  return (
    <>
    <header><Navbar /></header>
    <main className={styles.main}>
    <h1>About This Site</h1>
    <p>This site is a place for me to record my everyday study and thoughts. It is developed in a very iterative approach where everything starts with a bare minimum and as I use this site, I will gradually add on more features or better looks depending on if I have time.</p>
    </main>
    <Footer />
    </>
  );
}