// import { readFile } from "fs";
import fs from "fs/promises";

let a = await fs.readFile('file2.txt');
console.log(a.toString());

await fs.writeFile("file3.txt", "This is the Third File.\n\n\n\nThis is Good one");
await fs.appendFile("file3.txt", "\n\nThis is extended part")