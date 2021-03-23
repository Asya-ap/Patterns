const {
    readdir, //used to asynchronously read the contents of a given directory readdir(path, options, callback)
    readFile,
    writeFile
  } = require("fs");

const {
  join
} = require("path"); //where you export more than one module from a file origin to the file destination

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

// built in method to reverse a string
const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");

  
function readContent(error, files) {
    if (error) return console.log(`Error: Folder inaccessible`);
    files.forEach(file => readAllFiles(file, error));
}

function readAllFiles(file) {
    readFile(join(inbox, file), "utf8", (error, data) => writeContent(file, data, error));
}

function writeContent(file, data, error) {
    if (error) return console.log("Error: File error");
    writeFile(join(outbox, file), reverseText(data), error => finalResponse(error, file));
}

function finalResponse(error, file){
    if (error) return console.log("Error: File could not be saved!");
    console.log(`File was successfully saved!`);
}

 
async function main () {
  let readDir = await readdir(inbox,(error, files) => readContent(error, files));
} 

main().catch(console.error);

