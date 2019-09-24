const {  validation} = require('../src/helpers/util/index')

describe('test validation',  () => {
    it('valid and no errors',  () => {
       expect(validation('test','user')).toEqual( {"errors": {}, "valid": true})
    });

    it('not valid and one error',  () => {
        expect(validation('test','usser')).toEqual( {"errors": { "creds": "Wrong credentials."
            }, "valid": false})
    });

    it('not valid and two errors',  () => {
        expect(validation('23','user')).toEqual( {"errors": { "creds": "Wrong credentials.",
                "longerCreds": "Please make creds longer."}, "valid": false})
    });
});
