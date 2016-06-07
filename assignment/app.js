module.exports = function(app) {

    var model = require("./models/model.js");

    require("./services/user.service.server.js")(app, model);
    require("./services/website.service.server.js")(app, model);
    require("./services/page.service.server.js")(app, model);
    require("./services/widget.service.server.js")(app, model);
    

    app.get("/users/:id", function(req, res){
        var id = req.params.id;
        for(var i in users) {
            if(users[i]._id === id) {
                res.send(users[i]);
                return;
            }
        }
        res.send({});
    });
};