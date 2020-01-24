import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import TabScreen from '../components/TabScreen';

export default class DynamicTabNavigator extends React.Component{
    constructor(props){
        super(props);
    }
        _tabNavigator(){
            let tabs = {};
        if(this.props.data){
            this.props.data.forEach(element => {
                tabs[element] = <TabScreen title={element.name} />
            });
        }
        console.warn(tabs);
        return createMaterialTopTabNavigator(tabs, {
            tabBarOptions: {
                showLabel: true,
                style: {
                    backgroundColor: "white",
                },
                inactiveTintColor: "#292929",
                activeTintColor: "#1f1f1f",
                indicatorStyle: {
                    backgroundColor: colors.primaryColor
                }
        }
        })
        }
    render(){
        const Tabs = this._tabNavigator();
        return(
            <Tabs/>
        )
    }
}