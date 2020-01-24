import React from 'react';
import { View, Text, SafeAreaView, FlatList, Dimensions, StyleSheet } from 'react-native';
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

  this.setState((prevState, nextProps) => ({
    data: 
    page === 1
    ? Array.from(response.data)
    : [...this.state.data, ...response.data],
    loading: false
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
render(){
  return(
    <SafeAreaView style={styles.container}>
      <NewsList news={this.state.data} />
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