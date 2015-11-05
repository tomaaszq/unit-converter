var myApp = angular.module('myApp',[]);

myApp.controller('AnotherController', ['$scope',
	function calculate($scope) 
	{
		$scope.toKilo = function(value=0) { return value*0.001;};
		$scope.toMega = function(value=0) { return value*0.000001;};
		$scope.toMili = function(value=0) { return value*1000;};
		$scope.toMikro = function(value=0) { return value*1000000;};
		$scope.toNano = function(value=0) { return value*1000000000;};
		$scope.toGiga = function(value=0) { return value*0.000000001;};
	}
	]);