import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

class IncomeAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBtn: ""
    };
  }

  render() {
    const { selectedBtn } = this.state;
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginLeft: 20
          }}
        >
          <TouchableOpacity
            onPress={() => this.setState({ selectedBtn: "regular" })}
            style={{
              backgroundColor:
                selectedBtn === "regular" ? "#77dd77" : "#F1F1F1",
              width: "20%",
              borderRadius: 10
            }}
          >
            <Text
              style={{
                color: selectedBtn === "regular" ? "white" : null,
                margin: 15,
                textAlign: "center",
                fontWeight: "500"
              }}
            >
              Regular
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ selectedBtn: "others" })}
            style={{
              backgroundColor: selectedBtn === "others" ? "#77dd77" : "#F1F1F1",
              width: "20%",
              borderRadius: 10,
              marginLeft: 15
            }}
          >
            <Text
              style={{
                color: selectedBtn === "others" ? "white" : null,
                margin: 15,
                textAlign: "center",
                fontWeight: "500"
              }}
            >
              Others
            </Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 15, marginTop: 15 }}>
            * Type of income
          </Text>
        </View>
        
      </View>
    );
  }
}

export default IncomeAdd;
