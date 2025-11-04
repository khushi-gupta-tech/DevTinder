const express = require('express');
const app = express();

const {adminAuth,userAuth} = require("./middlewares/auth")

app.use("/admin",adminAuth);

app.get("/user",userAuth,(req,res)=>{
    res.send("User Data sent")
})

app.get("/admin/getAllData",(req,res)=>{

    res.send("All Data send")
})

app.listen(3000,()=>{
    console.log("Server is successfully listening")
});
