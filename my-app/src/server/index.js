var express = require('express');
var app = express();
var router = require('./router.js');
const cors = require('cors');
const datbase = require("./db/db.js")


app.use('/router',router);
app.use(cors({
        credentials: true,
        origin: "http://localhost:3000",
    }));
app.get('*', (req,res)=>{
    console.log("Invalid URL");
    res.send('invalid url');
});

app.listen(3001);