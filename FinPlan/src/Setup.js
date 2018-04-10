/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, Text, View } from "react-native";
import { connect } from "react-redux";
import { fetchData } from "./actions";
import Login from './screens/login'
import Register from './screens/register'

class Setup extends Component {
  render() {
    return <Register />
  }
}

export default connect()(Setup);
