import React, { Component } from "react";
import { ScrollView, StyleSheet, Image, Text, View } from "react-native";
import OriginalPrice from "./src/harga_asli";
import HargaDiskon from "./src/harga_diskon";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProduct: [
        {
          gambar_product: require("./assets/nike.jpg"),
          nama_product: "Sepatu Futsal Nike Mercurial",
          harga_asli: "Rp. 729,000",
          harga_diskon: "Rp. 525,000"
        },
        {
          gambar_product: require("./assets/nike.jpg"),
          c: "Sepatu Futsal Nike Tiempo X",
          harga_asli: "Rp. 629,000",
          harga_diskon: ""
        },
        {
          gambar_product: require("./assets/nike.jpg"),
          nama_product: "Sepatu Adidas Yeezy",
          harga_asli: "",
          harga_diskon: "Rp. 2,499,000"
        },
        {
          gambar_product: require("./assets/nike.jpg"),
          nama_product: "Sepatu Running Nike Air Max",
          harga_asli: "Rp. 1,099,000",
          harga_diskon: "Rp. 859,000"
        },
        {
          gambar_product: require("./assets/nike.jpg"),
          nama_product: "Sepatu Running Adidas Cloudfoam",
          harga_asli: "Rp. 999,000",
          harga_diskon: ""
        }
      ]
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={{ margin: 10 }}>
          {this.state.dataProduct.map((data, index) => (
            <View key={index}>
              <Image
                style={{ width: 300, height: 300, resizeMode: "contain" }}
                source={data.gambar_product}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500"
                }}
              >
                {data.nama_product}
              </Text>
              
              {data.harga_asli !== "" && (
                <OriginalPrice price_ori={data.harga_asli} />
              )}
              {data.harga_diskon !== "" && (
                <HargaDiskon price_disc={data.harga_diskon} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}
