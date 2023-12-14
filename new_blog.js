/**
 * Author: Runfei Wu
 * Date: 2023-12-14
 * Description: This script provides a quick way to create a new blog post.
 * 
 * This script provides a quick way to create a new blog post.
 * It creates a Markdown file with the frontmatter and a folder for images.
 * 
 * Usage:
 * node new_blog.js <filename> [-i]
 * 
 * <filename> is the name of the Markdown file to be created.
 * 
 * -i is an optional flag to create an image folder with the same name 
 * as the Markdown file.
 * 
 * Example:
 *  node new_blog.js my_new_blog -i
 * 
 * This will create a Markdown file named my_new_blog.md with the frontmatter
 * and an image folder named my_new_blog.
 * 
 * The time zone is set to Europe/Copenhagen, which is the time zone for Denmark.
 * This can be changed by modifying the tz variable.
 * 
 * `blogPath` and `blogImagesPath` are the paths to the blogs folder and the
 * blogs/images folder respectively.
 * 
 * `defaultEditor` is the default editor to open the Markdown file.
 * modify `defaultEditor` and `copenCommand` to change the editor.
 */

const fs = require('fs');
const moment = require('moment-timezone');
const path = require('path');
const { exec } = require('child_process');

const tz = 'Europe/Copenhagen';
const blogPath = 'blogs';
const blogImagesPath = 'blogs/images';
const defaultEditor = 'code';

// Function to generate current date-time in Denmark's timezone
function getCurrentDateTime() {
  // 'Europe/Copenhagen' represents the timezone for Denmark
  return moment().tz(tz).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
}

// Function to create the frontmatter for the Markdown file
function createFrontMatter(title) {
  return `---
title: ${title}
datetime: ${getCurrentDateTime()}
tags: []
collection: []
---
`;
}

// Function to write the Markdown file to a specified path
function writeMarkdownFile(title, filePath) {
  const frontMatter = createFrontMatter(title);
  fs.writeFile(filePath, frontMatter, (err) => {
    if (err) throw err;
    console.log(`Markdown file created successfully at ${filePath}`);
  });
}

// Function to create an image folder
function createImageFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Image folder created at ${folderPath}`);
  }
}

// Get the filename from the first argument
const fileName = process.argv[2];

// Check for the -i flag
const ShouldCreateImageFolder = process.argv.includes('-i');

// Validate the filename
if (!fileName) {
  console.error('Please provide a file name as the first argument.');
  process.exit(1);
}

// Use the filename to set the file path
// Ensure to include the '.md' extension
const filePath = path.join(__dirname, blogPath, `${fileName}.md`);

// The blog title can be extracted from the filename or set to a default
const title = fileName.replace(/-/g, '_'); // Replace hyphens with underscores

writeMarkdownFile(title, filePath);

// Create the image folder if the -i flag is present
if (ShouldCreateImageFolder) {
  const imageFolderPath = path.join(__dirname, blogImagesPath, fileName);
  createImageFolder(imageFolderPath);
}

const openCommand = `${defaultEditor} ${filePath}`;
exec(openCommand, (err, _, __) => {
  if (err) return;
});
