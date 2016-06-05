/**
 * Created by grantmerrill on 5/24/16.
 */

(function() {
    angular.module("WebAppMaker")
        .factory("PageService", PageService);



    function PageService($http){
        var api = {
            createPage : createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };
        return api;

        function createPage(websiteId, page){
            return $http.post();
        }

        function findPageByWebsiteId(websiteId){
            return $http.get();
        }
        function findPageById(pageId) {
            var url = "/api/page/" + id;
            return $http.get(url);
        }
        function updatePage(pageId, page){
            return $http.put();
        }
        function deletePage(pageId){
            return $http.delete();
        }
    }
})();