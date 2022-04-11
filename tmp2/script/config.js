app.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "templates/home.html",
                controller: "homeCtrl"
            })
            .state('signup', {
                url: "/signup",
                templateUrl: "templates/signup.html",
                controller: "signUpCtrl"
            })
            .state('login', {
                url: "/login",
                templateUrl: "templates/login.html",
                controller: "loginCtrl"
            })
            .state('aboutus', {
                url: "/aboutus",
                templateUrl: "templates/aboutus.html",
                controller: "aboutUsCtrl"
            })
            .state('contactus', {
                url: "/contactus",
                templateUrl: "templates/contactus.html",
                controller: "contactUsCtrl"
            })
            .state('travel', {
                url: "/travel",
                templateUrl: "templates/travel.html",
                controller: "travelCtrl"
            });

            var fileNameConvention = {
                        prefix: 'assets/lang_',
                        suffix: '.json'
                      }; 

            $translateProvider.useStaticFilesLoader(fileNameConvention);
            $translateProvider.preferredLanguage('en_US');
            $translateProvider.useSanitizeValueStrategy(null);
            //$translateProvider.useMissingTranslationHandler('customTranslationHandler');
            //$translateProvider.determinePreferredLanguage();
            $translateProvider.fallbackLanguage('en_US');
});