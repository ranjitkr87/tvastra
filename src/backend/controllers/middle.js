const redirect = (req, res, next) =>{
    if(req.session.user_Id) {
        res.redirect('/');
    }
    else{
        next();
        }
};

module.exports = { redirect: redirect}