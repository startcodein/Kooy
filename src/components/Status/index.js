import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import moment from 'moment';

const Status = ({ startDate }) => (
  <View style={styles.currentStatus}>
    <View style={[styles.statusBox, styles.statusBoxWeek]}>
      <Text style={styles.statusBoxResult}>
        {moment(moment()).diff(moment(startDate, 'DD-MMMM-YYYY'), 'w')}
      </Text>
      <Text style={styles.statusBoxTitle}>Weeks</Text>
    </View>
    <View style={[styles.statusBox, styles.statusBoxWeekDay]}>
      <Text style={styles.statusBoxResult}>
        {
          moment(moment()).diff(moment(startDate, 'DD-MMMM-YYYY'), 'd') -
          (moment(moment()).diff(moment(startDate, 'DD-MMMM-YYYY'), 'w') * 7)
        }
      </Text>
      <Text style={styles.statusBoxTitle}>Days</Text>
    </View>
    <View style={[styles.statusBox, styles.statusBoxTrimester]}>
      <Text style={styles.statusBoxResult}>0</Text>
      <Text style={styles.statusBoxTitle}>Tremestr</Text>
    </View>
  </View>
);

export default Status;

const styles = StyleSheet.create({
  currentStatus: {
    flex: 1,
    flexDirection: 'row'
  },
  statusBox: {
    flex: 1,
    padding: 10,
    // height: 100
  },
  statusBoxResult: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 4,
  },
  statusBoxTitle: {
    textAlign: 'center',
    // fontWeight: '600',
    marginBottom: 4
  },
  statusBoxWeek: {
    backgroundColor: '#2196F3',
  },
  statusBoxWeekDay: {
    backgroundColor: '#8BC34A',
  },
  statusBoxTrimester: {
    backgroundColor: '#e3aa1a',
  },
});
