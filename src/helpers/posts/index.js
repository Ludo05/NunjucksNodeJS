
exports.postForm = (req,res) => {
    const data ={
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };
    res.render('userInput.html', data);
};
