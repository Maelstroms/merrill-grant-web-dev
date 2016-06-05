module.exports = function(app) {

    var websites = [
        {"_id": "123", "name": "Facebook", "developerId": "456"},
        {"_id": "234", "name": "Tweeter", "developerId": "456"},
        {"_id": "456", "name": "Gizmodo", "developerId": "456"},
        {"_id": "567", "name": "Tic Tac Toe", "developerId": "123"},
        {"_id": "678", "name": "Checkers", "developerId": "123"},
        {"_id": "789", "name": "Chess", "developerId": "234"}
    ];

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);

    function createWebsite(req, res) {
        websites.push({"_id": website._id, "name": website.name, "developerId": userId});
    }

    function findAllWebsitesForUser(req, res) {
        var userId = req.params.userId;
        var result = [{"_id": "123", "name": "Facebook", "developerId": "456"}];
        for (var w in websites) {
            if (websites[w].developerId === userId) {
                result.push(websites[w]);
            }
        }
        if (result) {
            res.send(result);
        }
        else{
            res.send(400);
        }
    }

    function findWebsiteById(req, res) {
        var id = req.params.websiteId;
        for(var i in websites) {
            if(websites[i]._id === id) {
                res.send(websites[i]);
                return;
            }
        }
        res.send({});
    }

    function updateWebsite(req, res) {
        for (var i in websites) {
            if (websites[i]._id === websiteId) {
                websites[i].name = website.name;
                return true;
            }
        }
        return false;
    }

    function deleteWebsite(req, res) {
        var id = req.params.websiteId;
        for(var i in websites) {
            if (websites[i]._id === id) {
                websites.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.send(400);
    }


};