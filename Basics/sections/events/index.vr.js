import React, { Component } from 'react';

import { AppRegistry, Pano, View, asset, Text } from 'react-vr';

export default class Basics extends Component {
  constructor(){
    super();
    this.state = {
      fontSize: 0.1
    }
  }
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')} />
        <Text 
          style={{
            fontSize: this.state.fontSize,
            transform: [{translate: [0, 0, -2]}]
          }}
          onEnter={()=>this.setState({fontSize: 0.2})}
          onExit={()=>this.setState({fontSize: 0.1})}
        >Hover over me</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Basics', () => Basics);
