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

class SecondHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Home',
  };

  render() {
    console.log('render second home');
    const {navigate} = this.props.navigation;
    BackgroundTimer.setTimeout(() => navigate('ThirdHome'), 5000);
    return (
      <Button
        title="Go to Home Screen"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
    );
  }
}

export default SecondHomeScreen;
