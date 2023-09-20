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
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Headers','Access-Control-Allow-Headers, withCredentials,Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials','true');
    res.contentType('application/json'); 
    next();
})


router.post('/login', (req,res) =>{

        user.findOne({"login_name":'test', "password": 'test'}).then( (data) =>{
            if(data){
                const token = createToken(data.login_name, false);
                const refreshToken = createToken(data.login_name, true);
                res.cookie('jwt',refreshToken,{httpOnly:true, sameStie: 'lax'});
                res.json({token});
            } 
          }).catch((err)=>{
              logger.error(err);
          })
    } 

    
);

router.post('/check', (req,res)=>{


});



router.post('/refresh', (req,res)=>{
    const rtoken = req.headers.cookie;
    var payload = null;
    jwt.verify(rtoken, config.JWT_PASS, (error, decode)=>{
        if(error){
            payload ={
                'error':error
            };
            
        }
        else{
                payload ={
                'token':createToken(decode.user_l.login_name, false)
            };
            

        }
    })
    res.json(payload);

});

router.post('/test', (req,res)=>{
    payload ={
        'test':'test'
    };
    res.json()
})



const createToken = (name, refresh) =>{
    const payload =  {
        user_l:{
            login_name:name
        }
    }
    var token = null;
    if(refresh){
        token = jwt.sign(payload, config.JWT_PASS, {expiresIn: config.MAX_AGE});
    }
    else{
        
        token = jwt.sign(payload, config.JWT_PASS, {expiresIn: config.JWT_TIMEOUT});
    }
    return token; 
}


module.exports = router;