import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>

        {/* icon */}
        <View style={{ 
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 2 }}>
          <Image 
            style={{ width: 120, height: 120, resizeMode: 'contain' }}
            source={require('./assets/todo_icon.png')} />
        </View>

        {/* text */}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: '700', marginTop: 10  }}>
            Welcome to Todoist
          </Text>
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', marginTop: 10 }}>
            Create an account to save your tasks {'\n'}
            an access them anywhere. It's free. {'\n'}Forever.
          </Text>
        </View>

        {/* button */}
        <View style={{ flex: 2, backgroundColor: 'green' }}>
        </View>

      </View>
    )
  }
}
