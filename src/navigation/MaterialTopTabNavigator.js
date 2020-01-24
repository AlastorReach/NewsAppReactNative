import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


import TabScreen from '../common/components/TabScreen';

//Theme
import { colors } from '../theme';

const MaterialTopTabNavigator =   createMaterialTopTabNavigator({
    'Ciencia': {screen: () =><TabScreen categoryId={33} />},
    'Deportes': {screen: () =><TabScreen categoryId={50} />},
    'Empresas y economía': {screen: () =><TabScreen categoryId={4} />},
    'Entrevistas': {screen: () =><TabScreen categoryId={3} />},
    'Móviles': {screen: () =><TabScreen categoryId={5} />},
},
{
    tabBarOptions: {
        showLabel: true,
        style: {
            backgroundColor: "white",
        },
        inactiveTintColor: "#292929",
        activeTintColor: "#1f1f1f",
        indicatorStyle: {
            backgroundColor: colors.primaryColor
        },
        scrollEnabled: true,
        upperCaseLabel: false,
},
lazy: true
});

export default MaterialTopTabNavigator;
