import React, { Component } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

class IncomeList extends Component {
  render() {
    renderItem = () => {
      return <Text>asdas</Text>;
    };

    return (
      <View style={{ marginLeft: 25, flex: 1 }}>
        <FlatList
          data={[{ key: "a" }, { key: "b" }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
        <TouchableOpacity
          style={{
            width: "40%",
            borderColor: "#F1F1F1",
            borderRadius: 3,
            backgroundColor: "#77dd77",
            borderWidth: 1,
            marginRight: 5
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20, margin: 10 }}>
            Add Income
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default IncomeList;
