//Custom filters which takes a object and runs the function against that object
//Which also can take params.
exports.shorten = (env) => {
    //Custom filters for filtering text etc.
    env.addFilter('shorten', (str, count) => {
        return str.slice(0, count || 5);
    });
};

exports.advancedShorten = (env) => {
    env.addFilter('firstName', (string) => {
        return string.split(' ')[0];
    })
}
