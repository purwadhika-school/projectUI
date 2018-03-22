import React, { Component } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import OriginalPrice from "./src/harga_asli";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProduct: {
        gambar_product: require("./assets/nike.jpg"),
        nama_product: "Sepatu Futsal Nike Mercurial",
        harga_asli: "Rp. 729,000",
        harga_diskon: "Rp. 525,000"
      }
    };
  }

  render() {
    return (
      <View>
        <Image
          style={{ width: 300, height: 300, resizeMode: "contain" }}
          source={this.state.dataProduct.gambar_product}
        />
        <View style={{ margin: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500"
            }}
          >
            Nike Mercurial Superfly
          </Text>
          
          <OriginalPrice />
        </View>
      </View>
    );
  }
}
