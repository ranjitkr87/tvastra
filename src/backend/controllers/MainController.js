const db = require('../databases/sqlite');

function login(req, res){
    res.render("login", {session: req.session});
}

function signup(req, res){
    res.render("signup", {session: req.session});
}


module.exports = { 
    login:login,
    signup: signup,
 };