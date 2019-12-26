class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(events) {
    console.log("update em!");
    events.forEach( event => {
      let myLatLng = { lat: event.lat, lng: event.lng};
      this.markers[event.id] = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: event.title
      });
    })
  }
}

export default MarkerManager;