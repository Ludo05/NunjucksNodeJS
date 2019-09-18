const axios = require('axios');

exports.nameParam = (req,res) => {
    const data = {
        firstName: req.params.name
    };
    res.render('index.html', data);
};


exports.userInput = (req,res) => {
    res.render('userInput.html');

};

exports.fetchCharacter = (req,res) => {
    const charactersArr = [];
    axios.get('https://rickandmortyapi.com/api/character/')
        .then( data => data.data.results)
        .then( characters => characters.map( character => {
            const characterObj = {
               name: character.name,
               image: character.image
            };
            charactersArr.push(characterObj)
        }))
        .then( () => {
            //Data must be a object.
            const data = {
                characters: charactersArr
            };
            console.log(data)
            res.render('getCharacters.html', data)
        });
}
