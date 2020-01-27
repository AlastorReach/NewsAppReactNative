import React from 'react';
import { Text } from 'react-native';

import Center from '../common/components/Center';

 export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      //const {navigate} = this.props.navigation;
      return (
        <Center>
          <Text>Home Screen</Text>
        </Center>
      );
    }
  }