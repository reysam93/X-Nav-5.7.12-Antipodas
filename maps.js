function checkGeolocation(){
  if (Modernizr.geolocation){
    navigator.geolocation.getCurrentPosition(setMap);
  }else{
    $("#notSupported").html("Geolocation is not supported");
  }
}

function setMap(position){
  lat = position.coords.latitude;
  long = position.coords.longitude;
  var mapSpace = document.getElementById("map");
  var map = new google.maps.Map(mapSpace, {
    center: {lat: lat, lng: long},
    zoom: 5
  });
  setAntipodas();
}

function setAntipodas(){
  lat = lat * -1;
  long = 180 - long;
  var antipodaSpace = document.getElementById("antipoda");
  var antipoda = new google.maps.Map(antipodaSpace, {
    center: {lat: lat, lng: long},
    zoom: 5
  });
}