/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Button} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

class ThirdHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Third Home',
  };

  render() {
    console.log('render third home');
    const {navigate} = this.props.navigation;
    BackgroundTimer.setTimeout(() => navigate('Home'), 5000);
    return (
      <Button
        title="Go to Home Screen"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
    );
  }
}

export default ThirdHomeScreen;
