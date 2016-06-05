/**
 * Created by grantmerrill on 5/25/16.
 */
(function($http){
    angular.module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http) {

        var api = {
            createWebsite : createWebsite,
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };
        return api;

        function findWebsiteById(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.get(url);
        }

        function findWebsitesForUser(userId) {
            var url = "/api/user/" + userId + "/website/";
            console.log(url);
            return $http.get(url);
        }

        function createWebsite(userId, website){
            return $http.post("/api/website", website);
        }
        function updateWebsite(websiteId, website){
            return $http.put();
        }
        function deleteWebsite(websiteId){
            return $http.delete();
        }
    }
})();