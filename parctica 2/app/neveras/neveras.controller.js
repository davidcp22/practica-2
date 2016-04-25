/**
 * Created by E on 25/04/2016.
 */
(function () {
    angular.module('Neveras', [])
        .controller('NeverasCtrl',NeverasCtrl);

    function NeverasCtrl($http){
        var self = this;
        self.electroList = [];

        $http({
            method: 'GET',
            url: 'http://udem.herokuapp.com/neveras'
        }).then(function successCallback(response) {
            console.log(response);
            angular.forEach(response.data.electro, function(item){
                self.electroList.push(item);
            });
        }, function errorCallback(response) {
            console.log("se tiro la aplicacion");
        });
    }
})();
