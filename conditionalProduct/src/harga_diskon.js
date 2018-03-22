import React, { Component } from "react";
import { View, Text } from "react-native";

const HargaDiskon = Object => {
  return (
    <View style={{ backgroundColor: "green", width: "35%" }}>
      <Text
        style={{
          margin: 10,
          color: "white",
          fontSize: 20,
          fontWeight: "500"
        }}
      >
        {Object.price_disc}
      </Text>
    </View>
  );
};

export default HargaDiskon;
