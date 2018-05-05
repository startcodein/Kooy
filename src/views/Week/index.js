import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';

export default class Week extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      // headerTitle: '<LogoTitle />',
      headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="#fff" />
      ),
    };
  };

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
        <Text>I'm the Week component</Text>
        <Text>{JSON.stringify(this.props)}</Text>
        <Text>I'm the Week component</Text>
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
