var app = angular.module('appAngularService', ['ngMaterial', 'ngMessages', 'ui.router', 'nav','user' ]);

app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdIconProvider',
    function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {



        // Theme
        var colorMap = $mdThemingProvider.extendPalette('blue', {
            '500': '001E49'
        });
        $mdThemingProvider.definePalette('blue', colorMap);
		
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');

        // Icon
        $mdIconProvider
            .iconSet('action', 'img/icons/action-icons.svg', 24)
            .iconSet('alert', 'img/icons/alert-icons.svg', 24)
            .iconSet('av', 'img/icons/av-icons.svg', 24)
            .iconSet('communication', 'img/icons/communication-icons.svg', 24)
            .iconSet('content', 'img/icons/content-icons.svg', 24)
            .iconSet('device', 'img/icons/device-icons.svg', 24)
            .iconSet('editor', 'img/icons/editor-icons.svg', 24)
            .iconSet('file', 'img/icons/file-icons.svg', 24)
            .iconSet('hardware', 'img/icons/hardware-icons.svg', 24)
            .iconSet('icons', 'img/icons/icons-icons.svg', 24)
            .iconSet('image', 'img/icons/image-icons.svg', 24)
            .iconSet('maps', 'img/icons/maps-icons.svg', 24)
            .iconSet('navigation', 'img/icons/navigation-icons.svg', 24)
            .iconSet('notification', 'img/icons/notification-icons.svg', 24)
            .iconSet('sms', 'img/icons/sms-icons.svg', 24)
            .iconSet('social', 'img/icons/social-icons.svg', 24)
            .iconSet('toggle', 'img/icons/toggle-icons.svg', 24);

        // State
        $stateProvider
            .state('ui', {
                abstract: true,
                url: '/ui',
                views: {
                    '': {
                        templateUrl: 'app/components/nav/layout.html'
                    },
                    'aside': {
                        templateUrl: 'app/components/nav/aside.html'
                    }
                }
            })
            .state('ui.user', {
                url: '/user',
                views: {
                    'container': {
                        templateUrl: 'app/views/listUsers.html',
                        controller: 'userCtrl'
                    }
                }
            })
            ;

        $urlRouterProvider.otherwise('/ui/contact');
    }
]);
