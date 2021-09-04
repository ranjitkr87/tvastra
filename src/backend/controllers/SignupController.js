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
                    req.session.user={email,password};
                    req.session.name=name;
                    req.session.email=email;
                    req.session.gender=gender;
                    req.session.DOB=DOB;
                    req.session.number=number;
                    req.session.state=state;
                    req.session.city=city;
                    req.session.country=country;
                    
            req.flash("success", "Signup successfull, Please Login!");
            return res.redirect("/login");   

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

const login=async(req,res)=>{
    if(req.body.email && req.body.password){
        const user=await User.findOne({where:{email:req.body.email}});
        if (user){
            const checkPassword=await User.findOne({where:{password:req.body.password}});
            if(checkPassword){
                req.session.userId=user.id;
                req.user=user;
                req.session.error="";
                res.redirect("/");                
            }
            else{
                req.session.error="Incorrect email or password";
                res.redirect("/login");
            }
        }
        else{
            req.session.error = "Email Not Registered"
			res.redirect('/login');
        }
    }
}

function logout(req,res){
    req.session.destroy();
    res.redirect("/login");
    console.log("session destroyed");
}

module.exports={
    signup: signup,
    login:login,
    logout:logout
};