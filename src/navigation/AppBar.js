
import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
export default class AppBar extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <Icon
                name="menu"
                color="white"
                size={25}
                style={{ width: 25, height: 25, marginLeft: 5, color: "white" }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }