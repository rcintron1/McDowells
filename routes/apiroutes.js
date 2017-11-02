var waitingData = require("../data/waiting");
var presentData = require("../data/present");

module.exports = function (app) {
    app.post("/api/new", function (req, res) {
        var customer = req.body;
        console.log(customer);
        waitingData.push(customer);
        res.end("Added " + customer.name);
    });

    app.get("/api/present", function (req, res) {
        //res.sendFile(path.join(__dirname, "home.html"));
        
        res.json(presentData);
    });
    app.get("/api/waiting", function (req, res) {
        //res.sendFile(path.join(__dirname, "home.html"));
        
        res.json(waitingData);
    });
};