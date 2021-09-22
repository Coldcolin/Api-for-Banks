const express = require("express");
const port = 2022;
const mongoose = require("mongoose");
const router = require("./routes/bankRoute");



const app = express();
app.use(express.json());
const url = "mongodb://localhost:27017/set04b";

mongoose.connect(url, {useUnifiedTopology:true, useNewUrlParser: true})
.then(() =>{
    console.log("successfully connect to the database.")
})


app.get("/", (req, res) => {
    res.status(200).json({message: "Bank API"})
})
app.use("/api", router);

app.listen(port, ()=> {
    console.log(`Server is now running on port: ${port}`)
})