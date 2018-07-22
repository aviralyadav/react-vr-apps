import React, { Component } from 'react';

import { AppRegistry, Pano, View, asset, Box, Cylinder, Sphere, Plane } from 'react-vr';

export default class Basics extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')} />
        <Box 
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe={true}
          style={{
            color: "#dd2222",
            transform: [{
              translate: [-1,0, -3]
            },
            {translateX: 0.5},
            {translateY: 1},
            {rotateX: 45}
          ]
          }}
        />
        <Cylinder 
          dimHeight={0.5}
          radiusBottom={0.5}
          radiusTop={0.5}
          wireframe={true}
          segments={15}
          style={{
            color: "#fff",
            transform: [
              {translate: [0, 0, -3]},
              {rotateZ: 45},
              {rotateY: 45}
            ]
          }}
        />
        <Sphere 
          radius={0.5}
          widthSegments={10}
          heightSegments={10}
          texture={'http://i.imgur.com/bEBqA.jpg'}
          style ={{
            color: '#aad',
            transform: [
              {translate: [1.5,0,-3]},
              {rotateY: 45}
            ]
          }}
        />
        <Plane
          dimHeight={2}
          dimWidth={5}
          texture={'http://i.imgur.com/3FAR9Kf.jpg'}
          style={{
            transform: [
              {translate: [0,0,-5]},
              {rotateX: -65},
              {rotateZ: -45}
            ]
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Basics', () => Basics);
