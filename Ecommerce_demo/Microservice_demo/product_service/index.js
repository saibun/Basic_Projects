const express = require("express");
const app = express();
const port = 3002
app.get('/products/porductList',(req,res)=>{
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

app.post('/products/newProduct',(req,res)=>{
    res.send("new product create");
})

app.listen(port,()=>{
    console.log("Product_service working on port",port)
})