let path = require("path");

module.exports = function (app) {

	// This reroutes the client to the website's survey page
	app.get("/survey", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// Anything else will reroute to the website's home page
	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

};