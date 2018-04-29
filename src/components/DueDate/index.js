import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
// import 'moment/locale/ml';
import {
  Button,
  FormLabel,
  Card,
} from 'react-native-elements';
import { onSignIn } from './../../auth';

export default class DueDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dueDate: new Date(),
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Card>
          <Text>I'm Register</Text>
          <Text>Due: {JSON.stringify(this.state.dueDate)}</Text>
          <FormLabel>പ്രവസവം പ്രതീക്ഷിക്കുന്ന തിയ്യതി</FormLabel>
          <DatePicker
            style={styles.datepicker}
            customStyles={{
              dateInput: styles.dateInput
            }}
            date={this.state.dueDate}
            mode='date'
            format="DD-MMMM-YYYY"
            minDate={moment(new Date()).subtract(2, 'w')}
            maxDate={moment(new Date()).add(40, 'w')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={(date) => { this.setState({ dueDate: moment(date) }); }}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="തിയ്യതി അറിയില്ല"
            onPress={() => navigation.navigate('CalculateDueDate')}
            buttonStyle={{
              width: 150,
              alignSelf: 'center',
              backgroundColor: 'tomato'
            }}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Submit"
            onPress={() => {
              onSignIn().then(() => navigation.navigate('App'));
            }}
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
  datepicker: {
    width: 295,
  },
  dateInput: {
    marginLeft: 20,
    borderWidth: 0,
    alignItems: 'flex-start',
    // borderBottomWidth: 1
  }
});
