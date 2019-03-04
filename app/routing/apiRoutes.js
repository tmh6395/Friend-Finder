
let friendData = require("../data/friends");


module.exports = function (app) {

	// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	app.get('/api/friends', function (req, res) {
		// console.log("req: " + req);
		// console.log("res: " + res);
		// console.log("friendData: " + friendData);
		res.json(friendData);
	});



	// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
	// use req.body?

	app.post('/api/friends', function (req, res){
		
		console.log("testgrounds");
		friendData.push(req.body);

		res.json(true);
	});



};