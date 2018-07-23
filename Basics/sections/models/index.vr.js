import React, { Component } from 'react';

import { AppRegistry, Pano, View, asset, Model } from 'react-vr';

export default class Basics extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')} />
        <Model 
          style={{transform: [{translate: [0, -1, -3]}]}}
          source={{obj: asset('Tree.obj')}}
          texture={'http://i.imgur.com/14HMTcQb.jpg'}
         />
      </View>
    );
  }
}

AppRegistry.registerComponent('Basics', () => Basics);