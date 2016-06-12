module.exports = function (app, models) {
    var pageModel = models.pageModel;


    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var newPage = req.body;
        pageModel
            .createPage(websiteId,newPage)
            .then(
                function(page) {
                    res.json(page);
                },
                function(error) {
                    res.status(400).send("Username " + newUser.username + " is already in use");
                }
            );
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        pageModel
            .findAllPagesForWebsite(websiteId)
            .then(
                function (pages) {
                    res.json(pages);
                },
                function (error) {
                    res.status(404).send(error);
                }
            );
    }

    function findPageById(req, res) {
        var id = req.params.pageId;
        for (var i in websites) {
            if (websites[i]._id === id) {
                res.send(websites[i]);
                return;
            }
        }
        res.send({});
    }

    function updatePage(req, res) {
        var id = req.params.pageId;
        var newPage = req.body;
        websiteModel
            .updateWebsite(id, newPage)
            .then(
                function(page) {
                    res.json(page);
                },
                function(error) {
                    res.status(404).send("Unable to update user with ID: " + id);
                }
            );
    }

    function deletePage(req, res) {
        var id = req.params.pageId;
        for (var i in pages) {
            if (pages[i]._id === id) {
                pages.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.send(400);
    }

};