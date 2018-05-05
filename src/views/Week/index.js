import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon, Divider } from 'react-native-elements';
import moment from 'moment';
import WeekHeader from './../../components/WeekHeader';

class Week extends Component {
  constructor(props){
    super();
    this.state = {
        age: 'Kooy',
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Icon
          iconStyle={{
            fontSize: 40
          }}
          name='arrow-left'
          type='evilicon'
          onPress={() => console.log('hello')}
        />
      ),
      headerTitle: <WeekHeader />,
      headerRight: (
        <Icon
          iconStyle={{
            fontSize: 40
          }}
          name='arrow-right'
          type='evilicon'
          onPress={() => console.log('hello')}
        />
      ),
    };
  };

  getWeeks = () => moment().diff(moment(this.props.babyStart, 'DD-MMMM-YYYY'), 'w');

  render() {
    return (
      <View style={styles.container}>
        <Button
          backgroundColor="#03A9F4"
          title="Reset"
          buttonStyle={{
            marginTop: 20
          }}
          onPress={() => this.props.navigation.navigate('NewUser')}
        />
        <Text>I'm the Week component</Text>
        <Divider style={{ backgroundColor: '#333' }} />
        <Text>I'm the Week component</Text>
        <Divider style={{ backgroundColor: '#333' }} />
        <Text>{JSON.stringify(this.props.babyDetails)}</Text>
        <Divider style={{ backgroundColor: '#333' }} />
        <Text>{JSON.stringify(this.props.navigation)}</Text>
        <Divider style={{ backgroundColor: '#333' }} />
        <Text>I'm the Week component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ appReducer, appContentReducer }) => ({
  initialProps: appReducer,
  babyDue: appContentReducer.dueDate,
  babyStart: appContentReducer.startDate,
  babyDetails: appContentReducer
});

export default connect(mapStateToProps, null)(Week);
