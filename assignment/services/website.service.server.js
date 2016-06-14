module.exports = function (app, models) {
    var websiteModel = models.websiteModel;

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);

    function createWebsite(req, res) {
        var userId = req.params.userId;
        var newWebsite = req.body;
        websiteModel
            .createWebsite(userId,newWebsite)
            .then(
                function(website) {
                    res.json(website);
                },
                function(error) {
                    res.status(400).send("Username " + newUser.username + " is already in use");
                }
            );
    }

    function findAllWebsitesForUser(req, res) {
        var userId = req.params.userId;

        websiteModel
            .findAllWebsitesForUser(userId)
            .then(
                function (websites) {
                    res.json(websites);
                },
                function (error) {
                    res.status(404).send(error);
                }
            );
    }

    function findWebsiteById(req, res) {
        var id = req.params.websiteId;
        for (var i in websites) {
            if (websites[i]._id === id) {
                res.send(websites[i]);
                return;
            }
        }
        res.send({});
    }

    function updateWebsite(req, res) {
        var id = req.params.websiteId;
        var newWebsite = req.body;
        websiteModel
            .updateWebsite(id, newWebsite)
            .then(
                function(website) {
                    res.json(website);
                },
                function(error) {
                    res.status(404).send("Unable to update user with ID: " + id);
                }
            );
    }

    function deleteWebsite(req, res) {
        var id = req.params.websiteId;
        for (var i in websites) {
            if (websites[i]._id === id) {
                websites.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.send(400);
    }


};