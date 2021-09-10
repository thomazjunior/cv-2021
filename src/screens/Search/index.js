import React, { useState } from 'react';
import { Container } from './styles';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';



export default () => {

    let [regiao, setRegiao] = useState({
        latitude: -22.768588,
        longitude: -43.3318074,
        latitudeDelta: 0.014,
        longitudeDelta: 0.014
    });

    return (
        
            <View style={styles.container}>
               <MapView style={{width:'100%', height:'100%'}} initialRegion={regiao}>

               </MapView>
                
            </View>       
    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});