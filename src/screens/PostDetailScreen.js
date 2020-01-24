import React from 'react';
import { Dimensions, Linking, Image, Text, ScrollView, StyleSheet, View } from 'react-native';
import HTML from 'react-native-render-html';
import Divider from '../common/components/Divider';
import moment from 'moment';
import ActivityIndicatorThenComponent from '../common/components/ActivityIndicatorThenComponent';
import { colors } from '../theme';
import CategoriesInfo from '../common/components/CategoriesInfo';
import { WebView } from 'react-native-webview';
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils'

let width = Dimensions.get('window').width;
export default PostDetailScreen = (props) => {
    const post = props.navigation.getParam('data')
    return (
        <ActivityIndicatorThenComponent>
            <ScrollView>
                <Image source={{uri:post.mobile}} style={styles.image}/>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.date}>13/12/2019 2:23 PM</Text>
                <Divider />
                <View style={styles.categoriesContainer}><Text style={styles.category}>{post.topLevelCategories[0]}</Text></View>
                <View style={styles.htmlContainer}>
                    <HTML 
                        html={post.content} 
                        imagesMaxWidth={Dimensions.get('window').width - 40} 
                        baseFontStyle={{fontSize: 18, lineHeight: 30}}
                        containerStyle={{
                            marginLeft: 20,
                            marginRight: 20
                        }}
                        onLinkPress={(event, href) => Linking.openURL(href)}
                        renderers={{
                        iframe: ({src}) => <View style={{flex: 1, height: width / 1.7777, backgroundColor: "pink"}}>
                        <WebView
                                  style={ {  marginTop: (Platform.OS == 'ios') ? 20 : 0,} }
                                  javaScriptEnabled={true}
                                  domStorageEnabled={true}
                                  source={{uri: setRightUrl(src)}}
                          />
                        </View>
                            
                        }}
                    />
                </View>
            </ScrollView>
        </ActivityIndicatorThenComponent>
    )
}

function setRightUrl(src){
    if(src.includes('http')){
        return src
    }else{
        return 'https:' + src
    }
}
const styles = StyleSheet.create({
    image:{
        width: width, height: width / 1.3333
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "200"
    },
    htmlContainer: {
        
    },
    date:{
        color: colors.orange,
        fontWeight: "bold",
        textAlign: "right",
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 18
    },
    categoriesContainer: {
        flexDirection: "row"
    },
    category: {
        backgroundColor: colors.orange,
        padding: 5,
        fontSize: 18,
        color: "white",
        margin: 20
    },
});