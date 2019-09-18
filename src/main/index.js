const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//PATH TO TEMPLATES.
const PATH_TO_TEMPLATES = '../../public';
nunjucks.configure(PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app,
});

app.get('/name/:name', (req, res) => {
    const data = {
        firstName: req.params.name
    };
    res.render('index.html', data);
});

app.get('/userInput', (req, res) => {
    res.render('userInput.html');
});

app.post('/userInput', (req, res) => {
    const data ={
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };
    res.render('userInput.html', data);
});

app.listen(8080,() => {
    console.log('Its running')
});
