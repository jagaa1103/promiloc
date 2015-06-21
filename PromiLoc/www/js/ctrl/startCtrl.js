app.controller('startCtrl', function($scope, $location){
	console.log('startCtrl');
	$scope.goMain = function(){
		$location.path('/app/main');
	}

	function checkLogin(){
		$scope.authObj.$authWithPassword({
		  email: "my@email.com",
		  password: "mypassword"
		}).then(function(authData) {
		  console.log("Logged in as:", authData.uid);
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
	}
});