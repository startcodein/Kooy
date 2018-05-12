import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { setHeaderWeek } from './../../store/actions/appContentAction';
import { getWeekDetails } from './../../store/actions/appAction';

import WeekHeader from './../../components/WeekHeader';
import WeekHeaderButton from './../../components/WeekHeaderButton';
import ShapeInfo from './../../components/ShapeInfo';

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

  getImage = (week) => {
    switch (week) {
      case 1:
        return require('./../../img/weeks/1.png');
      case 2:
        return require('./../../img/weeks/2.png');
      case 3:
        return require('./../../img/weeks/3.png');
      case 4:
        return require('./../../img/weeks/4.png');
      case 5:
        return require('./../../img/weeks/5.png');
      case 6:
        return require('./../../img/weeks/6.png');
      case 7:
        return require('./../../img/weeks/7.png');
      case 8:
        return require('./../../img/weeks/8.png');
      case 9:
        return require('./../../img/weeks/9.png');
      case 10:
        return require('./../../img/weeks/10.png');
      case 11:
        return require('./../../img/weeks/11.png');
      case 12:
        return require('./../../img/weeks/12.png');
      case 13:
        return require('./../../img/weeks/13.png');
      case 14:
        return require('./../../img/weeks/14.png');
      case 15:
        return require('./../../img/weeks/15.png');
      case 16:
        return require('./../../img/weeks/16.png');
      case 17:
        return require('./../../img/weeks/17.png');
      case 18:
        return require('./../../img/weeks/18.png');
      case 19:
        return require('./../../img/weeks/19.png');
      case 20:
        return require('./../../img/weeks/20.png');
      case 21:
        return require('./../../img/weeks/21.png');
      case 22:
        return require('./../../img/weeks/22.png');
      case 23:
        return require('./../../img/weeks/23.png');
      case 24:
        return require('./../../img/weeks/24.png');
      case 25:
        return require('./../../img/weeks/25.png');
      case 26:
        return require('./../../img/weeks/26.png');
      case 27:
        return require('./../../img/weeks/27.png');
      case 28:
        return require('./../../img/weeks/28.png');
      case 29:
        return require('./../../img/weeks/29.png');
      case 30:
        return require('./../../img/weeks/30.png');
      case 31:
        return require('./../../img/weeks/31.png');
      case 32:
        return require('./../../img/weeks/32.png');
      case 33:
        return require('./../../img/weeks/33.png');
      case 34:
        return require('./../../img/weeks/34.png');
      case 35:
        return require('./../../img/weeks/35.png');
      case 36:
        return require('./../../img/weeks/36.png');
      case 37:
        return require('./../../img/weeks/37.png');
      case 38:
        return require('./../../img/weeks/38.png');
      case 39:
        return require('./../../img/weeks/39.png');
      case 40:
        // return require('./../../img/weeks/40.png');
      case 41:
        // return require('./../../img/weeks/41.png');
      case 42:
        // return require('./../../img/weeks/42.png');
      default:
      return null;
    }
  }

  render() {
    const { fullWeeks, week } = this.props;
    let currentWeekData;
    if (fullWeeks) {
      currentWeekData = fullWeeks.find(thisWeek => thisWeek.id === week);
    }
    return (
      <ScrollView style={styles.container}>
        {
          currentWeekData ?
          <ShapeInfo
            week={currentWeekData}
            getImage={this.getImage}
          /> :
          <Text>Loading...</Text>
        }
      {
        /*
        <Text>I'm the Week component</Text>
        <Divider style={{ backgroundColor: '#333' }} />
        <Text>I'm the Week component</Text>
        <Divider style={{ backgroundColor: 'tomato' }} />
        <Divider style={{ backgroundColor: '#333' }} />
        <Text>{JSON.stringify(this.props.babyDetails)}</Text>
        <Divider style={{ backgroundColor: '#333' }} />
        <Text>{JSON.stringify(this.props.navigation)}</Text>
        <Divider style={{ backgroundColor: '#333' }} />
        <Text>I'm the Week component</Text>
        */
      }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoCard: {
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
