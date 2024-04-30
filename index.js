const app = require("express");
const http = require("http");
console.log("hello")
const server = http.createServer((req,res)=> {
    console.log("server created");
    res.end("Hello World")
})

server.listen("3000",()=>{
    console.log("server listening on port 3000");
})