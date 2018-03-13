import React, { Component } from 'react'
import {
  Platform,
  TouchableOpacity,
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
        <View style={{ 
          flex: 1, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: '700', marginTop: 10  }}>
            Welcome to Todoist
          </Text>
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', marginTop: 10 }}>
            Create an account to save your tasks {'\n'}
            an access them anywhere. It's free. {'\n'}Forever.
          </Text>
        </View>


        {/* button */}
        <View style={{  
          flex: 2, justifyContent: 'flex-end', marginBottom: 15 }}>
          
          <TouchableOpacity style={{ 
            alignSelf: 'center',
            borderRadius: 5,
            backgroundColor: 'white', 
            width: '92%' }} >
            {/* foodUI - react-native init foodUI  */}
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '30%' }}>
                <Image 
                  style={{ margin: 15, width: 25, height: 25, resizeMode: 'contain' }}
                  source={require('./assets/g_icon.png')} />
              </View>
              <View style={{ width: '70%' }}>
                <Text style={{
                  margin: 15,
                  fontSize: 15, 
                  color: 'red' }}>
                  Continue with Google
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{
            marginTop: 10, 
            alignSelf: 'center',
            borderRadius: 5,
            backgroundColor: 'white', 
            width: '92%' }} >
            
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '30%' }}>
                <Image 
                  style={{ margin: 15, width: 25, height: 25, resizeMode: 'contain' }}
                  source={require('./assets/fb_icon.png')} />
              </View>
              <View style={{ width: '70%' }}>
                <Text style={{
                  margin: 15,
                  fontSize: 15, 
                  color: 'red' }}>
                  Continue with Facebook
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ 
            marginTop: 10,
            alignSelf: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: 'red', 
            width: '92%' }} >
            
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '30%' }}>
                <Image 
                  style={{ margin: 15, width: 25, height: 25, resizeMode: 'contain' }}
                  source={require('./assets/mail_icon.png')} />
              </View>
              <View style={{ width: '70%' }}>
                <Text style={{
                  margin: 15,
                  fontSize: 15, 
                  color: 'white' }}>
                  Continue with Email
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          
        </View>

      </View>
    )
  }
}
