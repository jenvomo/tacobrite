import React from 'react';
import MarkerManager from '../../util/marker_manager';

class EventMap extends React.Component {
  componentDidMount() {
    
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, 
      zoom: 10
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.props.updateBounds({
        northEast: { lat: 38.17633102776857, lng: - 122.19538217544554 },
        southWest: { lat: 37.37526986998601, lng: -122.63616567611693 }
    });
    this.MarkerManager = new MarkerManager(this.map);
  
    google.maps.event.addListener(this.map, 'idle', () => {
      let bounds=  {
          northEast: this.map.getBounds().getNorthEast().toJSON(),
          southWest: this.map.getBounds().getSouthWest().toJSON(),
      };
      this.props.updateBounds(bounds);
    })
    
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.events);
  }
  
  render() {
    return (
      <div className='map-container' ref={map => this.mapNode = map}></div>
    )
  }
}

export default EventMap;