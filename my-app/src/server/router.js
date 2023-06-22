const express = require('express');
const router = express.Router();
const user = require('./db/model/user');
const logger = require('./logging/logger')

//need this to parse the request body. Without the body will be undefined. 
router.use(express.urlencoded({extended:true}));
router.use(express.json())

//Add headers all URL endpoints
router.use('/', (req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.contentType('application/json');
    
    next();
})

router.post('/test', function(req,res){
    user.findOne({"login_name":req.body.username, "password": req.body.password}).then( (data) =>{
      res.send(data);
    }).catch((err)=>{
        logger.error(err);
        res.send(err);
    })

});



module.exports = router;