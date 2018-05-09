import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Button, Divider } from 'react-native-elements';
import moment from 'moment';
import { setHeaderWeek } from './../../store/actions/appContentAction';
import { getWeekDetails } from './../../store/actions/appAction';

import WeekHeader from './../../components/WeekHeader';
import WeekHeaderButton from './../../components/WeekHeaderButton';

class Week extends Component {
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

  constructor() {
    super();
    this.state = {
        age: 'Kooy',
    };
  }

  componentWillMount() {
    this.props.setHeaderWeek(this.getWeeks());
    this.setState({
      // currentWeek: this.getWeeks()
    });
    this.props.getWeekDetails();

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
    const { fullWeeks, week } = this.props;

    let currentWeekData;
    if (fullWeeks) {
      currentWeekData = fullWeeks.find(thisWeek => thisWeek.id === week);
    }
    return (
      <ScrollView style={styles.container}>
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
        <Divider style={{ backgroundColor: 'tomato' }} />
        {
          currentWeekData ?
          <Text>{JSON.stringify(currentWeekData)}</Text> :
          <Text>Loading...</Text>
        }
        <Divider style={{ backgroundColor: '#333' }} />
        <Text>{JSON.stringify(this.props.babyDetails)}</Text>
        <Divider style={{ backgroundColor: '#333' }} />
        <Text>{JSON.stringify(this.props.navigation)}</Text>
        <Divider style={{ backgroundColor: '#333' }} />
        <Text>I'm the Week component</Text>
      </ScrollView>
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
    },
    getWeekDetails: () => {
      dispatch(getWeekDetails());
    }
  });

const mapStateToProps = ({ appReducer, appContentReducer }) => ({
  initialProps: appReducer,
  fullWeeks: appReducer.weekDetails,
  babyDue: appContentReducer.dueDate,
  babyStart: appContentReducer.startDate,
  week: appContentReducer.headerWeek,
  babyDetails: appContentReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Week);
