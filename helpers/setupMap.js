import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const {
  configNameMain,
  configNames,
  radius,
  threshold,
  placesChanged,
  boundsChanged
} = publicRuntimeConfig

const setupMap = map => {
  var infowindow;

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener(boundsChanged, function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  var circles = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener(placesChanged, function () {
    var places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    circles.forEach(function (circle) {
      circle.setMap(null);
    })
    markers = [];
    circles = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (!place.geometry) {
        // console.log("Returned place contains no geometry");
        return;
      }

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);


    // Mapping Educational Facilities
    var coordinate = map.getCenter()
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: coordinate,
      radius: threshold,
      type: configNameMain
    }, callback);

    var searchNames = configNames

    searchNames.forEach(function (name) {
      service.nearbySearch({
        name: name,
        location: coordinate,
        radius: threshold
      }, callback);
    })

    // Create a market for each result
    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }

    // Create Marker & Radius
    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = {
        map: map,
        position: place.geometry.location
      };
      var circle = {
        map: map,
        radius,
        fillColor: '#AA0000',
        strokeWeight: 0
      }

      var markerItem = new google.maps.Marker(marker)
      var circleItem = new google.maps.Circle(circle);
      circleItem.bindTo('center', markerItem, 'position')

      circles.push(circleItem)
      markers.push(markerItem)

      google.maps.event.addListener(markerItem, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });



    }
  });
}

export default setupMap