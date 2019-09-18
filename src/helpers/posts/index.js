
exports.postForm = (req,res) => {
    const data ={
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };
    res.render('userInput.html', data);
};

//TODO Add post from one page to another username and password
exports.postForm = (req,res) => {
    const data ={
        userName: req.body.userName,
        password: req.body.password
    };
    res.render('userInput.html', data);
};

