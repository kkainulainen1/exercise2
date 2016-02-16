var fs = require("fs");  // allows us to interact with file system
var colors = require("colors");

/*
function readDir(){
	var files = fs.readdirSync(__dirname);
	console.log(files);
}
*/

exports.readDir = function () {
	var files = fs.readdirSync('C:\\');
	console.log(colors.red(files));
}