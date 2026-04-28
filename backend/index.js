const express = require('express');
const { log } = require('node:console');
const app = express();

app.use(express.json()); // The Translator is active!
const cors = require('cors'); // 1. Import the cors package
app.use(cors());

// Grab Render's port, OR use 3001 for local testing
const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log("server started");   
})

app.post("/login",(req,res)=>{
    console.log(req.body);
  if(req.body.uName == "mani" && req.body.password == "mani@123" ){
res.send(true);
  }else{
    res.send(false)
  }
    
})