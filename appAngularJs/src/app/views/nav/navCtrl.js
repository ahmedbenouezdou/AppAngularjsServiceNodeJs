angular.module('nav', []);

angular.module('nav').controller('navCtrl', function ($scope, $state, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = function () {
        $mdSidenav('left').toggle()
            .then(function () {
                $log.debug("toggle left is done");
            });
    };
    $scope.toggleRight = function () {
        $mdSidenav('right').toggle()
            .then(function () {
                $log.debug("toggle RIGHT is done");
            });
    };
    $scope.navigate = function (state, param) {
        $state.transitionTo(state, param);
    };
});

angular.module('nav').controller('leftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });
    };
});

angular.module('nav').controller('rightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('right').close()
            .then(function () {
                $log.debug("close RIGHT is done");
            });
    };
});