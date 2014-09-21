angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CategoryCtrl', function($scope, ProductService) {
    ProductService.findAllCategories().then(function(categories){
      $scope.categories = categories;
    });
})

.controller('BrandCtrl', function($scope, $stateParams, ProductService) {
  ProductService.findBrandsByCategoryId($stateParams.categoryId).then(function(brands){
    $scope.category = {
      id: $stateParams.categoryId,
      title: brands.category,
    };
    $scope.brands = brands.brands;
  });
})

.controller('ProductsCtrl', function($scope, $stateParams, ProductService) {
  ProductService.findProductsByBrandId($stateParams.brandId).then(function(products){
    $scope.category = {
      id: $stateParams.categoryId
    };
    $scope.brand = {
      id: $stateParams.brandId,
      title: products.brand,
    };
    $scope.products = products.products;
  });
})

.controller('ProductCtrl', function($scope, $stateParams, ProductService) {
  ProductService.findProductById($stateParams.productId).then(function(product){
    $scope.category = {
      id: $stateParams.categoryId
    };
    $scope.brand = {
      id: $stateParams.brandId,
      title: product.brand,
    };
    $scope.product = product;
  });
})

.controller('CartCtrl', function($scope, CartService) {
  $scope.cart = CartService.cart;
})
;
