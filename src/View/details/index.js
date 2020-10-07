import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Image, Text, ActivityIndicator } from 'react-native';

import styles from './style'
import api from '../../utils/api'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function DetailsScreen({ route, navigation}) {

    const { itemId } = route.params;
    const [ contacts, setContacts ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect( () => {
        // Chamada para API
        api
        .get(`/contatos/${itemId}`)
        .then(response => {
        if(response.ok){
            setContacts(response.data)
            setLoading(false)
        } 
        })
    }, []);

    if (loading){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={60} color='#ff0000' />
            </View>
        )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <View style={styles.imagem}>
                <Image style={styles.tinyLogo} 
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </View>
            <View style={styles.informacoes}>
                <Text style={styles.nome}>{contacts.nome}</Text>
                <Text style={styles.email}>{contacts.email}</Text>
            </View>
        </View>
    );
}

