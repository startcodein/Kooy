/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Input } from 'react-native-elements';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the About component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
