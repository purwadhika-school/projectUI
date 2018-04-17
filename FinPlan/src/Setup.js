/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, Text, View } from "react-native";
import { connect } from "react-redux";
import { fetchData } from "./actions";
import Login from "./screens/login";
import Register from "./screens/register";
import Home from "./screens/home";
import IncomeList from "./screens/income_list";
import IncomeAdd from "./screens/income_add";
import ExpenseList from "./screens/expense_list";

class Setup extends Component {
  render() {
    return <ExpenseList />;
  }
}

export default connect()(Setup);
