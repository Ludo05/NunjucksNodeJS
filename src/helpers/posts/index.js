const { validation } = require('../util/index');

exports.postForm = (req,res) => {
    const data ={
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };
    res.render('userInput.html', data);
};

exports.postForm = (req,res) => {
    const data ={
        firstName: req.body.userName,
        lastName: req.body.password
    };
    res.render('confirmation.html', data);
};

//TODO Add post from one page to another username and password
exports.signIn = (req,res) => {
    const {userName, password} = req.body;
    const data ={
        userName: userName,
        password: password
    };
     const { errors, valid } = validation(userName,password);
    if(!valid) {
        console.log(errors);
        res.status(300).json(errors.default);
    } else {
        res.render('confirmation.html', data);
    }
};

