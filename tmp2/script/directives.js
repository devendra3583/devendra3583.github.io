app.directive('displayVideo', function () {
    var directive = {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            title: '@'         
        },
        templateUrl: 'templates/displayVideoTemplate.html',
        controller: displayVideoCtrl, //Embed a custom controller in the directive
        link: function ($scope, element, attrs) { } //DOM manipulation
    };
    return directive;
})

function displayVideoCtrl($scope, $sce){
$scope.videoAPI = null;
            $scope.onPlayerReady = function (API) {
                $scope.videoAPI = API;
                $scope.totalTime = $scope.videoAPI.totalTime;
            };

            $scope.stopVideo = function () {
                $scope.videoAPI.stop();
            };
            $scope.config = {
                sources: [
                    {src: $sce.trustAsResourceUrl("https://devendra3583.github.io/tmp2/vid/1.MP4"), type: "video/mp4"}
                ],
                theme: "thirdpartylib/css/videogular.css",
                plugins: {
                    poster: ""
                }
            };
};

