(function() {

    'use strict';

    function Config ($mdThemingProvider, $stateProvider, $urlRouterProvider)
    {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: 'views/dashboard.html',
                //controller: 'DashBoardCtrl',
                //controllerAs: 'dashboard',
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                //controller: 'DashBoardCtrl',
                //controllerAs: 'dashboard',
            })
            .state('menus', {
                url: '/menus',
                templateUrl: 'views/menus.html',
                //controller: 'DashBoardCtrl',
                //controllerAs: 'dashboard',
            })
            .state('pages', {
                url: '/pages',
                templateUrl: 'views/pages.html',
                //controller: 'DashBoardCtrl',
                //controllerAs: 'dashboard',
            })
            .state('sliders', {
                url: '/sliders',
                templateUrl: 'views/sliders.html',
                //controller: 'DashBoardCtrl',
                //controllerAs: 'dashboard',
            })
            .state('users', {
                url: '/users',
                templateUrl: 'views/users.html',
                //controller: 'DashBoardCtrl',
                //controllerAs: 'dashboard',
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'views/settings.html',
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
        .module('aliluokAdmin')
        .config(Config, Config);

    Config.$inject = ['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', 'API_URL'];
})();