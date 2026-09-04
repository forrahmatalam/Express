const express=require('express');


const app=express();

app.put('/',(req,res)=>{
    res.send('change hua kya');
})


let port =3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})