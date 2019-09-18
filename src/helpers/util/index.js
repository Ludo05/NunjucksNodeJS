
exports.validation = (username, password) => {
    const errors =  {};
    if(username.length < 3 || password.length < 3){
        errors.default = 'Please make creds longer.'
    }
    return{
        errors,
        valid: Object.values(errors).length === 0

    }

};

