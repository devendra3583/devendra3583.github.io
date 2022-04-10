     app.run(['$rootScope', 'appConfig', '$translate', function ($rootScope, appConfig, $translate) {
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
                }]);