import React, { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import Product_List from "./product_list";
import Product_Detail from "./product_detail";

class App extends Component {
  render() {
    return <MyRouter />;
  }
}

const MyRouter = StackNavigator(
  {
    ProductListPage: {
      screen: Product_List
    },
    ProductDetailPage: {
      screen: Product_Detail
    }
  },
  {
    initialRouteName: "ProductListPage"
  }
);

export default App;
