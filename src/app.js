const express = require('express')

const app = express()

app.use("/test//hi", (req, res)=>{
    res.send("Test page 2")
})

app.get("/user/:userId/:name", (req, res)=>{
    console.log(req.params)
    res.send({
        name:"Ananthu",
        age:25
    })
})

app.post("/user", (req, res)=>{
    res.send('User data uploaded successfully!')
})

app.delete("/user", (req, res)=>{
    res.send('User data deleted successfully!')
})

app.use("/test", (req, res)=>{
    res.send("Test page")
})

app.use("/profile",(req, res)=>{
    res.send("Welcome to profile page")
})

// app.use((req, res)=>{
//     res.send("Hello from the Server")    
// })

// app.use("/",(req, res)=>{
//     res.send("Hello from the Ananthu")    
// })


app.listen(7777,()=>{
    console.log("Server running at 7777")
})