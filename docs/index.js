const basicinfo = require("./basicinfo.js");
const components = require("./components.js");
const task = require("./task.js");
//const paths = require("./paths.js");
module.exports = { 
    ...basicinfo,
    ...components,
    ...task,
    ...paths,
};