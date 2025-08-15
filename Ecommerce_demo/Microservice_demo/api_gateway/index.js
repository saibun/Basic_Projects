const express = require("express");
const app = express();
const {createProxyMiddleware} = require("http-proxy-middleware");

app.use('/users',createProxyMiddleware({
    target:"http://localhost:3001",
    changeOrigin:true,
}))

app.use('/products',createProxyMiddleware({
    target:"http://localhost:3002",
    changeOrigin:true,
}))

app.use('/orders',createProxyMiddleware({
    target:"http://localhost:3003",
    changeOrigin:true
}))

let port = 3000;
app.listen(port,()=>{
    console.log("api gate way work on ",port);
})