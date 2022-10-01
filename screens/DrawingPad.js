import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Pad from "../view/pad";

export default class DrawingPad extends Component {
  render() {
    return(
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}>
        <Text
          style={{
          fontSize: 20,
          fontFamily: 'Comic Sans MS, Comic Sans, cursive'
        }}>
        Drawing Pad 
        </Text>
        <Pad/>
      </View>
    )
  }
}