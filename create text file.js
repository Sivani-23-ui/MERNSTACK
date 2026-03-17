const fs = require('fs');

let content = "HTML, CSS, Javascript, Typescript, MongoDB, Express.js, React.js, Node.js";

fs.writeFile('src.txt', content, (err)=>{
    if(err) throw err;

    console.log("File created successfully");
});