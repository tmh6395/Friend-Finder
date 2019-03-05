let friendData = require("../data/friends");

module.exports = function (app) {

	// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	app.get('/api/friends', function (req, res) {
		// console.log("friendData: " + friendData[0].name);
		res.json(friendData);
	});

	// A POST routes /api/friends. This will post the JSON of user input to the designated route.
	app.post('/api/friends', function (req, res){
		friendData.push(req.body);

		res.json(true);
	});

};