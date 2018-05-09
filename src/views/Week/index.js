import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon, Divider } from 'react-native-elements';
import moment from 'moment';
import { setHeaderWeek } from './../../store/actions/appContentAction';

import WeekHeader from './../../components/WeekHeader';
import WeekHeaderButton from './../../components/WeekHeaderButton';

import data from './../../data/weekDetails.json';

class Week extends Component {
  constructor(props) {
    super();
    this.state = {
        age: 'Kooy',
    };
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <WeekHeaderButton
          position='left'
          prevDay={params.prevDay}
        />
      ),
      headerTitle: <WeekHeader />,
      headerRight: (
        <WeekHeaderButton
          position='right'
          nextDay={params.nextDay}
        />
      ),
    };
  };

  componentWillMount() {
    this.props.setHeaderWeek(this.getWeeks());
    this.setState({
      // currentWeek: this.getWeeks()
    });

    this.props.navigation.setParams({ prevDay: this.prevDay });
    this.props.navigation.setParams({ nextDay: this.nextDay });
  }

  getWeeks = () => moment().diff(moment(this.props.babyStart, 'DD-MMMM-YYYY'), 'w');

  prevDay = () => {
    this.props.setHeaderWeek(this.props.week - 1);
  }

  nextDay = () => {
    this.props.setHeaderWeek(this.props.week + 1);
  }


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
        <Text>{JSON.stringify(data)}</Text>
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

const mapDispatchToProps = (dispatch) => ({
    setHeaderWeek: (week) => {
      dispatch(setHeaderWeek(week));
    }
  });

const mapStateToProps = ({ appReducer, appContentReducer }) => ({
  initialProps: appReducer,
  babyDue: appContentReducer.dueDate,
  babyStart: appContentReducer.startDate,
  week: appContentReducer.headerWeek,
  babyDetails: appContentReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Week);
