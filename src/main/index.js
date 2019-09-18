const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require('body-parser');

const { nameParam, userInput, fetchCharacter } = require('../helpers/getters/index');
const { postForm } = require('../helpers/posts/index');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//PATH TO TEMPLATES.
const PATH_TO_TEMPLATES = '../../public';
nunjucks.configure(PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app,
});

//GETS
app.get('/name/:name', nameParam);
app.get('/userInput', userInput);
app.get('/fetchCharacter', fetchCharacter);
//
// //POSTS
app.post('/userInput', postForm);

app.listen(8080,() => {
    console.log('Its running')
});
