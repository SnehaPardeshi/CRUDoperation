const express = require("express");
const app = express()
const port = 4000;

app.use(express.json())

// testing //
// 2 nd step:go to chrome and type localhost:4000/sneha //
app.get("/sneha",(req,res)=>{
res.send(`hello`);
});
app.listen(port,()=>{
    console.log(`app is listening on the port ${port}`);
});