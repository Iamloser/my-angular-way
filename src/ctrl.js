myApp.controller('TextAreaWithLimitCtrl', ['$scope', function($scope){
	var MAX_len = 20;
	var warn_len = 10;
	$scope.remaining = function(){
		if(!$scope.message){
			return MAX_len;
		}
		return MAX_len - $scope.message.length;
	}
	$scope.shouldWarn = function(){
		return $scope.remaining() < warn_len;
	}
	$scope.hasValidLength = function(){
		if($scope.remaining() >= 0){
			return true;
		}
	}
}]);
