

const mockDb = [
    {username: 'lewis', password: 'williams'},
    {username: 'test', password: 'user'}
];

exports.validation = (username, password) => {
    const errors = {};
    if (username.length < 3 || password.length < 3) {
        errors.longerCreds = 'Please make creds longer.'
    }
    const user = mockDb.filter( obj => obj.username === username && obj.password === password);
    if(Object.keys(user).length === 0){
        errors.invalid = 'Wrong credentials.'
    }
    return {
        errors,
        valid: Object.values(errors).length === 0

    };
};


