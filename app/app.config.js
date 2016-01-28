(function() {

    'use strict';

    function Config ($mdThemingProvider, $stateProvider, $urlRouterProvider)
    {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/frontend/home.html',
                //controller: 'DashBoardCtrl',
                //controllerAs: 'dashboard',
            });

        $mdThemingProvider.theme('default')
            .primaryPalette('indigo' , {
                'default': '400',
                'hue-1': '400',
                'hue-2': '200',
                'hue-3': '50'
            })
            .accentPalette('blue-grey', {
                'default': 'A700',
                'hue-1': 'A200'
            })
            .warnPalette('red');
    }

    angular
        .module('aliluok')
        .config(Config, Config);

    Config.$inject = ['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', 'API_URL'];
})();