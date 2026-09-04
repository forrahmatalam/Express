let http = require('http');

let server =http.createServer((req,res)=>{

    if(req.url=="/users"){

    res.end("Main users me hu"); //ye res deta hai ki server ne response de diya hai

    }

    if(req.url=="/products"){

    res.end("main products me hu");

    };



     if(req.url=="/carts"){

    res.end("main carts me hu");

    };
});





server.listen(3000,()=>{

    console.log("Server is running on port 3000"); 

});