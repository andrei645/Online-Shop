var myMap;
function initMap() {
  myMap = new google.maps.Map(document.getElementById('googleMap'), {
    center: {lat: 47.171794514664526, lng:27.575369850690567},
    zoom: 15
  });

  var myLatLng = new google.maps.LatLng(47.171794514664526, 27.575369850690567);

  var myMarkerOptions = {
    position: myLatLng,
    map: myMap
  }

  var myMarker = new google.maps.Marker(myMarkerOptions);
}

initMap()
myMap.setOptions({draggable: false, keyboardShortcuts: false, disableDefaultUI: true, noClear: true});