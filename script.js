function iniciarMap() {
  var coord = { lat: -35.5165321, lng: -58.3214972 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}
