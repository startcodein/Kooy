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
  Card,
  Icon
} from 'react-native-elements';
import { setDueDate } from './../../store/actions/appContentAction';

class CalculateDueDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      dueDate: '',
    };

    this.getDueDate = this.getDueDate.bind(this);
    this.updateDueDate = this.updateDueDate.bind(this);
  }

  getDueDate(date) {
    this.setState({
      startDate: moment(date).format('DD-MMMM-YYYY'),
      dueDate: moment(date).add(40, 'w').format('DD-MMMM-YYYY')
    });
  }

  updateDueDate() {
    this.props.setDueDate(this.state);
    // this.props.navigation.goBack();
// onPress={() => {
  /* 1. Navigate to the Details route with params */
  this.props.navigation.navigate('Register', {
    calculatedResult: this.state
  });
// }}
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Icon
          containerStyle={{
            alignSelf: 'flex-end',
            marginRight: 15
          }}
          name='close'
          type='evilicon'
          color='#517fa4'
          onPress={() => navigation.goBack()}
        />

        <Card style={{ backgroundColor: 'tomato' }}>
          <Text>State: {JSON.stringify(this.state)}</Text>
          <FormLabel>അവസാനത്തെ ആർത്തവം</FormLabel>
          <DatePicker
            style={styles.datepicker}
            customStyles={{
              dateInput: styles.dateInput,
              dateIcon: styles.dateIcon
            }}
            date={this.state.startDate}
            mode='date'
            format="DD-MMMM-YYYY"
            minDate={moment(new Date()).subtract(this.props.minWeeks, 'w')}
            maxDate={moment(new Date())}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={this.getDueDate}
            placeholder=" "
            showIcon
          />
          {
            moment(this.state.dueDate, 'DD-MMMM-YYYY', true).isValid() &&
              <Text style={styles.result}>
                തന്ന തിയതി അനുസരിച്ച് പ്രസവം നടക്കാവുന്നത് <Text
                  style={{ fontWeight: '600', color: '#e16d65' }}
                >
                  { moment(this.state.dueDate).format('DD-MMMM-YYYY')}</Text> ഇനായിരിക്കും </Text>
          }
          <Button
            buttonStyle={{ marginTop: 20 }}
            title="Submit"
            outline
            color="#e16d65"
            onPress={this.updateDueDate}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  },
  datepicker: {
    width: 300,
    marginBottom: 10
  },
  dateInput: {
    marginLeft: 20,
    alignItems: 'flex-start',
    borderWidth: 0,
    borderBottomWidth: 1
  },
  dateIcon: {
    position: 'absolute',
    right: 0
  },
  result: {
    marginLeft: 20,
    marginRight: 12
  },
  button: {

  }
});

const mapStateToProps = ({ appReducer, appContentReducer }) => ({
  minWeeks: appReducer.minPeriodWeeks,
  babyDetails: appContentReducer
});

const mapDispatchToProps = (dispatch) => ({
    setDueDate: (date) => {
      dispatch(setDueDate(date));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(CalculateDueDate);
