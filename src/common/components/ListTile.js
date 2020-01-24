import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default ListTyle = (props) =>(
    <View>
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            {props.leading ? <View style={{marginRight: 20}}>{props.leading}</View> : null}
            {props.title ? props.title : null}
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: "flex", flexDirection: "row", marginLeft: 20, marginRight: 20, marginTop: 10, marginBottom: 10
    }
});