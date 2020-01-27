import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { navigateToScreen } from '../helpers/quickFunctions';

class FlatButton extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity 
                onPress={navigateToScreen(this.props.route, this.props.navigation)}>
                <Text style={styles.watchButton}>En Vivo</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    watchButton: {
        marginRight: 20, fontSize: 20, fontWeight: "700", color: "white"
    }
})

export default withNavigation(FlatButton);