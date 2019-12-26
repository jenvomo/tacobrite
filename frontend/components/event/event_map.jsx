import React from 'react';
import MarkerManager from '../../util/marker_manager';

class EventMap extends React.Component {
  componentDidMount() {
    
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, 
      zoom: 12
    };
    
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.props.fetchEvents({
        northEast: { lat: 37.83005348467966, lng: -122.36633544921875 },
        southWest: { lat: 37.72150667205263, lng: -122.50366455078125 }
    });
    this.MarkerManager = new MarkerManager(this.map);

    google.maps.event.addListener(this.map, 'idle', () => {
      // debugger
      let bounds=  {
          northEast: this.map.getBounds().getNorthEast().toJSON(),
          southWest: this.map.getBounds().getSouthWest().toJSON(),
      };
      this.props.updateBounds(bounds);
    })
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(Object.values(this.props.events));
  }
  
  render() {
    return (
      <div className='map-container' ref={map => this.mapNode = map}></div>
    )
  }
}

export default EventMap;