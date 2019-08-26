module.exports = {
  serverRuntimeConfig: { // Will only be available on the server side
    APPROVED_APIKEYS: ['34ec555c-6c82-458a-9f9e-03de66fea0b6', 'janababy']
  },
  publicRuntimeConfig: { // Will be available on both server and client
    GOOGLEMAPS_APIKEY: process.env.GOOGLEMAPS_APIKEY, // JTI Product Key
    center: { lat: 14.5627, lng: 121.0334 },
    // Used to map over keywords when searching
    configNames: ["academy", "tutorial", "kumon", "highschool", "elementary", "college", "university", "school"],
    // Places API main type
    configNameMain: ["school"],
    // Search threshold from main point
    threshold: 120,
    placesChanged: 'places_changed',
    boundsChanged: 'bounds_changed',
    color: '#AA0000',
    fillOpacity: 0.20,
    // Radius from each marker
    radius: 100,
    // Map style
    mapStyle: [
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
}