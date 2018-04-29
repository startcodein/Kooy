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
  FormLabel,
  Card,
} from 'react-native-elements';

export default class DueDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dueDate: new Date(),
      periodDate: new Date()
    };

    this.getDueDate = this.getDueDate.bind(this);
  }

  getDueDate(date) {
    this.setState({ periodDate: moment(date) });
  }
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Text>I'm Register</Text>
          <Text>Due: {JSON.stringify(this.state.dueDate)}</Text>
          <Text>Period: {JSON.stringify(this.state.periodDate)}</Text>
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

          <Text style={{ textAlign: 'center' }}>തിയ്യതി അറിയില്ല</Text>
          <FormLabel>അവസാനത്തെ ആർത്തവം</FormLabel>
          <DatePicker
            style={styles.datepicker}
            customStyles={{
              dateInput: styles.dateInput
            }}
            date={this.state.periodDate}
            mode='date'
            format="DD-MMMM-YYYY"
            minDate={moment(new Date()).subtract(42, 'w')}
            maxDate={moment(new Date())}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={this.getDueDate}
          />

        <Text style={{ fontSize: 30, textAlign: 'center' }}>
          {moment(this.state.periodDate).add(40, 'w').format('DD-MMMM-YYYY')}
        </Text>
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
