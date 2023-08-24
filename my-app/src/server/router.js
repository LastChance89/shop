const express = require('express');
const router = express.Router();
const user = require('./db/model/user');
const logger = require('./logging/logger')
const jwt = require('jsonwebtoken')
const config = require('./config.json')


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


router.post('/login', (req,res) =>{

        user.findOne({"login_name":req.body.username, "password": req.body.password}).then( (data) =>{
            if(data){
                const token = createToken(data.login_name);
                res.json({token})
            } 
          }).catch((err)=>{
              logger.error(err);
          })
    } 

    
);

router.post('/check', (req,res)=>{
    var cookie = req.body.cookie;
    var payload = null;
    jwt.verify(cookie, config.JWT_PASS, (error, decode)=>{
        if(error){
            payload ={
                'error':error
            };
            
        }
        else{
                payload ={
                'token':createToken()
            };
            

        }
    })
    res.json(payload);

});

const createToken = (name) =>{
    const payload =  {
        user_l:{
            login_name:name
        }
    }
    const token = jwt.sign(payload, config.JWT_PASS, {expiresIn: config.JWT_TIMEOUT});
    return token; 
}


module.exports = router;