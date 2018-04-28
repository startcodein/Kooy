/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import { onSignOut } from './../../auth';

const Favourite = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      backgroundColor="#03A9F4"
      title="Reset"
      buttonStyle={{
        marginTop: 20
      }}
      onPress={() => onSignOut().then(() => navigation.navigate('NewUser'))}
    />
    <Text>I'm Favourite</Text>
  </View>
);

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
