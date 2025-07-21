const express = require('express')

const app = express()

app.use("/test", (req, res)=>{
    res.send("Test page")
})

app.use("/profile",(req, res)=>{
    res.send("Welcome to profile page")
})

app.use((req, res)=>{
    res.send("Hello from the Server")    
})

app.listen(7777,()=>{
    console.log("Server running at 7777")
})