import React from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Text,
  View,
  StyleSheet
} from 'react-vr';
// import { AsyncStorage } from 'react-native';

import Shape, { shapes } from './vr/components/Shape';

export default class ShapeGame extends React.Component {
  constructor() {
    super();

    this.state = {
      gameShapes: [1, 1, 1, 1],
      score: 0,
      specialIndex: 0
    }
  }
  componentDidMount() {
    // AsyncStorage.getItem('score')
    //   .then(value => {
    //     this.setState({score: value});
    //   });
    this.newGameSet();
  }

  pickShape = (shapeIndex) => {
    let score = this.state.score;
    score = this.state.specialIndex === shapeIndex ? score + 1 : score - 1;
    console.log(score, JSON.stringify(score));
    AsyncStorage.setItem('score', 'JSON.stringify(score)');
    this.setState({ score });
    this.newGameSet();
  }

  newGameSet = () => {
    console.log('New game started!');

    let baseShapeId = Math.floor(Math.random() * shapes.length);
    // console.log('baseShapeId', baseShapeId);

    let specialShapeId = baseShapeId;

    while (specialShapeId === baseShapeId) {
      specialShapeId = Math.floor(Math.random() * shapes.length);
    }
    // console.log('SpacialShapeId', specialShapeId);

    let newGameShapes = [];

    for (let i = 0; i < this.state.gameShapes.length; i++) {
      newGameShapes[i] = baseShapeId;
    }
    let specialIndex = Math.floor(Math.random() * newGameShapes.length);

    newGameShapes[specialIndex] = specialShapeId;
    // console.log('newGameShapes', newGameShapes);
    this.setState({
      gameShapes: newGameShapes,
      specialIndex
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Find the Odd Shape!</Text>
        <Text style={styles.text}>Score: {this.state.score}</Text>
        {
          this.state.gameShapes.map((shape, index) => {
            return (<View onEnter={()=>this.pickShape(index)} key={index}>
            <Shape
              shapeNum={shape}
              colorNum={index}
              transform={[{ translate: [(index - 1.5) * 1.5, 0, -5] }]}
            />
            </View>)
            ;
          })
        }

      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 0.5,
    textAlign: 'center',
    color: '#fff',
    transform: [{ translate: [-2, 2, -5] }],
  }
});

AppRegistry.registerComponent('ShapeGame', () => ShapeGame);
