app.controller('AuthController', function($scope, userFactory, $window, $location, Upload){


  $scope.user = {};
  $scope.errorMsg = '';
  $scope.signin = function () {
    userFactory.signin($scope.user, function (data) {
      console.log('token ', data)
      if (data.token) {
        $window.localStorage.setItem('userToken', data.token);
        $location.path('/users/dash/');
      } else {
        console.log('error: ', data.error)
        $scope.errorMsg = 'User/Password not found'
        $location.path('/');
      }

    });
  };

  $scope.signup = function () {
    userFactory.signup($scope.user, function (token) {

      $window.localStorage.setItem('userToken', data.token);
      $location.path('/users/dash/');
    });
  };

  $scope.uploadImage = function () {
      console.log($scope.image);
      userFactory.upload($scope.image, function () {
        console.log("Upload works!");
      });
    };

});
