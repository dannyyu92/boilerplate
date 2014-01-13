function initialize_maps() {
  google.maps.visualRefresh = true;
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(40.71620, -73.98487),
    zoom: 12,
    mapTypeControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

//remove bracket if using geolocation
}

/*
  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: pos,
        content: 'My Location'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var marker = new google.maps.Marker(options);
  map.setCenter(options.position);
}
*/