const path = require('path');
const fs = require('fs');

// console.log(__dirname);
const mydir = path.join(__dirname,"mydir")
console.log(mydir)

fs.readdir(mydir, (err, files) => {
    files.forEach((file) => {
        // console.log(file);
        // console.log(file.split('.')[1]);
        let folderName = path.join(mydir, file.split('.')[1])
        try {
            if (!fs.existsSync(folderName)) {
              fs.mkdirSync(folderName);
            }
          } catch (err) {
            console.error(err);
          }
        let oldPath = path.join(mydir, path.basename(file));
        let newPath = path.join(folderName,path.basename(file));
        fs.renameSync(oldPath, newPath)

    })
})
