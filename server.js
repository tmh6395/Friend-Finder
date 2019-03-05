let express = require("express");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The following two lines of code will enable our server.js to access both the api routes
	// and html routes, so to use the application one only needs to start server.js
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// This will start the server and begin listening for any requests
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
  });
  