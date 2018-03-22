import React, { Component } from "react";
import { View, Text } from "react-native";

const OriginalPrice = price => {
  return (
    <Text
      style={{
        fontSize: 16,
        textDecorationLine: "line-through"
      }}
    >
      Rp. 750,000
    </Text>
  );
};

export default OriginalPrice;
