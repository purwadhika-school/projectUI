import React, { Component } from "react";
import { View, Text, ActivityIndicator, Button, Image } from "react-native";

// component ada 2 jenis (class based component)
class Header extends Component {
  // // method yg akan dijalankan terlebih dahulu
  // constructor(){}

  // // lifecycle
  // componentDidMount(){}

  // method wajib
  render() {
    return (
      <View style={{ flex: 3 }}>
        {/* icon */}
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            flex: 2
          }}
        >
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={require("../assets/todo_icon.png")}
          />
        </View>

        {/* text */}
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "700",
              marginTop: 10
            }}
          >
            Welcome to Todoist
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "center",
              marginTop: 10
            }}
          >
            Create an account to save your tasks {"\n"}
            an access them anywhere. It's free. {"\n"}Forever.
          </Text>
        </View>
      </View>
    );
  }
}

export default Header; // Supaya bisa di-import di file yg lain
