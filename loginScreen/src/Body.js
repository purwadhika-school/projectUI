import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

// component ada 2 jenis (function based component)
const Body = () => {
  return (
    <View
      style={{
        flex: 2,
        justifyContent: "flex-end",
        marginBottom: 15
      }}
    >
      <TouchableOpacity
        style={{
          alignSelf: "center",
          borderRadius: 5,
          backgroundColor: "white",
          width: "92%"
        }}
      >
        {/* foodUI - react-native init foodUI  */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "30%" }}>
            <Image
              style={{
                margin: 15,
                width: 25,
                height: 25,
                resizeMode: "contain"
              }}
              source={require("../assets/g_icon.png")}
            />
          </View>
          <View style={{ width: "70%" }}>
            <Text
              style={{
                margin: 15,
                fontSize: 15,
                color: "red"
              }}
            >
              Continue with Google
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 10,
          alignSelf: "center",
          borderRadius: 5,
          backgroundColor: "white",
          width: "92%"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "30%" }}>
            <Image
              style={{
                margin: 15,
                width: 25,
                height: 25,
                resizeMode: "contain"
              }}
              source={require("../assets/fb_icon.png")}
            />
          </View>
          <View style={{ width: "70%" }}>
            <Text
              style={{
                margin: 15,
                fontSize: 15,
                color: "red"
              }}
            >
              Continue with Facebook
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 10,
          alignSelf: "center",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "white",
          backgroundColor: "red",
          width: "92%"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "30%" }}>
            <Image
              style={{
                margin: 15,
                width: 25,
                height: 25,
                resizeMode: "contain"
              }}
              source={require("../assets/mail_icon.png")}
            />
          </View>
          <View style={{ width: "70%" }}>
            <Text
              style={{
                margin: 15,
                fontSize: 15,
                color: "white"
              }}
            >
              Continue with Email
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Body; // Supaya bisa di-import di file yg lain
