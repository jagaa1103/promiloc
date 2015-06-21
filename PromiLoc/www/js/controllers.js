app.controller('MenuCtrl', function($scope, $ionicModal, $timeout) {
  var markers = [];
  $scope.addMemo = function(){
    $scope.addMemoModal.show();
    mapInit();
  }

  $scope.closeAddMemo = function(){
    $scope.addMemoModal.hide();
  }

  $scope.saveClicked = function(data){
    var memoData = {
      receiver_id: data.receiver_id,
      position: {
        lat: $scope.position.lat,
        lon: $scope.position.lon
      },
      msg: data.msg
    };
    console.log(memoData);
  }
  // ============= Google Map ==================
  function mapInit() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        google.maps.event.addListener(map, 'mousedown', function(e) {
          placeMarker(map, e.latLng);
        });
  }
  
  function placeMarker(map, position) { 
    clearMarkers();
    $scope.position = {
      lat : position.A,
      lon : position.F
    };
    
    var marker = new google.maps.Marker({
      position: position,
      map: map
    });
    markers.push(marker);
    console.log(position);
  }
  function clearMarkers(){
    for(var i=0; i<markers.length; i++){
      markers[i].setMap(null);
    }
  }

  // ============= ========== ==================

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginModal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/addMemo.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.addMemoModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.loginModal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.loginModal.show();
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

app.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

app.controller('PlaylistCtrl', function($scope, $stateParams) {
});
