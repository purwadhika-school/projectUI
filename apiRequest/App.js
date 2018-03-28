import React, { Component } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data_products: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const api_products = "http://172.104.50.9:3000/api/shoppinglists";
    axios
      .get(api_products)
      .then(res => {
        console.log(res);
        this.setState({ data_products: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View>
        <Text>Test Request API</Text>
        {this.state.data_products.length === 0 && (
          <ActivityIndicator size="large" />
        )}
        {this.state.data_products.length > 0 &&
          this.state.data_products.map((data, index) => (
            <View key={index}>
              <Image
                source={{ uri: data.image }}
                style={{ width: 100, height: 100, resizeMode: "contain" }}
              />
              <Text>{data.product_name}</Text>
            </View>
          ))}
      </View>
    );
  }
}
