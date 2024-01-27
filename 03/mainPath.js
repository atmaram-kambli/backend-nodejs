import path from 'path';

let myPath = "d:\\Learn\\wd\\Backend\\03\\mainPath.js"

// Return extension of path
console.log(path.extname(myPath));

// Return name of file
console.log(path.basename(myPath));

// Return name of directory
console.log(path.dirname(myPath));  

// join() method
console.log(path.join('d:/','learn\\wd\\backend\\03\\file.txt'))