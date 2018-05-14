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
    this.state = {
      name: '',
      dueDate: '',
      startDate: ''
    };
    this.onChangeDatePicker = this.onChangeDatePicker.bind(this);
  }

  componentDidMount() {
    // this.props.navigation.navigate('Week');
    // alert('hello mate');
  }

  componentWillUpdate() {
    // this.props.navigation.navigate('Week');
    // Alert.alert('hello mate');
    // console.warn('event');
  }

  componentWillUpdate() {
    // alert('kooy');
  }

  componentDidUpdate() {
    // alert('kooy');
    if (this.props.navigation.state.params) {
      if (this.props.navigation.state.params.calculatedResult) {
        console.warn('Kooooy');
        console.warn(this.props.navigation.state.params.calculatedResult);
      }
    }
  }

  onChangeDatePicker(date) {
    this.props.setDueDate(date);
  }

  onSubmit = event => {
    // event.preventDefault();
    // console.warn('event');
    this.props.setDueDate(this.state);
  }

  updateValue(text, field) {
    console.warn(text, field);
    if (field === 'name') {
      this.setState({
        name: text
      });
    } else if (field === 'date') {
      this.setState({
        dueDate: text,
        startDate: text ? moment(text).subtract(40, 'w').format('DD-MMMM-YYYY') : ''
      });
    }
  }

  render() {
    const { navigation, initialProps, babyDetails } = this.props;
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(navigation.state.params)}</Text>
        <Text>------------------------------------</Text>
        <Text>State: {JSON.stringify(this.state)}</Text>
        <Text>------------------------------------</Text>
        <Text>babyDetails: {JSON.stringify(babyDetails)}</Text>
        <Card
          title="രജിസ്റ്റർ"
        >
          <FormLabel>പേര്</FormLabel>
          <FormInput
            onChangeText={(text) => this.updateValue(text, 'name')}
          />
          <FormLabel>പ്രവസവം പ്രതീക്ഷിക്കുന്ന തിയ്യതി</FormLabel>
          <DatePicker
            style={styles.datepicker}
            customStyles={{
              dateInput: styles.dateInput,
              dateIcon: styles.dateIcon
            }}
            date={this.state.dueDate}
            mode='date'
            format="DD-MMMM-YYYY"
            minDate={moment(new Date()).subtract(initialProps.minDueWeeks, 'w')}
            maxDate={moment(new Date()).add(initialProps.maxDueWeeks, 'w')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            placeholder=" "
            onDateChange={(date) => this.updateValue(date, 'date')}
            showIcon
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="തിയ്യതി അറിയില്ല"
            onPress={() => navigation.navigate('CalculateDueDate')}
            color="#e16d65"
            fontSize={12}
            outline
            rounded
            buttonStyle={{
              width: 130,
              padding: 5,
              alignSelf: 'center',
              marginTop: 10,
            }}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Submit"
            onPress={this.onSubmit}
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
    justifyContent: 'center'
  },
  datepicker: {
    width: 300,
  },
  dateInput: {
    marginLeft: 20,
    alignItems: 'flex-start',
    borderWidth: 0,
    borderBottomWidth: 1
  },
  dateIcon: {
    position: 'absolute',
    right: 0,
  },
});

const mapStateToProps = ({ appReducer, appContentReducer }) => ({
  initialProps: appReducer,
  babyDetails: appContentReducer
});

const mapDispatchToProps = (dispatch) => ({
    setDueDate: (date) => {
      dispatch(setDueDate(date));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Register);
