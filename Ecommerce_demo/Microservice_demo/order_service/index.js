const express =require("express");
const app = express();
const port = 3003;


app.post('/orders/ordered',(req,res)=>{
    res.send("Microservice Order Placed")
})

app.listen(port,()=>{
    console.log("Order service working on port ",port);
})