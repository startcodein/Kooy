import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Button,
  FormLabel,
  FormInput,
  Card
} from 'react-native-elements';
import { onSignIn } from './../../auth';

export default class Register extends Component {
  render() {
    const { navigation } = this.props;
    return (
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

    <Card>
      <FormLabel>പേര്</FormLabel>
      <FormInput placeholder="നിങ്ങളുടെ പേര്" />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />
      <FormLabel>Confirm Password</FormLabel>
      <FormInput secureTextEntry placeholder="Confirm Password..." />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="Continue"
        onPress={() => navigation.navigate('DueDate')}
      />
    </Card>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
