angular.module('userModule',['servicesApp']);

angular.module('userModule').controller('userCrtl',function($scope,serviceFactory){

    var URL='http://localhost:3001/serverCoutchBD'
    serviceFactory.serviceGetAll(URL).success(function(reponse){
        console.log(reponse);
        $scope.listUsers=reponse;
    });


});

