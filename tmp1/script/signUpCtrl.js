app.controller('signUpCtrl', ['$scope', 'httpClient', 'vcRecaptchaService', '$http', function ($scope, httpClient, vcRecaptchaService, $http) {
        function signUpSuccessCallback(response) {
            console.log("u r in successcallback");
            if (response.status === 200) {
                console.log("response.data = " + JSON.stringify(response.data));
            }
        }
        ;

        function signUpErrorCallback(response) {
            console.log("u r in errorcallback");
        }
        ;

        $scope.user = {};
        $scope.signUp = function () {
            $scope.submitted = true;
            if ($scope.user.email === "" || $scope.user.email === undefined) {
                //invalid email
            } else if ($scope.user.password === "" || $scope.user.password === undefined) {
                //invalid password
            } else if ($scope.user.password !== $scope.user.confirmPassword) {
                //passwords not same
            } else {
                $scope.submitted = false;
                console.log("email = " + $scope.user.email + " , password = " + $scope.user.password);
                var data = {email: $scope.user.email, password: $scope.user.password};
                console.log('captcha response = ' + vcRecaptchaService.getResponse());
                var privateKey = "6LelGRYUAAAAADy1NxwSm1nxSUFlHbKiuXj4NO3G";
                var url = "https://www.google.com/recaptcha/api/siteverify" + "?secret=" + privateKey + "&response=" + vcRecaptchaService.getResponse();
                $http.get(url).then(function (response) {
                    console.log("captcha response success = " + JSON.stringify(response));
                    if(response.data && response.data.success){
                        httpClient.post("register", data, signUpSuccessCallback, signUpErrorCallback);
                    }
                }, function(error){
                    console.log("captcha response error = " + error);
                });
                //
            }
        };
    }]);