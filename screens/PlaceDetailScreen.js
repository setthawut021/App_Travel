import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles';

export default function PlaceDetailScreen({ route, navigation }) {
  const { place } = route.params;

  return (
    <ScrollView style={globalStyles.container}>
      <Image source={{ uri: place.img }} style={[globalStyles.cardImage, { height: 240 }]} />
      <Text style={globalStyles.titleText}>{place.name}</Text>
      <Text style={[globalStyles.subtitleText, { color: '#e67e22', fontWeight: 'bold' }]}>
        📍 {place.location}
      </Text>
      <Text style={globalStyles.cardDescription}>{place.desc}</Text>
      
      <TouchableOpacity 
        style={[globalStyles.button, { backgroundColor: '#e74c3c', marginTop: 24 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={globalStyles.buttonText}>ย้อนกลับ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}