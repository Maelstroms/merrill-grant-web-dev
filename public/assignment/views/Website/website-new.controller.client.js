
(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.route = $routeParams;
        vm.createWebsite = function createWebsite(websiteName){
            var websiter = {"name":websiteName, "developerId":vm.route.uid};
            WebsiteService
                .createWebsite(vm.route.uid, websiter)
                .then(function(response){
                    var website = response.data;
                    if(website.developerId){
                        $location.url("user/"+ vm.route.uid + "/website");
                    }
                    else {
                        vm.error = "Website failed to create";
                    }
                });

        }

    }
})();