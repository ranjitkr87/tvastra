const db = require('../databases/sqlite');

function login(req, res){
    res.render("login", {session: req.session});
}

function signup(req, res){
    res.render("signup", {session: req.session});
}
function OTP(req, res){
    res.render("OTP",{session: req.session});
}
function index(req, res){
    res.render("index", {name : req.session});
}



module.exports = { 
    login:login,
    signup: signup,
    OTP:OTP,
    index:index
 };