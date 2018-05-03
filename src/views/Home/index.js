import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import moment from 'moment';
// import 'moment/locale/ml';
import { onSignOut } from './../../auth';
import { setDueDate } from './../../store/actions/appContentAction';
import Status from './../../components/Status';

class Home extends Component {

  componentDidMount() {
    this.checkDueDate();
  }

  componentDidUpdate() {
    this.checkDueDate();
  }

  getWeeks = () => moment(moment()).diff(moment(this.props.babyStart, 'DD-MMMM-YYYY'), 'w');

  getDays = () => moment(moment()).diff(moment(this.props.babyStart, 'DD-MMMM-YYYY'), 'd') - (moment(moment()).diff(moment(this.props.babyStart, 'DD-MMMM-YYYY'), 'w') * 7);

  getTrimester = (weeks) => {
    if (weeks <= 13) {
      return 1;
    } else if (weeks <= 27) {
      return 2;
    }
    return 3;
  }

  checkDueDate = () => {
    if (moment(this.props.babyDue, 'DD-MMMM-YYYY', true).isValid() === false) {
      this.props.navigation.navigate('NewUser');
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <Button
          backgroundColor="#03A9F4"
          title="Log Out"
          buttonStyle={{
            marginTop: 20,
            marginBottom: 5
          }}
          onPress={() => onSignOut().then(() => navigation.navigate('NewUser'))}
        />
        <Button
          backgroundColor="#03A9F4"
          title="Reset Data"
          buttonStyle={{
            marginBottom: 20
          }}
          onPress={() => this.props.setDueDate('')}
        />

        <Status
          days={this.getDays()}
          weeks={this.getWeeks()}
          trimester={this.getTrimester()}
        />

        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
        <Text>Due: {JSON.stringify(this.props.babyDue, 'DD-MMMM-YYYY')}</Text>
        <Text>{moment(this.props.babyDue).subtract(40, 'w').format('DD-MMMM-YYYY')}</Text>
        <Text>{moment(this.props.babyDue).add(2, 'w').format('DD-MMMM-YYYY')}</Text>
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component {this.props.babyStart}</Text>
        <Text>{moment(moment()).diff(moment(this.props.babyStart, 'DD-MMMM-YYYY'), 'w')}</Text>
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
        <Text>{JSON.stringify(this.props.babyDetails)}</Text>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    setDueDate: (date) => {
      dispatch(setDueDate(date));
    }
  });


const mapStateToProps = ({ appReducer, appContentReducer }) => ({
// const mapStateToProps = (state) => ({
  initialProps: appReducer,
  babyDue: appContentReducer.dueDate,
  babyStart: appContentReducer.startDate,
  babyDetails: appContentReducer
  // notificationDate: appReducer.notificationDate,
  // toggleAlarm: appReducer.toggleAlarm
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
