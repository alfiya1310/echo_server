const http = require('http');

const server = http.createServer((req, res) => {
    let result;

    if (req.url === "/add" && req.method === "POST") {
        req.on('data',(chunk)=>{
            let toString = chunk.toString();
            let num1 = 1;
            let num2 = parseInt(toString);
            result = num1 + num2;
            //console.log(result);
            res.end(result.toString());             
        })   
    }   
});

server.listen(8080,() => {
    console.log("Listening on 8080");
});