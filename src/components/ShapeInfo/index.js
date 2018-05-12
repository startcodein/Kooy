/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Card } from 'react-native-elements';

const MyComponent = ({ week, getImage }) => (
  <Card style={styles.container}>
    <View>
      <Image
        resizeMode="cover"
        source={getImage(week.week)}
      />
      <Text style={styles.shape}>{week.size}</Text>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={
            [
              styles.info,
              {
                backgroundColor: 'skyblue',
                borderRightWidth: 1,
                borderColor: 'tomato'
              }
            ]
          }
        >
          <Text style={styles.infoTitle}>Size: {week.length}</Text>
          <Text style={styles.infoValue}>Size: {week.length}</Text>
          <Text style={styles.infoMesure}>Size: {week.length}</Text>
        </View>
        <View
          style={
            [
              styles.info,
              {
                backgroundColor: 'powderblue',
                padding: 5
              }
            ]
          }
        >
          <Text style={styles.infoTitle}>Weight: {week.weight}</Text>
          <Text style={styles.infoValue}>Weight: {week.weight}</Text>
          <Text style={styles.infoMesure}>Weight: {week.weight}</Text>
        </View>
      </View>
    </View>
  </Card>
);

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shape: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    paddingBottom: 5
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoTitle: {
    fontSize: 25,
  },
  infoValue: {},
  infoMesure: {},
});
