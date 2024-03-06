const express = require("express")
const mongoose = require("mongoose")
const User = require("./model/Users.js")
const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/calendar"

//mongoose setup
mongoose.connect(MONGO_URI).then(() => {
    console.log("succesfully connected to MongoDB!")
    const Kevin = new User({firstName: "John", lastName: "Doe", email: "jdoe@example.com", password: "password"})
    Kevin.save().catch((error)=>{
        
    })
})

//express setup
app.use(express.static("dist"))

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
