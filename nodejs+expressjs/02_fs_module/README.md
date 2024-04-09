# File System (fs) module

- The node:fs module enables interacting with the file system



## fs module usage

1. Asynchronous:  You call it passing a file path, and once Node.js gets the file details it will call the callback function you pass, with 2 parameters: an error message, and the file stats:
    ```
    import fs from 'fs'

    fs.stat(filePath, (err, stats) => {
        if(err) {
            // print err.message
        }
        // we have access to the file stats in `stats`
        
        stats.isFile(); // true
        stats.isDirectory(); // false
        stats.isSymbolicLink(); // false
        stats.size; // 1024000 //= 1MB
    })
    ```
2. Synchronous: Node.js also provides a sync method, which blocks the thread until the file stats are ready:
    ```
    const fs = require('node:fs');
    try {
        const stats = fs.statSync('/Users/joe/test.txt');
    } catch (err) {
        console.error(err);
    }
    ```