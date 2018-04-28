/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Favourite = ({}) => (
  <View style={styles.container}>
    <Text>I'm Favourite</Text>
  </View>
);

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
