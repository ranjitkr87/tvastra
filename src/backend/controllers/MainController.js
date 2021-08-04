const db = require('../databases/sqlite');

function signup(req, res){
    res.render("signup");
}

function user_profile(req,res){
    db.collection('users').findOne({email: req.session.email} , function(err , result){
        if(err)
        {
            console.log(err);
            res.redirect("/")
        }
        else{
            res.render("signup" , {result : result, name : req.session.name});
        }
    });
}

module.exports = { 
    signup: signup,
    user_profile: user_profile
 };