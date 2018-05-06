import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

export default class WeekHeaderButton extends Component {
  render() {
    return (
      <TouchableOpacity>
        { this.props.position === 'left' &&
          <Icon
            iconStyle={{
              fontSize: 40
            }}
            name='arrow-left'
            type='evilicon'
            onPress={this.props.prevDay}
          />
        }
        { this.props.position === 'right' &&
          <Icon
            iconStyle={{
              fontSize: 40
            }}
            name='arrow-right'
            type='evilicon'
            onPress={this.props.nextDay}
          />
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
