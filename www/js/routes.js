angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

  .state('menu.dashboard', {
    url: '/home',
    views: {
      'side-menu': {
        templateUrl: 'templates/dashboard.html',
        controller : 'ctrlDashboard'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'ctrlMenu'
  })

  .state('menu.veiculos', {
    url: '/veiculos',
    views: {
      'side-menu': {
        templateUrl: 'templates/veiculos.html',
        controller: 'ctrlVeiculos'
      }
    }
  })

  .state('menu.abastecimentos', {
    url: '/abastecimentos',
    views: {
      'side-menu': {
        templateUrl: 'templates/abastecimentos.html',
        controller: 'ctrlAbastecimentos'
      }
    }
  })

  .state('menu.manutencao', {
    url: '/manutencao',
    views: {
      'side-menu': {
        templateUrl: 'templates/manutencao.html',
        controller: 'ctrlManutencao'
      }
    }
  })

  .state('menu.relatorios', {
    url: '/relatorios',
    views: {
      'side-menu': {
        templateUrl: 'templates/relatorios.html',
        controller: 'ctrlRelatorios'
      }
    }
  })

$urlRouterProvider.otherwise('/menu/home')



});
