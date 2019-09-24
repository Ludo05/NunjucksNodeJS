

const mockDb = [
    {username: 'lewis', password: 'williams'},
    {username: 'test', password: 'user'}
];

const validation = (username, password) => {
    const errors = {};
    if (username.length < 3 || password.length < 3) {
        errors.longerCreds = 'Please make creds longer.'
    }
    checkCreds(username,password,errors);
    return {
        errors,
        valid: Object.keys(errors).length === 0
    };
};

const checkCreds = (username,password,errors) => {
    const user = mockDb.filter( obj => obj.username === username && obj.password === password);
    if(Object.keys(user).length === 0) {
         errors.creds = 'Wrong credentials.'
    }
}


exports.ifStatement = () => {
    const number = Math.floor(Math.random() * 4);
    return number > 2;
};


exports.validation = validation;
exports.checkCreds = checkCreds;
exports.database = mockDb;

