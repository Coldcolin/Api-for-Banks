const express = require("express");
const port = 2022
const mongoose = require("mongoose")
const router = require("./routes/bankRoute")

const app = express()
app.use(express.json())
const url = "mongodb://localhost:27017/set04b"

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>{
    console.log("successfully connected to the database")
})

app.get("/", (req, res)=>{
    res.send("testing route")
})
app.use("/api", router)

app.listen(process.env.PORT || port, ()=>{
    console.log(`server now running in port: ${port}`)
})