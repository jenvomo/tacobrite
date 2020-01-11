class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(events) {
    Object.keys(this.markers).forEach( eventId => {
        this.removeMarker(eventId);
    })

    Object.values(events).forEach( event => {
      let myLatLng = { lat: event.lat, lng: event.lng};
      this.markers[event.id] = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: event.title
      });
    })

  }

  removeMarker(eventId) {
    this.markers[eventId].setMap(null);
    delete this.markers[eventId];
  }

  addMarker(event) {
    let myLatLng = { lat: event.lat, lng: event.lng };
    new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: event.title
    });
  }
}

export default MarkerManager;