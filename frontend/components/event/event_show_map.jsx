import React from 'react';
import MarkerManager from '../../util/marker_manager';


class EventShowMap extends React.Component {
  componentDidMount() {

    const mapOptions = {
      center: { lat: this.props.event.lat, lng: this.props.event.lng },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    this.MarkerManager.addMarker(this.props.event);
  }

  render() {
    return (
      <div className='show-map-container' ref={map => this.mapNode = map}></div>
    )
  }
}

export default EventShowMap;