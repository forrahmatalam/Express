let http = require('http');

let server =http.createServer((req,res)=>{
    console.log("hey there....");
    res.end("ok main mila kya bhai"); //ye res deta hai ki server ne response de diya hai
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000"); 
});