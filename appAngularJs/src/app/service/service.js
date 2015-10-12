angular.module('servicesApp',[]);

angular.module('servicesApp').factory('',function($http){

    return {
        "serviceGetAll" : function(URL){
            return $http.get(URL);
        },
        "serviceGetElement" : function(URL,data){
            return $http.get(URL+"/"+data);
        },
        "serviceAddElement" : function(URL,data){
            return "";
        }
    }
});