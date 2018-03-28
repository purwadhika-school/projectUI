import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import KontenSatu from './src/konten_satu'
import KontenDua from './src/konten_dua'


export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      kontenNumber: '',
    }
  }

  render() {
    return (
      <View>
        {/* Button */}
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignSelf: "center"
          }}
        >
          <TouchableOpacity 
            onPress={() => this.setState({ kontenNumber: '1' }) }
            style={{ backgroundColor: "green" }}>
            <Text style={{ fontSize: 25, margin: 10 }}>Konten 1</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.setState({ kontenNumber: '2' }) }
            style={{ backgroundColor: "orange" }}>
            <Text style={{ fontSize: 25, margin: 10 }}>Konten 2</Text>
          </TouchableOpacity>
        </View>

        {/* Konten */}
        <View style={{ marginTop: 20, alignSelf: 'center' }}>
          {this.state.dataProduct.harga_asli != '' && <KontenSatu harga_asli={this.state.dataProduct.harga_asli}  name='Yogie' />}
          {this.state.kontenNumber === '2' && <KontenDua data='Konten 2' name='Yogie' />}
        </View>
      </View>
    );
  }
}

