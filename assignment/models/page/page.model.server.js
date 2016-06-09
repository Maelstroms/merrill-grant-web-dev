module.exports = function () {

    var api = {
        createPage: createPage,
        findPageByWebsiteId: findPageByWebsiteId,
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