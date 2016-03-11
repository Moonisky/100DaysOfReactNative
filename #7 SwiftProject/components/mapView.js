'use strict';
import React, {
  Component,
} from 'react-native';
var { requireNativeComponent } = require('react-native');

class MapView extends Component {

  render() {
    return (
      <Map {...this.props} />
    );
  }
}

MapView.propTypes = {

};

var Map = requireNativeComponent('Map', MapView);
module.exports = MapView;
