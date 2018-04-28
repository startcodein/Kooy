import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import 'moment/locale/ml';
import { Button } from 'react-native-elements';
import { onSignIn } from './../../auth';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dueDate: new Date()
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
    <Text>{moment(this.state.dueDate).format('DD-MMMM-YYYY')}</Text>
    <Text>{moment(new Date()).subtract(42, 'w').format('DD-MMMM-YYYY')}</Text>
    <Text>{moment(new Date()).add(40, 'w').format('DD-MMMM-YYYY')}</Text>

    <Text>പ്രവസവം പ്രതീക്ഷിക്കുന്ന തിയ്യതി</Text>
    <DatePicker
      style={styles.datepicker}
      date={this.state.dueDate}
      mode='date'
      format="DD-MMMM-YYYY"
      minDate={moment(this.state.dueDate).add(2, 'w')}
      maxDate={moment(this.state.dueDate).add(40, 'w')}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      showIcon={false}
      onDateChange={(date) => { this.setState({ dueDate: date }); }}
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
