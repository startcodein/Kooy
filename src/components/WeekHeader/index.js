import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';

class WeekHeader extends Component {

  getWeeks = () => moment(moment()).diff(moment(this.props.babyStart, 'DD-MMMM-YYYY'), 'w');

  render() {
    return (
      <View style={styles.container}>
        <Text>ആഴ്ച {this.props.week}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});


const mapStateToProps = ({ appContentReducer }) => ({
  week: appContentReducer.headerWeek
});

export default connect(mapStateToProps, null)(WeekHeader);
