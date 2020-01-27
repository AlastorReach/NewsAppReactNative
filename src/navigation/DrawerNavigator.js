import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerContent from '../common/components/DrawerContent';

import HomeStackNavigator from './HomeStackNavigator';

const DrawerNavigator = createDrawerNavigator({
    Home: HomeStackNavigator,
},
{
    contentComponent: props => <DrawerContent {...props}/>
});

export default DrawerNavigator;
