import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Status = ({ weeks, days, trimester }) => (
  <View style={styles.currentStatus}>
    <View style={[styles.statusBox, styles.statusBoxWeek]}>
      <Text style={styles.statusBoxResult}>{weeks}</Text>
      <Text style={styles.statusBoxTitle}>Weeks</Text>
    </View>
    <View style={[styles.statusBox, styles.statusBoxWeekDay]}>
      <Text style={styles.statusBoxResult}>{days}</Text>
      <Text style={styles.statusBoxTitle}>Days</Text>
    </View>
    <View style={[styles.statusBox, styles.statusBoxTrimester]}>
      <Text style={styles.statusBoxResult}>{trimester}</Text>
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
  },
  statusBoxResult: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 4,
  },
  statusBoxTitle: {
    textAlign: 'center',
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
