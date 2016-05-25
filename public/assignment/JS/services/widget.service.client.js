/**
 * Created by grantmerrill on 5/25/16.
 */

(function() {
    angular.module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456" },
        { "_id": "432", "name": "Post 2", "websiteId": "456" },
        { "_id": "543", "name": "Post 3", "websiteId": "456" }
    ];

    function WidgetService(){
        var api = {
            createWidget : createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };

        function createWidget(pageId, widget){}
        function findWidgetsByPageId(pageId){}
        function findWidgetById(widgetId){}
        function updateWidget(widgetId, widget){}
        function deleteWidget(widgetId){}
    }
})();