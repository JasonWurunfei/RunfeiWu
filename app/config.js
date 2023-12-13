import path from 'path';

const config = {
  /*
   * Path to the folder containing the blogs.
   * 
   * @type {string}
  */
  blogFolderPath : path.join(process.cwd(), 'blogs'),
  /*
   * URI to where the blog images are served.
   * 
   * @type {string}
  */
  image_URI: '/images/blogs',
  /*
   * Regex pattern to match the blog image path in the markdown file.
   * It must have two capturing groups. One for the alt text and the 
   * other for the image file path.
   * 
   * @type {RegExp}
  */
  blog_image_path_pattern: /\!\[(.*)\]\(images\/(.*)\)/g,
  /*
   * URI to where the collection background images are served.
   * 
   * @type {string}
  */
  collection_background_image_URI: '/images/collections',
};

export default config;