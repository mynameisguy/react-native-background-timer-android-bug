/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SecondHomeScreen from './SecondHomeScreen';
import HomeScreen from './HomeScreen';
import ThirdHomeScreen from './ThirdHomeScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  SecondHome: {screen: SecondHomeScreen},
  ThirdHome: {screen: ThirdHomeScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
