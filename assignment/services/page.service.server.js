module.exports = function(app) {

    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456" },
        { "_id": "432", "name": "Post 2", "websiteId": "456" },
        { "_id": "543", "name": "Post 3", "websiteId": "456" }
    ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    function createPage(req, res){
        pages.push({"_id": page.id, "name": page.name, "websiteId": websiteId});
    }
    function findAllPagesForWebsite(req, res){
        var websiteId = req.params.websiteId;
        var result = [];
        for(var p in pages) {
            if(pages[p].websiteId === websiteId) {
                result.push(pages[p]);
            }
        }
        if (result) {
            res.send(result);
        }
        else{
            res.send(400);
        }
    }
    function findPageById(req, res){
        var id = req.params.pageId;
        for(var i in pages) {
            if(pages[i]._id === id) {
                res.send(pages[i]);
                return;
            }
        }
        res.send({});
    }
    function updatePage(req, res){
        for (var i in pages) {
            if (pages[i]._id === pageId) {
                pages[i].name = page.name;
                return true;
            }
        }
        return false;
    }
    function deletePage(req, res){
        var id = req.params.pageId;
        for(var i in pages) {
            if (pages[i]._id === id) {
                pages.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.send(400);
    }

};