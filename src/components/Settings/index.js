/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import { onSignOut } from './../../auth';

const Settings = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      backgroundColor="#03A9F4"
      title="Reset"
      buttonStyle={{
        marginTop: 20
      }}
      onPress={() => onSignOut().then(() => navigation.navigate('NewUser'))}
    />
    <Text>I'm Settings</Text>
  </View>
);

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
