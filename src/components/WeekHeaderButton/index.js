import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';

class WeekHeaderButton extends Component {
  render() {
    const NavButton = () => {
      if (this.props.position === 'left' && this.props.week > 1) {
        return (<Icon
          iconStyle={styles.headerNav}
          name='arrow-left'
          type='evilicon'
          onPress={this.props.prevDay}
        />);
      } else if (this.props.position === 'right' && this.props.week < 42) {
        return (<Icon
          iconStyle={styles.headerNav}
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
  headerNav: {
    fontSize: 30,
    color: '#fff',
  },
});

const mapStateToProps = ({ appContentReducer }) => ({
  week: appContentReducer.headerWeek
});

export default connect(mapStateToProps, null)(WeekHeaderButton);
