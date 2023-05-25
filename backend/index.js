const express=require("express")
const app=express();
const port=5000;
const mongoB=require('./db');
const router = require("./routes/CreateUser");


mongoB();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello world");
})
app.use(require("./routes/CreateUser"));
app.use(require("./routes/DisplayData"));


 app.listen(port,()=>{ 
    console.log(`example app alistening on port ${port}`)
 })