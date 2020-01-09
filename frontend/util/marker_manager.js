class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(events) {
    Object.values(events).forEach( event => {
      let myLatLng = { lat: event.lat, lng: event.lng};
      this.markers[event.id] = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: event.title
      });
    })

    Object.keys(this.markers).forEach( eventId => {
      if (!events[eventId]) {
        this.removeMarker(eventId);
      }
    })
  }

  removeMarker(eventId) {
    debugger
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