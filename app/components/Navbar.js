import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li><Link href="/CV.pdf">CV</Link></li>
      </ul>
    </nav>
  );
}