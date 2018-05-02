import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import moment from 'moment';
// import 'moment/locale/ml';
import { onSignOut } from './../../auth';
import { setDueDate } from './../../store/actions/appContentAction';
//
class Home extends Component {
  componentDidMount() {
    this.checkDueDate();
  }

  componentDidUpdate() {
    this.checkDueDate();
  }

  checkDueDate = () => {
    if (moment(this.props.babyDue, 'DD-MMMM-YYYY', true).isValid() === false) {
      this.props.navigation.navigate('NewUser');
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
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
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>

        <Text>Due: {JSON.stringify(this.props.babyDue, 'DD-MMMM-YYYY')}</Text>
        <Text>Validation: {moment(this.props.babyDue, 'DD-MMMM-YYYY').isValid()}</Text>

        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
      </View>
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
  babyDue: appContentReducer.dueDate
  // notificationDate: appReducer.notificationDate,
  // toggleAlarm: appReducer.toggleAlarm
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
