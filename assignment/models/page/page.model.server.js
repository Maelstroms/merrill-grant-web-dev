module.exports = function () {
    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server")();
    var Page = mongoose.model("Page", PageSchema);

    var api = {
        createPage: createPage,
        findPageByWebsiteId: findAllPagesForWebsite,
        findPageById: findPageById,
        updatePage: updatePage,
        deletePage: deletePage
    };
    return api;

    function createPage(websiteId, page){}
    function findAllPagesForWebsite(websiteId){}
    function findPageById(pageId){}
    function updatePage(pageId, page){}
    function deletePage(pageId){}
};