const express = require('express');
const router = express.Router();
const user = require('./db/model/user');
const logger = require('./logging/logger')
const jwt = require('jsonwebtoken')


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

router.post('/login', function(req,res){


        user.findOne({"login_name":req.body.username, "password": req.body.password}).then( (data) =>{
            if(data){
                const payload =  {
                    user_l:{
                        login_name:user.login_name
                    }
                }
                const token = jwt.sign(payload,'random');
                //res.status(200).cookie("token", token, {httpOnly:true, path:'/',domain: 'localhost'}).json({payload});
                //res.cookie("token", token, {httpOnly:true}).send({login_name});
                res.json({token})
    
            } 
          }).catch((err)=>{
              logger.error(err);
          })
    } 

    
);

router.post('/refresh',(req, res)=>{
    console.log("Potato");
});

module.exports = router;