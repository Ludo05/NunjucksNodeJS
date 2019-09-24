const express = require("express");
const bodyParser = require('body-parser');

const { nameParam, userInput, getCharacters, getCharacter, confirmation, macro, tryExtends, base} = require('../helpers/getters/index');
const { postForm, signIn } = require('../helpers/posts/index');
const { nunjucksSetup } = require('./nunjucks');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
nunjucksSetup(app);



//GETS
app.get('/name/:name', nameParam);
app.get('/userInput', userInput);
app.get('/characters', getCharacters);
app.get('/character/:id', getCharacter);
app.get('/signIn', confirmation);
app.get('/macro', macro);
app.get('/extends', tryExtends);
app.get('/base', base);

// //POSTS
app.post('/confirmation', signIn);

app.listen(8080,() => {
    console.log('Its running')
});
