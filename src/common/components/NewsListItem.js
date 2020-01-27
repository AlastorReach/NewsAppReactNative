import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { navigateToScreen } from '../helpers/quickFunctions';
import { withNavigation } from 'react-navigation';
import { colors } from '../../theme/index';
import 'moment/locale/es';

const width = Dimensions.get('window').width;

const NewsListItem = (props) => {
    moment.locale("es");
    return (
        <TouchableOpacity style={styles.item} 
            onPress={navigateToScreen("PostDetailScreen", props.navigation, props.post)}>
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryName}>{props.post.topLevelCategories[0]}</Text>
            </View>
            <View style={styles.imageAndTitleContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: props.post.mobile }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={5}
                        style={styles.title}>{props.post.title}</Text>
                </View>
            </View>
            <View style={styles.dateAndMoreContainer}>
                <Text style={styles.date}>
                    {moment(props.post.date_gmt, "YYYYMMDD").fromNow()}
                </Text>
                <Icon name="md-more" size={25} />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
        marginRight: 10,
        marginLeft: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 10,
        elevation: 8,
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 5
    },
    image: {
        width: undefined,
        height: undefined,
        resizeMode: "cover",
        flex: 1
    },
    imageContainer: {
        width: width / 2 - 20,
        height: ((width / 2) - 20) / 1.7777,
        backgroundColor: "lightgrey",
        marginRight: 10
    },

    imageAndTitleContainer: {
        display: "flex",
        flexDirection: "row"
    },
    dateAndMoreContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    titleContainer: {
        width: width / 2 - 30
    },
    categoryContainer: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
        alignItems: "center"
    },
    categoryName: {
        color: colors.primaryColor,
        fontSize: 16,
        fontWeight: "500"
    },
    date: {
        fontSize: 12,
        color: colors.primaryColor
    }
})

export default withNavigation(NewsListItem);