const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://akbhat:mongobhat@cluster0.pj6x3bi.mongodb.net/devlok');
} 

module.exports = connectDB
