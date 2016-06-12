(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location, $routeParams, WebsiteService, UserService) {
        var vm = this;
        vm.route = $routeParams;
        vm.createWebsite = function createWebsite(websiteName) {
            var websiter = {"name": websiteName, "developerId": vm.route.uid};
            var updateUser;
            WebsiteService
                .createWebsite(vm.route.uid, websiter)
                .then(function (response) {
                    var website = response.data;
                    var parentUser = website._user;
                    if (parentUser) {
                        updateUser = {_id: parentUser, websites: [website._id]};
                        UserService
                            .updateUser(parentUser, updateUser)
                            .then(
                                $location.url("user/" + vm.route.uid + "/website")
                            )
                    }
                    else {
                        vm.error = "Website failed to create";
                    }
                });

        }

    }
})();