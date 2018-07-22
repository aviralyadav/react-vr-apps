import React, { Component } from 'react';

import { AppRegistry, Pano, View, asset, Text } from 'react-vr';

export default class Basics extends Component {
  constructor () {
    super();
    this.state = {
      showText: true
    }
    setInterval(()=>{
      this.setState({showText: !this.state.showText})
    }, 1000);
  }
  render () {
    let message = this.state.showText ? 'Welcome to VR land' : '';
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')} />
        <Text style={{fontSize: 0.1, transform: [{translate: [-1, 0, -1]}]}}>{message}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Basics', () => Basics);
