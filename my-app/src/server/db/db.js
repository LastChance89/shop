
const mongoose = require("mongoose")


class Database {
    constructor(){
        mongoose.connect("mongodb://127.0.0.1:27017/shop").then(()=>{
            console.log("Connection Successful")
        }).catch((err)=>{
            console.error("Cannot connect to database")
            console.error(err);
        })
    }
}



module.exports = new Database();