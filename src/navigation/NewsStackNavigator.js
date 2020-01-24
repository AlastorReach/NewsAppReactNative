import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MaterialTopTapNavigator from './MaterialTopTabNavigator';
import PostDetailScreen from '../screens/PostDetailScreen';

export default NewsStackNavigator = createStackNavigator({
    Categories: {
        screen: MaterialTopTapNavigator,
        navigationOptions: {
            header: null
        }
    },
    NewsDetail:{
        screen: PostDetailScreen,
        
    }
})