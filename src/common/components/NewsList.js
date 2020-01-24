import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import NewsListItem from './NewsListItem';

export default class NewsList extends React.Component {
    constructor(props){
        super(props);
    }

    _renderFooter = () => {
        if (!this.props.loadingMore || this.props.page == 1) return null;
      
        return (
          <View
            style={{
              position: 'relative',
              //width: width,
              //height: height,
              paddingVertical: 20,
              borderTopWidth: 1,
              marginTop: 10,
              marginBottom: 10,
              borderColor: "pink"
            }}
          >
            <ActivityIndicator animating size="large" />
          </View>
        );
      };

    render(){
        return(
        <FlatList
            data={this.props.news}
            renderItem={({ item }) => <NewsListItem key={item.id.toString()}
                post={item}
                />}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent ={() => <Center><ActivityIndicator /></Center>}
            onEndReached={this.props._handleLoadMore}
            onEndReachedThreshold={0.8}
            ListFooterComponent={this._renderFooter}
        />
        )
    }
}