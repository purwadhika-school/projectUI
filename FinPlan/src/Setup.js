/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, Text, View } from "react-native";
import { connect } from "react-redux";
import { fetchData } from "./actions";
import { StackNavigator } from "react-navigation";
import Login from "./screens/login";
import Register from "./screens/register";
import Home from "./screens/home";
import IncomeList from "./screens/income_list";
import IncomeAdd from "./screens/income_add";
import ExpenseList from "./screens/expense_list";
import ExpenseAdd from "./screens/expense_add";

class Setup extends Component {
  render() {
    return <Login />;
  }
}

const RootStack = StackNavigator(
  {
    LoginPage: {
      screen: Setup
    },
    RegisterPage: {
      screen: Register
    },
    HomePage: {
      screen: Home
    },
    IncomeListPage: {
      screen: IncomeList
    },
    IncomeAddPage: {
      screen: IncomeAdd
    },
    ExpenseListPage: {
      screen: ExpenseList
    },
    ExpenseAddPage: {
      screen: ExpenseAdd
    }
  },
  {
    initialRouteName: "LoginPage"
  }
);

export default connect()(RootStack);
