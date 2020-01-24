import React from 'react';
import { View, Text, SafeAreaView, FlatList, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import Data from '../../data/sample.json';
import NewsList from '../components/NewsList';
import axiosservice from '../../services/axiosService';
import Center from './Center.js';


function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

export default class TabScreen extends React.Component {
constructor(props){
  super(props);
  this.state = {
    data: [],
    page: 1,
    loading: true,
    hasReachedMax: false,
    error: false,
    errorMessage: ''
  }
}
async componentDidMount(){
  await this._fetchNewsByCategory();
}

async _fetchNewsByCategory(){
  try{
  const { page } = this.state;
  const url = `/wifi/v1/posts?page=${page}&per_page=${10}&categories=${this.props.categoryId}`;
  var response = await axiosservice.request({
    url: url,
    method: 'GET'
  });

  const totalPages = response.headers['x-wp-totalpages'];
  this.setState((prevState, nextProps) => ({
    data: 
    page === 1
    ? Array.from(response.data)
    : [...this.state.data, ...response.data],
    loading: false,
    hasReachedMax: this.state.page + 1 > totalPages
  }));
}
  catch(e){
    this.setState({
      error: true,
      loading: false,
      errorMessage: e
    })
  }
}

_handleLoadMore = () => {
  if(!this.state.hasReachedMax){
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loading: true
      }),
      () => {
        this._fetchNewsByCategory();
      }
    );
  }
};



render(){
  return(
    <SafeAreaView style={styles.container}>
      <NewsList news={this.state.data} page={this.state.page} _handleLoadMore={this._handleLoadMore} loadingMore={this.state.loading} />
    </SafeAreaView>
  )
}

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });