import React from 'react';
import { View } from 'react-native';

export default Center = (props) => (
    <View style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
        {props.children}
    </View>
)