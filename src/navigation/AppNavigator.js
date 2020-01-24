import React from 'react';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import DrawerNavigator from './DrawerNavigator';
import HomeScreen from '../screens/HomeScreen';
import WatchScreen from '../screens/WatchScreen';

export default createAppContainer(
    createStackNavigator({
        Main: DrawerNavigator,
        Home: {screen: HomeScreen},
        Watch: {screen: WatchScreen},
      })
);