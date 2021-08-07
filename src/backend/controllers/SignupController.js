const dbConn = require('../databases/sqlite.js')
const User = dbConn.Users;

function signup(req, res){
    const {name, email, password,number,gender, DOB, city, state, country} = req.body;
    if(!(name && email && password))
        return res.render("signup",{
            msg: "Please enter all the required details"
        });
        else{
            User.create({name, email, password,number,gender, DOB, city, state, country})
            .then((result)=>{
                if(result){
                    console.log(result)
                    req.session.email = result.email;
                    req.session.user_Id = result.id;
                    req.session.name = result.name

                    return res.redirect('/')
                }
            })
            .catch((error)=>{
                console.log (error);
                return res.render('aboutUs', {
                    user: "",
                    msg: "Error occurred"
                });
            });
        }
}

function login(req,res){
    const{email,password}=req.body;
    if(!(email || password)){
        return res.render("login",{
            err:"Please fill all fields"
        })
    }
    else{
        User.findOne({
            where: {
                email: email,
                password: password,
            },            
        })
        .then((user)=>{
            console.log("user found");
            req.session.name = user.name;
            req.session.user_Id = user.id;
            req.session.email = user.email;
            if(user){
                return res.redirect('/');
            }
        })
        .catch((err)=>{
            console.log('err');
            return res.redirect("/signin")
        });
    }
}

function logout(req,res){
    req.session.destroy();
    res.redirect("/login");
}

module.exports={
    signup: signup,
    login:login,
    logout:logout
};