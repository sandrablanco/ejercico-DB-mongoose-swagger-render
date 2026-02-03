const basicinfo = require("./basicinfo");
const components = require("./components");
const paths = require("./paths");
module.exports = { 
    ...basicinfo,
    ...components,
    ...paths
};
