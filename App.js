import React from 'react';
import {createAppContainer} from 'react-navigation';

//Navigators
import DrawerNavigator from './src/navigation/DrawerNavigator';

//El navegador principal de la app es el Drawer
const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends React.Component{
  render() {
    return <AppContainer />
  }
}