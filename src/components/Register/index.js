import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
// import 'moment/locale/ml';
import {
  Button,
  FormLabel,
  FormInput,
  Card
} from 'react-native-elements';
import { setDueDate } from './../../store/actions/appContentAction';
import { onSignIn } from './../../auth';

class Register extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.props.setDueDate(date);
  }

  render() {
    const { navigation, initialProps, babyDetails } = this.props;
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
          <Text>Due: {JSON.stringify(initialProps)}</Text>
          <Text>babyDetails: {JSON.stringify(babyDetails)}</Text>
          <FormLabel>പ്രവസവം പ്രതീക്ഷിക്കുന്ന തിയ്യതി</FormLabel>
          <DatePicker
            style={styles.datepicker}
            customStyles={{
              dateInput: styles.dateInput
            }}
            date={babyDetails.dueDate}
            mode='date'
            format="DD-MMMM-YYYY"
            minDate={moment(new Date()).subtract(initialProps.minDueWeeks, 'w')}
            maxDate={moment(new Date()).add(initialProps.maxDueWeeks, 'w')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={this.onChange}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="തിയ്യതി അറിയില്ല"
            onPress={() => navigation.navigate('CalculateDueDate')}
            buttonStyle={{
              width: 150,
              alignSelf: 'flex-end',
              backgroundColor: 'tomato'
            }}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Continue"
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
    borderBottomWidth: 1
  },
});

const mapStateToProps = ({ appReducer, appContentReducer }) => ({
// const mapStateToProps = (state) => ({
  initialProps: appReducer,
  babyDetails: appContentReducer
  // notificationDate: appReducer.notificationDate,
  // toggleAlarm: appReducer.toggleAlarm
});

const mapDispatchToProps = (dispatch) => ({
    setDueDate: (date) => {
      dispatch(setDueDate(date));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Register);
