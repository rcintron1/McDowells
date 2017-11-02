var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var PORT = 3000;
app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});