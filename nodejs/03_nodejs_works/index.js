const fs = require('fs')




//  1. Synchronous....Blocking Nature of JS
console.log("1")

const results1 = fs.readFileSync("./contacts.txt", "utf-8");
console.log(results1)

console.log("2\n\n")



// 2. Asynchronous....Non-Blocking Nature

console.log("1. first")

fs.readFile("./contacts.txt", "utf-8", (err, results2) => {
    console.log(results2)
})

console.log("2. second")


// const os = require('os')

// console.log(os.cpus())