const { validation } = require('../util/index');


exports.signIn = (req,res) => {
    const {username, password} = req.body;
    const data ={
        username: username,
        password: password
    };
     const { errors, valid } = validation(username,password);
    if(!valid) {
        console.log(errors);
        res.status(300).json(errors);
    } else {
        res.render('confirmation.njk', data);
    }
};

