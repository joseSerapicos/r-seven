var config = require("./base-webpack.config.js");
config.init(__dirname, 'module', 'index');
config.addEntry('AppBundle', 'base', null);
module.exports = config.config;