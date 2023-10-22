import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import styles from './Home.module.css'


export default function Home() {
  var mode = "light";
  return (
    <div className={styles.home}>
    <header><Navbar mode={mode} /></header>
    <main className={styles.main}>
      <section className={styles.landing}>
      <img src="/images/photo/landing.jpg" alt="landing" />
      <div className={styles.landingMask}></div>
      <div className={styles.landingText}>
      <h1>Welcome to Jason Runfei Wu&apos;s Cyberspace</h1>
      {/* <p>Hi, I am Jason Runfei Wu, a student at the University of Copenhagen. I am currently studying Computer Science. I am interested in software development, Machine Learning, Computer Simulations, and Computational Geometry.</p> */}
      </div>
      
      </section>
      <section className={styles.description}></section>
      <section className={styles.timeline}></section>
    </main>
    <Footer />
    </div>
  )
}
