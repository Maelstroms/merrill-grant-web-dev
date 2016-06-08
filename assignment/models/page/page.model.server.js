module.exports = function () {

    var api = {
        createPage: createPage,
        findPageByWebsiteId: findPageByWebsiteId,
        findPageById: findPageById,
        updatePage: updatePage,
        deletePage: deletePage
    };
    return api;
};