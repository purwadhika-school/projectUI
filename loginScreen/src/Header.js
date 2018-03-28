import React, { Component } from "react";
import { View, Text, ActivityIndicator, Button, Image } from "react-native";

// component ada 2 jenis (class based component)
class Header extends Component {
  // method yg akan dijalankan terlebih dahulu
  constructor() {
    super();
    console.log("hallo");
    // const name = "Yogie";
    // console.log(name)

    // state
    this.state = {
        gender: 'male'
    }
  }

  // lifecycle
  componentDidMount() {
    console.log("line ini dijalankan setelah komponennya tampil");
    console.log(this.props.phone, this.props.city)
    console.log(1 + 1)
    console.log(this.state.gender)
    this.setState({
        gender: 'female'
    })
  }

  // Props

  // State


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
            {/* Props */}
            {this.props.phone} {this.props.city} {this.state.gender}
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
