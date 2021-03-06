module.exports = function () {
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var Website = mongoose.model("Website", WebsiteSchema);

    var api = {
        createWebsite: createWebsiteForUser,
        findAllWebsitesForUser: findAllWebsitesForUser,
        findWebsiteById: findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite
    };
    return api;

    function createWebsiteForUser(userId, website) {
        websitedeveloperId = userId;
        return Website.create(website);

    }

    function findAllWebsitesForUser(userId) {
        return Website.find({developerId: userId});
    }

    function findWebsiteById(websiteId) {
        return Website.findById(websiteId);
    }

    function updateWebsite(websiteId, website) {
        return Website.update(
            {_id: websiteId},
            {
                $set: {
                    name: website.name,
                    description: website.description
                }
            }
        );
    }

    function deleteWebsite(websiteId) {
    }

};