     app.run(['$rootScope', 'appConfig', '$translate', '$http', function ($rootScope, appConfig, $translate, $http) {
                    $rootScope.WEBSITE_NAME = appConfig.YOUR_WEBSITE_NAME;
                    if(window.localStorage.getItem("languageSelected")){
                        $translate.use(window.localStorage.getItem("languageSelected"));
                    }
                    
                    $rootScope.languages = [
                        {
                            id: 1, 
                            name: "en_US",
                            displayName: "English(US)"
                        },
                        {
                            id: 2, 
                            name: "fr_FR",
                            displayName: "French"
                        }
                    ];
            $rootScope.changeLanguage = function (key) {
                        if(key){
                            $translate.use(key);
                            window.localStorage.setItem("languageSelected", key);
                        }
                    };
                    $rootScope.selectedLanguage = $rootScope.languages[0];
                    $rootScope.views_on_website_including_pageviews = 0;
                    $http.get('json/v.json', {}).then(function successCallback(response){
                            //console.log("success",response);
                            if(response.status == 200){
                                $rootScope.views_on_website_including_pageviews = response.data.views_on_website_including_pageviews_since_20220412;
                            };
                        }, 
                            function errorCallback(response){
                                //console.log("error",response);
                    });
                    
                    $rootScope.$on('$stateChangeStart', function(e, toState) {
                        $rootScope.views_on_website_including_pageviews += 1;
                    });


                }]);