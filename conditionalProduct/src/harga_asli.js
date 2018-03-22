import React, { Component } from "react";
import { View, Text } from "react-native";

const OriginalPrice = data => {
  return (
    <Text
      style={{
        fontSize: 16,
        textDecorationLine: "line-through"
      }}
    >
      {data.price_ori}
    </Text>
  );
};

export default OriginalPrice;
