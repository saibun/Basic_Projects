const express = require("express")
const app = express();

app.get('/users/userLogin',(req,res)=> {
    res.send("Microservice User Login done");
})

app.post('/users/userCreate',(req,res)=>{
    res.send("Microservice User created")
})

app.listen(3001,()=>{
    console.log("user_service port num",3001);
})