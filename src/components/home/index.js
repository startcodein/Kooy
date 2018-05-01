import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { onSignOut } from './../../auth';

class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button
          backgroundColor="#03A9F4"
          title="Reset"
          buttonStyle={{
            marginTop: 20
          }}
          onPress={() => onSignOut().then(() => navigation.navigate('NewUser'))}
        />
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>

        <Text>Due: {JSON.stringify(this.props.babyDue)}</Text>

        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
        <Text>I'm the Kooy component</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ appReducer, appContentReducer }) => ({
// const mapStateToProps = (state) => ({
  initialProps: appReducer,
  babyDue: appContentReducer.dueDate
  // notificationDate: appReducer.notificationDate,
  // toggleAlarm: appReducer.toggleAlarm
});

export default connect(mapStateToProps, null)(Home);
