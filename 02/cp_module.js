const cp = require('child_process');

// cp.exec('calc');
// console.log("hi")

// cp.execSync('calc');
// console.log("hi")

console.log("main.js file: ",cp.execSync('node main.js').toString());