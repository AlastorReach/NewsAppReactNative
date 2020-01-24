import React from 'react';
import { Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import MaterialTopTabNavigator from './MaterialTopTabNavigator';
import DynamicTabNavigator from '../common/components/DynamicTabNavigator';

import AppBar from './AppBar';

import ScheduleScreen from '../screens/ScheduleScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WatchScreen from '../screens/WatchScreen';
import FlatButton from '../common/components/FlatButton';
import NewsStackNavigator from './NewsStackNavigator';
import PostDetailScreen from '../screens/PostDetailScreen';

//Theme
import { colors } from '../theme';

//Helpers
import { navigateToScreen } from '../common/helpers/quickFunctions';

export default HomeStackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Home: {
      screen: MaterialTopTabNavigator,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () =><AppBar navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: colors.primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleAlign: "center",
        headerTitle: () =>
            <Image 
                style={{resizeMode: "contain", width: 80, height: 80 }} 
                source={require('../assets/logoreact.png')}
            />
        ,
        headerRight: ({navigation}) => <FlatButton route="Watch"/>
      }),
    },
    Watch: {
        screen: WatchScreen,
        headerStyle: {
            backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
        
    },
    Schedule: {
        screen: ScheduleScreen,
        headerStyle: {
            backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
    },
    Settings: {
        screen: SettingsScreen,
        headerStyle: {
            backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
    },
    PostDetailScreen: {
        screen: PostDetailScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.orange
            },
            title: null
        }
    }
  },{
    initialRouteName: 'Home',
  });

  