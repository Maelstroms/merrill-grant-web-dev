module.exports = function() {
    var api = {
        createWebsite: createWebsite,
        findWebsitesForUser: findWebsitesForUser,
        findWebsiteById: findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite
    };
    return api;
};