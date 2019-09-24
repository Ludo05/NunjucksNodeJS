const express = require("express");
const bodyParser = require('body-parser');

const { nameParam, getCharacters, getCharacter, confirmation, macro, base, ifFunc} = require('../helpers/getters/index');
const {  signIn } = require('../helpers/posts/index');
const { nunjucksSetup } = require('./nunjucks');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
nunjucksSetup(app);



//GETS
app.get('/name/:name', nameParam);
app.get('/characters', getCharacters);
app.get('/character/:id', getCharacter);
app.get('/signIn', confirmation);
app.get('/macro', macro);
app.get('/base', base);
app.get('/iffunc', ifFunc);

// //POSTS
app.post('/confirmation', signIn);

app.listen(8080,() => {
    console.log('Its running')
});
