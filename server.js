let express = require("express");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "/app/public/survey.html"))
})

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
  });
  