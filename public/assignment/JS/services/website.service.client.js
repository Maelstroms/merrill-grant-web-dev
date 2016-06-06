
(function(){
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
            return $http.get(url);
        }

        function createWebsite(userId, website){
            return $http.post("/api/user/"+userId +"/website", website);
        }
        function updateWebsite(websiteId, website){
            var url = "/api/website/" + websiteId;
            return $http.put(url,website);
        }
        function deleteWebsite(websiteId){
            var url = "/api/website/" + websiteId;
            return $http.delete(url);
        }
    }
})();