var jwt= require('jsonwebtoken')
const JWT_SECRET = 'Ipekisgoodg$irl'


const fetchuser=(req,res,next)=>{

    //  Get iuser from jwt and add it to req object
try {
    const token =req.header('auth-token');
    if(!token){
        res.status(401).send({error:'Please authenticate using a valid token'})
    }
    const data =jwt.verify(token,JWT_SECRET )
    req.user= data.user;
    next()
    
} catch (error) {
   res.status(401).send({error:'Please authenticate using a valid token'})
 
}
    
}

module.exports=fetchuser;