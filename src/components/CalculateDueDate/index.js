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

export default class CalculateDueDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periodDate: new Date()
    };

    this.getDueDate = this.getDueDate.bind(this);
  }

  getDueDate(date) {
    this.setState({ periodDate: moment(date) });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Card style={{ flex: 1 }}>
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
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Submit"
            onPress={() => navigation.goBack()}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
