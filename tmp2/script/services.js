app.factory('myFactory', ['$http', function ($http) {
        var obj = {};
        obj.sayHello = function (name) {
            return "Hello " + name + "!";
        }
        return obj;
    }]);
app.service('myService', ['$http', function ($http) {
        var t = this;
        t.sayHi = function (name) {
            return "Hi " + name + "!!";
        }
        return t;
    }]);
app.factory("httpClient", ['$http', 'appConfig', function ($http, appConfig) {
        var obj = {};
        obj.post = function (method, params, successCallback, errorCallback) {
            var headers = {"Content-Type": "application/json"};
            var url = (appConfig.BASE_URL_API_LOCAL || appConfig.BASE_URL_API) + method;

            params = params || {};
            var req = {
                method: 'POST',
                url: url,
                headers: headers,
                data: params
            };
            //updateToken.checkToken();
            //$http.defaults.headers.common.Authorization = "Bearer " + window.localStorage.getItem("access_token_user");
            $http(req).then(function (response) {
                successCallback(response);
            }, function (response) {
                errorCallback(response);
            });
        };
        obj.get = function (method, params, successCallback, errorCallback) {
            var url = (appConfig.BASE_URL_API_LOCAL || appConfig.BASE_URL_API) + method;
            var req = {
                method: 'GET',
                url: url,
            };
            $http(req).then(function (response) {
                successCallback(response);
            }, function (response) {
                errorCallback(response);
            });
        };
        return obj;
    }]);