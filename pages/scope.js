import React from 'react'
import { withRouter } from 'next/router'
import Page from '../components/Page.js'
import Map from '../components/Map'

class Scope extends React.Component {

  setupMap = map => {
    console.log("RAN")
    // Initialize infowindow
    var infowindow;
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    var circles = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
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
          console.log("Returned place contains no geometry");
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


      // Start Code here
      var coordinate = map.getCenter()
      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: coordinate,
        radius: 1500,
        type: ["school"]
      }, callback);

      var searchNames = ["academy", "tutorial", "kumon", "highschool", "elementary", "college", "university", "Academy", "Tutorial", "Kumon", "Highschool", "Elementary", "College", "University"]

      searchNames.forEach(function (name) {
        service.nearbySearch({
          name: name,
          location: coordinate,
          radius: 1500
        }, callback);
      })

      // Callback
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
          radius: 100, // Meters
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

  render() {
    const { query } = this.props.router
    const isFullscreen = query.fullscreen

    return (
      <Page fullscreen={isFullscreen}>
        <input id="pac-input" className="controls" type="text" placeholder="Search" />
        <Map
          id="myMap"
          options={mapOptions}
          onMapLoad={map => {
            this.setupMap(map)
          }}
        />
        <style jsx>{`
        .pac-card {
          margin: 10px 10px 0 0;
          border-radius: 2px 0 0 2px;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          outline: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          background-color: #fff;
          font-family: Roboto;
        }
        
        #pac-container {
          padding-bottom: 12px;
          margin-right: 12px;
        }
        
        .pac-controls {
          display: inline-block;
          padding: 5px 11px;
        }
        
        .pac-controls label {
          font-family: Roboto;
          font-size: 13px;
          font-weight: 300;
        }
        
        #pac-input {
          background-color: #fff;
          font-family: Roboto;
          font-size: 15px;
          font-weight: 300;
          margin: 1vh;
          padding: 15px;
          text-overflow: ellipsis;
          width: 80vw;
        }
        
        #pac-input:focus {
          border-color: #4d90fe;
        }
        `}</style>
      </Page>
    )
  }
}

const mapOptions = {
  center: { lat: 14.5627, lng: 121.0334 },
  zoom: 13,
  mapTypeId: 'roadmap',
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  styles: [
    {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#e0efef"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "hue": "#1900ff"
        },
        {
          "color": "#c0e8e8"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "lightness": 100
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "lightness": 700
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#7dcdcd"
        }
      ]
    }
  ]
}
export default withRouter(Scope)
