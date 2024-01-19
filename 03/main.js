// const fs = require('fs');
import fs from 'fs';

// console.log(fs);

console.log("Starting");
// fs.writeFileSync("file1.txt", "This is file 1");

fs.writeFile("file2.txt", "This is file 2", () => {
    console.log("File 2 created!");
    // fs.readFile("file2.txt", (error, data) => {
    //     // console.log(error, data)  // Data will be in buffer code format
    //     console.log(error, data.toString());
    // })
})

fs.appendFile("file2.txt", "\n\nThis is extended part!", (e,d)=> {
    console.log(d.toString());
});
// fs.readFile("file2.txt", (error, data) => {
    // console.log(error);
    // console.log(data.toString());
// })
console.log("Ending");