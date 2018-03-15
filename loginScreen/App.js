import React, { Component } from 'react'
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import Header from './src/Header'
import Body from './src/Body'


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Header />
        <Body />
      </View>
    )
  }
}
