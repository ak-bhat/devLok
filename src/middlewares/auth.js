const adminAuth = (req,res, next)=>{
    const token = 'xyz'
    const authToken = token === 'xyz'
    

    if (!authToken) {
        res.status(401).send("Unauthorized")
    } else {
        next()
    }
}


const userAuth = (req,res, next)=>{
    const token = 'xyz'
    const authToken = token === 'xyz'
    

    if (!authToken) {
        res.status(401).send("Unauthorized")
    } else {
        next()
    }
}


module.exports = {
    adminAuth,
    userAuth
}