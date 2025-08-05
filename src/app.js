const express = require('express')

const app = express()

const {adminAuth, userAuth} = require('./middlewares/auth')

app.use("/admin",adminAuth)

app.get("/admin/123", (req, res, next)=>{
    throw new Error("Random Error")
    res.send("Admin page")
})

app.use("/", (err,req, res, next)=>{
    if(err){
        res.status(500).send("Random Error")
    }
    res.send("Admin page")
})



app.listen(7777,()=>{
    console.log("Server running at 7777")
})