import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';

class WeekHeaderButton extends Component {
  render() {
    const NavButton = () => {
      if (this.props.position === 'left' && this.props.week > 0) {
        return (<Icon
          iconStyle={{
            fontSize: 40
          }}
          name='arrow-left'
          type='evilicon'
          onPress={this.props.prevDay}
        />);
      } else if (this.props.position === 'right' && this.props.week < 42) {
        return (<Icon
          iconStyle={{
            fontSize: 40
          }}
          name='arrow-right'
          type='evilicon'
          onPress={this.props.nextDay}
        />);
      }
      return null;
    };

    return (
      <TouchableOpacity>
        <NavButton />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ appContentReducer }) => ({
  week: appContentReducer.headerWeek
});

export default connect(mapStateToProps, null)(WeekHeaderButton);
