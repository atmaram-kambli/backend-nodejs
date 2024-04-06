const fs = require('fs')

// console.log(fs)


// // 1. writing to the file
// fs.writeFileSync("./test.txt", "Hello World!!\n")

// // 2. writing to the file asynchromously
// fs.writeFile("./test1.txt", "Hello World!! Async\n", (err) => {
//     if(err) {
//         console.log("Error: ",err);
//     }else {
//         console.log("Successfully Done!!")
//     }
// })



// // 3. Appending to file
// fs.appendFileSync("./test.txt", "New Hello World\n");



// // 4. Reading from the file synchronously
// const results = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(results)

// // 5. Reading from the file asynchronously
// fs.readFile("./contacts.txt", "utf-8", (err, data) => {
//     if(err) {
//         console.log("Error: ", err);
//     }else {
//         console.log(data)
//     }
// })

// // 6. create directory
// fs.mkdirSync("myFile");

// // 7. copy the file
// fs.cpSync("./contacts.txt", "./newCopy.txt")

// // 8. delete the file
// fs.unlinkSync("./newCopy.txt")


// // 9. get stats about the file
// const statsOfTextFile = fs.statSync("./test.txt");
// console.log(statsOfTextFile)

