/**
 * Created by grantmerrill on 5/25/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("WebsiteEditController", WebsiteEditController)
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteListController($routingParams) {
        var vm = this;
        var id = $routeParams["id"];

        function init() {
            for(var i in users) {
                if(users[i]._id === id) {
                    vm.user = angular.copy(users[i]);
                    index = i;
                }
            }
        }
        init();
    }
    
    function WebsiteEditController() {
        
    }

    function WebsiteNewController() {

    }

})();