import React, { Component } from 'react';

import { AppRegistry, Pano, View, asset, Text } from 'react-vr';

class Task extends Component {
  render () {
    return (
      <Text style={{textAlign: 'center', fontSize: 0.2}}>{this.props.text}</Text>
    );
  }
}

export default class Basics extends Component {
  render () {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')} />
        <View style={{transform: [{translate: [0, 0, -3]}], layoutOrigin: [0.5, 0.5]}}>
          <Task text="To take bath" />
          <Task text="To pay bill" />
          <Task text="To go for shopping" />
          <Task text="Sleep" />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Basics', () => Basics);
