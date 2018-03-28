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
  Image,
  View
} from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Image 
            style={{ width: '100%', height: '84%', resizeMode: 'contain' }}
            source={require('./assets/grilled_steak.jpg')} />
        </View>
        <View style={{ flex: 1, marginLeft: 18 }}>
          <Text style={{ fontSize: 23, fontWeight: '500' }}>
            Grilled vegetable with beef meat
          </Text>
          
          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image 
                style={{ 
                  marginTop: 2, marginRight: 10,
                  width: 14, height: 14, resizeMode: 'contain' }}
                source={require('./assets/people.png')} />
              <Text>2 servings</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 45 }}>
              <Image 
                style={{ 
                  marginTop: 2, marginRight: 10,
                  width: 14, height: 14, resizeMode: 'contain' }}
                source={require('./assets/time.png')} />
              <Text>15 min</Text>
            </View>
          </View>

          <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 25 }}>
            Ingredients
          </Text>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={{ width: '15%' }}>
              <Text>2 pcs</Text>
            </View>
            <View style={{ width: '70%' }}>
              <Text>Tomatoes</Text>
            </View>
            <View style={{ width: '15%' }}>
              <Image source={require('./assets/checkmarked.png')} />
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={{ width: '15%' }}>
              <Text>1 pc</Text>
            </View>
            <View style={{ width: '70%' }}>
              <Text>Pepper</Text>
            </View>
            <View style={{ width: '15%' }}>
              <Image source={require('./assets/empty_checkmark.png')} />
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={{ width: '15%' }}>
              <Text>1 pc</Text>
            </View>
            <View style={{ width: '70%' }}>
              <Text>Red onion</Text>
            </View>
            <View style={{ width: '15%' }}>
              <Image source={require('./assets/empty_checkmark.png')} />
            </View>
          </View>
        </View>

        
        <View style={{ 
          marginBottom: 20,
          flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Image style={{ width: 25, height: 25, resizeMode: 'contain' }} 
            source={require('./assets/chef.png')} />
          <Image style={{ width: 25, height: 25, resizeMode: 'contain' }} 
            source={require('./assets/list.png')} />
          <Image style={{ width: 25, height: 25, resizeMode: 'contain' }} 
            source={require('./assets/chat.png')} />
          <Image style={{ width: 25, height: 25, resizeMode: 'contain' }} 
            source={require('./assets/people.png')} />
          <Image style={{ width: 25, height: 25, resizeMode: 'contain' }} 
            source={require('./assets/settings.png')} />
        </View>


        
          
        
        
      </View>
    );
  }
}

