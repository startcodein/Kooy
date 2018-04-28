/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Settings = ({}) => (
  <View style={styles.container}>
    <Text>I'm Settings</Text>
  </View>
);

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
