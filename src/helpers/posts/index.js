const { validation } = require('../util/index');


exports.signIn = (req,res) => {
    const {userName, password} = req.body;
    const data ={
        userName: userName,
        password: password
    };
     const { errors, valid } = validation(userName,password);
    if(!valid) {
        console.log(errors);
        res.status(300).json(errors);
    } else {
        res.render('confirmation.njk', data);
    }
};

