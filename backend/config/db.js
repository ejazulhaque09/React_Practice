const mongoose = require('mongoose');
require('dotenv').config();
function db(){
mongoose.connect(process.env.MONGODB_URI)
.then((res) => {
    console.log("DB Connected")
})
.catch((err) => {
    console.log("Error in connecting DB")
})
}

module.exports = db;