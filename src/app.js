const express = require('express')

const app = express()

const {adminAuth, userAuth} = require('./middlewares/auth')

app.use("/admin",adminAuth)

app.get("/admin/123", (req, res, next)=>{
    console.log("Response");
    res.send("Admin page")
})

app.get("/user/login", (req, res, next)=>{
    console.log("Response");
    res.send("User login")
})

app.get("/user/123", userAuth, (req, res, next)=>{
    console.log("Response");
    res.send("User page")
})

app.use("/test", (req, res, next)=>{
    console.log("Response");
    next();
    // res.send("1st Response")
})

app.use("/test", (req, res, next)=>{
    res.send('2nd Response')
    console.log("2nd response");
})


// app.get("/user/:userId/:name", (req, res)=>{
//     console.log(req.params)
//     res.send({
//         name:"Ananthu",
//         age:25
//     })
// })

// app.post("/user", (req, res)=>{
//     res.send('User data uploaded successfully!')
// })

// app.delete("/user", (req, res)=>{
//     res.send('User data deleted successfully!')
// })

// app.use("/test", (req, res)=>{
//     res.send("Test page")
// })

// app.use("/profile",(req, res)=>{
//     res.send("Welcome to profile page")
// })

// app.use((req, res)=>{
//     res.send("Hello from the Server")    
// })

// app.use("/",(req, res)=>{
//     res.send("Hello from the Ananthu")    
// })


app.listen(7777,()=>{
    console.log("Server running at 7777")
})