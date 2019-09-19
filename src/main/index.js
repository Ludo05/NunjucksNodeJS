const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require('body-parser');

const { nameParam, userInput, getCharacters, getCharacter, confirmation, macro } = require('../helpers/getters/index');
const { postForm, signIn } = require('../helpers/posts/index');

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
app.get('/characters', getCharacters);
app.get('/character/:id', getCharacter);
app.get('/signIn', confirmation);
app.get('/macro', macro);
//
// //POSTS
app.post('/userInput', postForm);
app.post('/confirmation', signIn);

app.listen(8080,() => {
    console.log('Its running')
});
