import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import DrawerContent from '../common/components/DrawerContent';

import HomeStackNavigator from './HomeStackNavigator';
import ScheduleScreen from '../screens/ScheduleScreen';
import SettingsScreen from '../screens/SettingsScreen';

const DrawerNavigator = createDrawerNavigator({
    Home: HomeStackNavigator,
},
{
    contentComponent: props => <DrawerContent {...props}/>
});

export default DrawerNavigator;
