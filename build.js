const fs = require('fs');
const execSync = require('child_process').execSync;

const copyBlogImagesTo = 'public/images/blogs';
const copyBlogImagesfrom = 'blogs/images';

// create if not exist
if (!fs.existsSync('public/images')) {
  fs.mkdirSync('public/images');
}

// create if not exist
if (!fs.existsSync(copyBlogImagesTo)) {
  fs.mkdirSync(copyBlogImagesTo);
}

//clear the folder
fs.rmSync(copyBlogImagesTo, { recursive: true, force: true });
fs.mkdirSync(copyBlogImagesTo)

// copy the images into the folder
fs.cpSync(copyBlogImagesfrom, copyBlogImagesTo, {recursive: true});

// build
execSync('npm run build', {stdio: 'inherit'});
