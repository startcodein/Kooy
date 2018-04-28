import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Button } from 'react-native-elements';
import { onSignIn } from './../../auth';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

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

    <Text>I'm Register</Text>
    <Text>I'm Register</Text>
    <Text>I'm Register</Text>

    <DatePicker
      style={styles.datepicker}
      date={this.state.date}
      mode='date'
      placeholder="തിയ്യതി"
      format="DD-MMMM-YYYY"
      minDate="10-04-2018"
      maxDate="30-04-2018"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      onDateChange={(date) => { this.setState({ date: date }); }}
    />
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datepicker: {
    width: 350
  }
});
