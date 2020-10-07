import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Image, Text, ActivityIndicator } from 'react-native';

import styles from './style'
import api from '../../utils/api'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function HomeScreen({ navigation }) {
  const [ contacts, setContacts ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect( () => {
    // Chamada para API
          api
          .get('/contatos')
          .then(response => {
            if(response.ok){
              setContacts(response.data)
              setLoading(false)
            } 
          })


  }, []);
  
  
  const renderItem = ({ item }) => (
    <TouchableOpacity 
    style={styles.item}
    onPress={() => navigation.navigate('Details', {
      itemId: item.id,
    })}
    >
    <Image style={styles.tinyLogo} 
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        
      }}
    />
    <Text style={styles.title}>{item.nome}</Text>
  </TouchableOpacity>
  );

  if (loading){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={60} color='#ff0000' />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={contacts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

