const express = require('express');
const connectDB = require('./config/db.js');
require('dotenv').config();

const app = express();

connectDB();


const PORT = process.env.PORT || 3000

app.use("/", (req, res) => {
    res.send("Api is working well")
})

app.listen(PORT, () => {
    console.log("server is listerning port :", PORT);
})
