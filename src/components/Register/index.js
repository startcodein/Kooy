import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import { onSignIn } from './../../auth';

const Register = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      title="Login"
      color="#fff"
      backgroundColor="#03A9F4"
      buttonStyle={{
        marginTop: 20,
        marginBottom: 10
      }}
      accessibilityLabel="Learn more about this purple button"
      onPress={() => {
        onSignIn().then(() => navigation.navigate('App'));
      }}
    />

    <Text>I'm Register</Text>
    <Text>I'm Register</Text>
    <Text>I'm Register</Text>
  </View>
);

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
