var initGoogleMap = function() {
  var lotrek_head_quarters = {
    lat: 43.932839,
    lng: 10.9324155,};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: lotrek_head_quarters,
      mapZoomControl: false,
      mapSetTypeControl: false,
      mapFullScreenControl: false,
      mapScaleControl: false,
      mapStreetWiewControl: false,
      mapScrollWheel: false,
      mapDraggable: false,
      mapDisableDoubleClickZoom: false,
      mapCustomMarker: false,
      mapCustomMarkerHeight: 60,
      mapCustomMarkerWidth: 60,
      mapPrimaryColor: false,
      mapSecondaryColor: false,
      mapBaseColor: false,
      mapEnableCustomStyles: false,
      mapMultiLocations: false,
      zoom: 16
    });
    var marker = new google.maps.Marker({
      position: lotrek_head_quarters,
      map: map
    });
}

window.setInterval(function () {
  $("#bug-egg").toggleClass("bug__image--animation")
  $("#bug-egg-bottom").toggleClass("bug__image--animation--bottom")
}, 60000);