import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import { onSignOut } from './../../auth';

class Settings extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button
          backgroundColor="#03A9F4"
          title="Reset"
          buttonStyle={{
            marginTop: 20
          }}
          onPress={() => onSignOut().then(() => navigation.navigate('NewUser'))}
        />
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
      </View>
    );
  }
}

export default Settings;
