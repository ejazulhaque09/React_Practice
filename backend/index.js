const express = require('express');
const User = require('./model/user')
const db = require('./config/db');
require('dotenv').config();
const app = express();

app.use(express.json());

app.get('/',async (req, res) => {
    try{
const user = await User.find();
    res.send({
        msg: "Success",
        data: user
    })
    }
    catch(err){
        res.status(400).json({
            success: false,
            msg:err.message
        })
    }
    
})

db();
app.listen(process.env.PORT, (err) => {
    console.log("Server Started", process.env.PORT)
})