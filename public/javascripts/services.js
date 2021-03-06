var app = angular.module('people');

app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).then(function (res) {
            console.log(res.data);
        }, function (err) {
            console.log(err);
        })
    }
}]);