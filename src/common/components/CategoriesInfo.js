import React from 'react';
import { View, Text } from 'react-native';

export default CategoriesInfo = (props) => {
    let categories = <View />
    if(props.categories){
        categories = props.categories.map((cat) => (
        <View><Text>{cat.name}</Text></View>
        ));
    }
    return(
        {categories}
    )
}