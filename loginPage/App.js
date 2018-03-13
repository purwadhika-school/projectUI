/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'red', flex: 1 }} />
        <View style={{ backgroundColor: 'yellow', flex: 2 }} />
        <View style={{ backgroundColor: 'blue', flex: 1 }} />
      </View>
    )



    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit App.js
    //     </Text>
    //     {/* 1. styling inline */}
    //     <Text style={{ fontSize: 25, color: 'red' }}>Yogie</Text> 
    //     {/* 2. styling with object */}
    //     <View style={{
    //       flex: 1,
    //       height: 300,
    //       backgroundColor: 'yellow',
    //       justifyContent: 'space-evenly',
    //       flexDirection: 'row', 
    //       marginTop: 10 }}>
    //       <Text style={styles.textSaya}>ABC</Text> 
    //       <Text style={[styles.textSaya]}>DEF</Text> 
    //       <Text style={styles.textSaya}>GHI</Text> 
    //     </View>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  textSaya: { 
    fontSize: 20, 
    color: 'blue' 
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
