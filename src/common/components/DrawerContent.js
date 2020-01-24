import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from "react-native-vector-icons/MaterialIcons";
import ListTyle from './ListTile';
import Divider from './Divider';

import { StyleSheet, ScrollView, View, Image, Dimensions, Text, Linking } from 'react-native';
import { navigateToScreen } from '../helpers/quickFunctions';

export default class DrawerContent extends React.Component {
    render() {
        
        const screenHeight = Math.round(Dimensions.get('window').height);
        return (
            <ScrollView>
                <SafeAreaView
                    style={styles.container}
                    forceInset={{ top: 'always', horizontal: 'never' }}
                >
                    <View style={{ flex: 1, height: screenHeight / 3 }}>
                        <Image
                            style={{ flex: 1, resizeMode: "cover", width: undefined, height: undefined }}
                            source={require('../../assets/logoreact.png')} />
                    <Divider />
                    </View>
                    <View>
                        <ListTyle title={<Text style={styles.listTyleTitle}>Contenido</Text>} />
                        <ListTyle 
                            leading={<Icon name="tv" color="#ccc"size={20}/> } 
                            title={<Text style={styles.listTyleItem}>En Vivo</Text>} 
                            onPress={navigateToScreen('Watch', this.props.navigation)}
                        />
                        <ListTyle 
                            leading={<Icon name="schedule" color="#ccc"size={20}/> } 
                            title={<Text style={styles.listTyleItem}>Programación</Text>} 
                            onPress={navigateToScreen('Schedule', this.props.navigation)}
                        />
                        <Divider />
                        <ListTyle title={<Text style={styles.listTyleTitle}>Otros recursos</Text>} />
                        <ListTyle
                            leading={<Icon name="settings-applications" color="#ccc"size={20}/> } 
                            title={<Text style={styles.listTyleItem}>Ajustes</Text>} 
                            onPress={navigateToScreen('Settings', this.props.navigation)}
                        />
                        <ListTyle 
                            leading={<Icon name="chevron-right" color="#ccc"size={20}/> } 
                            title={<Text style={styles.listTyleItem}>Anúnciese en Televisión</Text>} 
                            onPress={() => Linking.openURL('http://www.tvsur.co.cr/empresa/anunciese/')}
                        />
                        <Divider />
                        <ListTyle title={<Text style={styles.listTyleTitle}>Acerca de TvSur Móvil</Text>} />
                        <ListTyle
                            leading={<Icon name="chevron-right" color="#ccc"size={20}/> } 
                            title={<Text style={styles.listTyleItem}>¿Quiénes Somos?</Text>} 
                            onPress={() => Linking.openURL('http://www.tvsur.co.cr/empresa/quienes-somos/')}
                        />
                    </View>


                </SafeAreaView>
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listTyleTitle: {
        color: 'grey', fontWeight: "bold", fontSize: 18
    },
    listTyleItem: {
        color: 'black', fontWeight: "600", fontSize: 16
    }
});