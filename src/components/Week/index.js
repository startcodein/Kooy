import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';

export default class Week extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          backgroundColor="#03A9F4"
          title="Reset"
          buttonStyle={{
            marginTop: 20
          }}
          onPress={() => this.props.navigation.navigate('NewUser')}
        />
        <Text>I'm the Week component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
