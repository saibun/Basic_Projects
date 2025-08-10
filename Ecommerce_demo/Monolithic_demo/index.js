const express = require("express");
const app = express();
const port = 3000;

//user --
app.get('/userLogin',(req,res)=> {
    res.send("User Login done");
})

app.post('/userCreate',(req,res)=>{
    res.send("User created")
})

//Products--
app.get('/porductList',(req,res)=>{
    res.send([
        {
            "name":"M10",
            "price":10000
        },{
            "name":"realme",
            "price":21000
        }
    ])
})

app.post('/newProduct',(req,res)=>{
    res.send("new product create");
})

//order placed--
app.post('/ordered',(req,res)=>{
    res.send("Orderd placed")
})


app.listen(port,()=>{
    console.log("Monolith service on port",port);
})