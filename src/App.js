import React, { Component } from 'react';
import { createRootNavigator } from './config/router';

export default class Kooy extends Component {
  render() {
    const Layout = createRootNavigator();
    return <Layout />;
  }
}
// console.disableYellowBox = true;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
