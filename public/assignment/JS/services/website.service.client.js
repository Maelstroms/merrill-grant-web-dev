/**
 * Created by grantmerrill on 5/25/16.
 */
(function(){
    angular.module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService() {

        var api = {
            createWebsite : createWebsite,
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };
        return api;

        function findWebsiteById(websiteId) {
            for(var i in websites) {
                if(websites[i]._id === websiteId) {
                    return websites[i];
                }
            }
            return null;
        }

        function findWebsitesForUser(userId) {
            var result = [];
            for(var i in websites) {
                if(websites[i].developerId === userId) {
                    result.push(websites[i]);
                }
            }
            return result;
        }

        function createWebsite(userId, website){
            websites.push({"_id": website._id, "name": website.name,    "developerId": userId});
        }
        function updateWebsite(websiteId, website){
            for (var i in websites) {
                if (websites[i]._id === websiteId) {
                    websites[i].name = website.name;
                    return true;
                }
            }
            return false;
        }
        function deleteWebsite(websiteId){
            websites.splice(websiteId);
        }
    }
})();