const nunjucks = require("nunjucks");
const {shorten, advancedShorten} = require('../filters/filters')

exports.nunjucksSetup = (app) => {
    //PATH TO TEMPLATES.
    //You can add multiple paths by using an array.
    const PATH_TO_TEMPLATES = '../../public/views';
    const GOVUK = 'public/components/mac.njk';
    const env = nunjucks.configure([PATH_TO_TEMPLATES,GOVUK], {
        autoescape: true,
        express: app,
    });
    //Custom filters.
    shorten(env);
    advancedShorten(env);

};
