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
      periodDate: new Date()
    };

    this.getDueDate = this.getDueDate.bind(this);
    this.updateDueDate = this.updateDueDate.bind(this);
  }

  getDueDate(date) {
    this.setState({
      periodDate: moment(date).format('DD-MMMM-YYYY'),
      dueDate: moment(date).add(40, 'w').format('DD-MMMM-YYYY')
    });
  }

  updateDueDate() {
    this.props.setDueDate(this.state.dueDate);
    this.props.navigation.goBack();
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

        <Card>
          <FormLabel>അവസാനത്തെ ആർത്തവം</FormLabel>
          <DatePicker
            style={styles.datepicker}
            customStyles={{
              dateInput: styles.dateInput
            }}
            date={this.state.periodDate ? this.state.periodDate : ''}
            mode='date'
            format="DD-MMMM-YYYY"
            minDate={moment(new Date()).subtract(this.props.minWeeks, 'w')}
            maxDate={moment(new Date())}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={this.getDueDate}
          />

          {
            moment(this.state.dueDate, 'DD-MMMM-YYYY', true).isValid() &&
            <View>
              <Text>തന്ന തിയതി അനുസരിച്ച് പ്രസവം നടക്കാവുന്ന തിയതി</Text>
              <Text style={{ fontSize: 30, textAlign: 'center' }}>
                {moment(this.state.dueDate).format('DD-MMMM-YYYY')}
              </Text>
            </View>
          }
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Submit"
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
    width: 295,
  },
  dateInput: {
    marginLeft: 20,
    borderWidth: 0,
    alignItems: 'flex-start',
    // borderBottomWidth: 1
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
