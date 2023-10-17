import fs from 'fs'
import path from 'path';
import Link from 'next/link'

const blogFolderPath = path.join(process.cwd(), 'blogs');
const ids = fs.readdirSync(blogFolderPath)
                    .filter(fileName => fileName != 'images')
                    .map(fileName => fileName.replace(/\.md$/, ''));


export default function Blogs() {
  return (
    <>
      <h2>Blogs</h2>
      <ul>
      {ids.map(id => (
        <li key={id}>
          <Link href={`/blogs/${id}`}>{id}</Link>
        </li>
      ))}
      </ul>
    </>
  );
}
