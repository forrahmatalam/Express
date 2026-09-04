const express=require('express');



const app=express();

app.use(express.json()); //use middleware due to express text nhi padh pata expjson padhrta hai 

app.post('/create',(req,res)=>{
    console.log(req.body);
    res.send('Data received');
})



let port =3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})