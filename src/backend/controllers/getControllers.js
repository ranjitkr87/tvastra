const db = require('../databases/sqlite');

function index(req, res){
    res.render("index", {user:req.session.user});
}
function login(req, res){
    res.render("login", {user:req.session.user});
}
function phoneLogin(req, res){
    res.render("phoneLogin", {user:req.session.user});
}
function forgotPassword(req, res){
    res.render("forgotPassword", {user:req.session.user});
}
function otpForPasswordReset(req, res){
    res.render("otpForPasswordReset", {user:req.session.user});
}
function signup(req, res){
    res.render("signup", {user:req.session.user});
}
function OTP(req, res){
    res.render("OTP",{user:req.session.user});
}

function contactUs(req,res){return res.render('contact',{user:req.session.user})}

function aboutApollo(req,res){return res.render('aboutApollo',{user:req.session.user})}

function aboutUs(req,res){return res.render('aboutUs',{user:req.session.user})}

function appoinment(req,res){return res.render('appoinment',{user:req.session.user})}

function doctor(req,res){return res.render('doctor',{user:req.session.user})}

function doctor_profile(req,res){return res.render('doctor-profile',{user:req.session.user})}

function FAQ(req,res){return res.render('FAQ',{user:req.session.user})}

function hospital(req,res){return res.render('hospital',{user:req.session.user})}

function hospital(req,res){return res.render('hospital',{user:req.session.user})}

function newPassword(req,res){return res.render('newPassword',{user:req.session.user})}

function OTP(req,res){return res.render('OTP',{user:req.session.user})}

function query(req,res){return res.render('query',{user:req.session.user})}

function treatments(req,res){return res.render('treatments',{user:req.session.user})}

function tvastraPlus(req,res){return res.render('tvastraPlus',{user:req.session.user})}

module.exports = { 
    index:index,
    login:login,
    signup: signup,
    OTP:OTP,
    phoneLogin:phoneLogin,
    forgotPassword:forgotPassword,
    otpForPasswordReset:otpForPasswordReset,
    contactUs:contactUs,
    aboutApollo:aboutApollo,
    aboutUs:aboutUs,
    appoinment:appoinment,
    doctor:doctor,
    doctor_profile:doctor_profile,
    FAQ:FAQ,
    hospital:hospital,
    newPassword:newPassword,
    OTP:OTP,
    query:query,
    treatments:treatments,
    tvastraPlus:tvastraPlus
 };