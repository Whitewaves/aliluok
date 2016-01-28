(function() {
    'use strict';

    function aliluokCtrl ()
    {
        var vm = this;
        //create a service to fetch page title
        var title = 'Aliluok One';

        var service = {
            isAuthenticated: isAuthenticated,
            isLoggedIn: isLoggedIn,
            title: title
        };

        return service;

        //AppService
        //    .getUsers()
        //    .then(function (response) {
        //        vm.title = response.title;
        //    });
        //
        //Functions Declaration
        function isAuthenticated() {
            return false;
        }

        function isLoggedIn() {
            return function isAuthenticated() {
                return true;
            }
        }
    }

    angular
        .module('aliluokAdmin')
        .controller('aliluokCtrl', aliluokCtrl);

    //aliluokCtrl.$inject = ['$auth', '$mdToast', 'API_KEY'];
})();