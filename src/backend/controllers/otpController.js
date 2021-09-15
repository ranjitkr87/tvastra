const dbConn = require('../databases/sqlite.js')
const User = dbConn.Users;

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "b7d1fa31",
  apiSecret: "6iedGDpMOaCqE2ZE"
})

const otpRequest=async(req,res,next)=>{
    const user=await User.findOne({where:{number:req.body.number}});
    if (user){
        req.session.name=user.name;
        req.session.email=user.email;
        var mobNumber="91"+req.body.number;
        vonage.verify.request({number:mobNumber,brand:'Vonage',code_length: '4'},(err,result)=>{
            if (err) {
                console.log(err);
                console.log("Type 2 err");
                res.redirect("/login");
            }
            else{
                console.log(result);
                req.session.request_id=result.request_id;
                req.session.number=mobNumber;
                next();
            }
        })
    }
    else{
        console.log("Type 3 err");
        res.redirect("/login");
    }
}

function otpValidation(req,res,next){
    var code=req.body.code;
    vonage.verify.check({
        request_id: req.session.request_id,
        code: code
    },(err,result)=>{
        if(err){
            console.log(err);
            res.redirect("/login");
        }
        else{
            if(result.status == 0){
                console.log("otp verified")
                next();
            }
            else{
                req.session.destroy();
                res.redirect("/login")
            }
        }
    })

}

module.exports={
    otpRequest:otpRequest,
    otpValidation: otpValidation
   }
   