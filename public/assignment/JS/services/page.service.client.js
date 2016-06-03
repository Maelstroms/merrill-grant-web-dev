/**
 * Created by grantmerrill on 5/24/16.
 */

(function() {
    angular.module("WebAppMaker")
        .factory("PageService", PageService);



    function PageService(){
        var api = {
            createPage : createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };
        return api;

        function createPage(websiteId, page){
            pages.push({"_id": page.id, "name": page.name, "websiteId": websiteId});
        }

        function findPageByWebsiteId(websiteId){
            var result = [];
            for(var i in pages) {
                if(pages[i].websiteId === websiteId) {
                    result.push(pages[i]);
                }
            }
            return result;
        }
        function findPageById(pageId) {
            for (var i in pages) {
                if (pages[i]._id === pageId) {
                    return pages[i];
                }
            }
            return null;
        }
        function updatePage(pageId, page){
            for (var i in pages) {
                if (pages[i]._id === pageId) {
                    pages[i].name = page.name;
                    return true;
                }
            }
            return false;
        }
        function deletePage(pageId){
            pages.splice(pageId);
        }
    }
})();