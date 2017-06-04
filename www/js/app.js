
var app = angular.module('app', ['ionic', 'ngCordova', 'app.routes',
  'app.ctrlAbastecimentos', 'app.ctrlDashboard', 'app.ctrlManutencao',
  'app.ctrlMenu', 'app.ctrlRelatorios', 'app.ctrlVeiculos'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
