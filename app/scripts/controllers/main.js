'use strict';

/**
 * @ngdoc function
 * @name relaxCoachApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the relaxCoachApp
 */
angular.module('relaxCoachApp')

  .controller('MainCtrl', function ($scope, $timeout, $location, DataSvc) {

	  $scope.value = 0;
    $scope.pulse1 = DataSvc.pulse1;
    $scope.pulse2 = DataSvc.pulse2;

    $scope.config = {
      tappeable: true,
      deflating: false,
      training: false
    };

    $scope.onTimeout = function(){
        $scope.value ++;
        if ($scope.value < 100) {
        	$timeout($scope.onTimeout, 100);
          $scope.config.tappeable = false;
        }
        else { // Measurement finished
          $scope.config.tappeable = true;
        }
    };

    if($location.path().indexOf('measurement') >= 0){
      $scope.onTimeout();
    }
    else if($location.path().indexOf('training') >= 0){
      $scope.config.tappeable = false;
    }


    $scope.time = {
      times: 24,
      currTimes: 0
    };


    $scope.Timer = function(){
      if($scope.time.currTimes < $scope.time.times){
        $scope.time.currTimes++;
        $scope.config.deflating = !$scope.config.deflating;
        $timeout($scope.Timer, 5000);
      }
      else {
        $scope.config.tappeable = true;
        $scope.config.training = false;
        $timeout(function(){ $scope.GoTo('input-after') }, 1000);
      }
    };


    $scope.Tap = function(){
      if(!$scope.config.training && !$scope.config.tappeable){
        $scope.config.training = true;
        $scope.config.tappeable = false;
        $scope.Timer();
      }
    };

    $scope.GoTo = function(view){
      if($scope.config.tappeable)
        $location.path(view);
    };


    $scope.options = {
        width: 250,
        height: 250,
        fgColor: "red",
        skin: "tron",
        thickness: .3,
        displayPrevious: true,
        readOnly: true,
        displayInput: false,
    };



  });
