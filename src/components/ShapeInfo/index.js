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
        {
          week.length &&
          <View style={styles.info}>
            <Text syle={styles.infoTitle}>നീളം</Text>
            <Text style={styles.infoValue}>{week.length}</Text>
            <Text style={styles.infoMesure}>{week.lengthmesure}</Text>
          </View>
        }
        {
          week.weight &&
          <View style={styles.info}>
            <Text style={styles.infoTitle}>ഭാരം</Text>
            <Text style={styles.infoValue}>{week.weight}</Text>
            <Text style={styles.infoMesure}>{week.weightmesure}</Text>
          </View>
        }
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
    color: '#333',
  },
  infoValue: {
    fontSize: 20,
  },
  infoMesure: {
    color: '#aaa',
  },
});
