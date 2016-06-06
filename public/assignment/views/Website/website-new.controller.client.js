
(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.route = $routeParams;
        vm.createWebsite = function createWebsite(websiteName){
            var websiter = {"name":websiteName, "developerId":vm.route.uid};
            console.log(websiter);
            WebsiteService
                .createWebsite(vm.route.uid, websiter)
                .then(function(response){
                    var website = response.data;
                    console.log(website);
                    if(website.developerId){
                        $location.url("user/"+ website.developerId + "/website");
                    }
                    else {
                        vm.error = "Website failed to create";
                    }
                });

        }

    }
})();