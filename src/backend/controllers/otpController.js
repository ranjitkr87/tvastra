const dbConn = require('../databases/sqlite.js')
const User = dbConn.Users;

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "7be14c9a",
  apiSecret: "f6snyDOdix6o486x"
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
    const user=User.findOne({where:{number:req.body.number}});
    var code=req.body.code;
    vonage.verify.check({request_id: req.session.request_id, code: code},(err,result)=>{
        if(err){
            console.log("Error type 4 ");
            console.log(err);
            res.redirect("/login");
        }
        else{
            if(result.status == 0){
                req.session.user=user;
                req.session.error="";
                next();
            }
            else{
                console.log("Error type 5 ");
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
   