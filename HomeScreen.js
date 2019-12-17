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
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    console.log('render home');
    const {navigate} = this.props.navigation;
    BackgroundTimer.setTimeout(() => navigate('SecondHome'), 5000);
    return (
      <Button
        title="Go to SecondHomeScreen"
        onPress={() => navigate('SecondHome')}
      />
    );
  }
}

export default HomeScreen;
