// index.js

var fs = require("fs");

fs.readFile("package.json", "utf8", function(err, data) {
	if (err)
		return console.log(err);

	console.log("i am about to display the content of package.jason");
	console.log(data);

});