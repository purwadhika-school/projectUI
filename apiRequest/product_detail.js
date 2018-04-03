import React, { Component } from "react";
import { ActivityIndicator, View, Text, Image } from "react-native";
import axios from "axios";

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data_product: []
    };
  }

  render() {
    const { data_product } = this.state;
    return data_product.length > 0 ? (
      <View>
        <Image
          style={{ width: 200, height: 200, resizeMode: "contain" }}
          source={{ uri: data_product[0].image }}
        />
        <Text>{data_product[0].product_name}</Text>
        <Text>{data_product[0].price}</Text>
        <Text>{data_product[0].description}</Text>
      </View>
    ) : (
      <ActivityIndicator size="large" />
    );
  }

  componentDidMount() {
    this.getDetailProduct();
  }

  getDetailProduct = () => {
    const { productID } = this.props.navigation.state.params; // Destructuring
    const url = `http://172.104.50.9:3000/api/productdetails?filter[where][product_id]=${productID}`;
    console.log(url)
    axios
      .get(url)
      .then(response => {
        this.setState({ data_product: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };



}

export default ProductDetail;
