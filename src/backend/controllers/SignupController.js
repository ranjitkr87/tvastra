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

module.exports={
    signup: signup
};