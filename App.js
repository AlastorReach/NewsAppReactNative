//This is an example code for NavigationDrawer//
import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

//Navigators
import DrawerNavigator from './src/navigation/DrawerNavigator';
 
const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends React.Component{
  render() {
    return <AppContainer />
  }
}