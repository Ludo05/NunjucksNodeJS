const axios = require('axios');

exports.nameParam = (req,res) => {
    const data = {
        firstName: req.params.name
    };
    res.render('index.html', data);
};

exports.tryExtends = (req,res) => {
    res.render('blockForm.njk');
};

exports.base = (req,res) => {
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
                characters: charactersArr,
                Title: 'Characters From Title'
            };
            res.render('useBase.njk', data)
        });
};


exports.userInput = (req,res) => {
    res.render('userInput.html');

};

exports.macro = (req,res) => {
    const data = {
        colorName: 'black',
        colorValue: 'some colour',
        colorNotes: 'This is some news about the color'
    };
    res.render('mac.html', data)
}

exports.confirmation = (req,res) => {
    res.render('signIn.njk');

};

exports.getCharacters = (req,res) => {
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
            res.render('getCharacters.html', data)
        });
};





exports.getCharacter = (req,res) => {
    const charactersArr = [];
    axios.get(`https://rickandmortyapi.com/api/character/${req.params.id}`)
        .then( data => data.data)
        .then(  character => {
            const characterObj = {
                name: character.name,
                image: character.image
            };
            charactersArr.push(characterObj)
        })
        .then( () => {
            //Data must be a object.
            const data = {
                characters: charactersArr
            };
            res.render('getCharacters.html', data)
        });
};
