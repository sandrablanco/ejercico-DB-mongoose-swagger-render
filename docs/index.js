const basicinfo = require("./basicinfo.js");
const components = require("./components.js");
const paths = require("./paths.js");
module.exports = { 
    ...basicinfo,
    ...components,
    ...paths,
};