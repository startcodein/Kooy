import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Calendar = () => (
  <View style={styles.container}>
    <Text>I'm Calendar</Text>
  </View>
);

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
