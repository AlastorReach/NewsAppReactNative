import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import NewsListItem from './NewsListItem';

export default class NewsList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <FlatList
            data={this.props.news}
            renderItem={({ item }) => <NewsListItem key={item.id.toString()}
                post={item}
                />}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent ={() => <Center><ActivityIndicator /></Center>}
        />
        )
    }
}