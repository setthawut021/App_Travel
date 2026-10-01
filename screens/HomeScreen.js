import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.titleText}>เที่ยวภาคใต้ 🌴</Text>
      <Text style={globalStyles.subtitleText}>ยินดีต้อนรับสู่แอปแนะนำการท่องเที่ยวภาคใต้</Text>
      
      <View style={globalStyles.card}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUcSpox0aDgB7lSg902Skv-4_D3xQ9NAdTNhWQLav3yu8U6QN3l0PBWf30&s=10' }} 
          style={globalStyles.cardImage} 
        />
        <Text style={globalStyles.cardTitle}>สถานที่ท่องเที่ยวยอดนิยมภาคใต้</Text>
        <Text style={globalStyles.cardDescription}>
          ค้นหาทะเลสวย เกาะดัง ย่านเมืองเก่า และธรรมชาติฝั่งอ่าวไทยและอันดามันที่คุณไม่ควรพลาด
        </Text>
        <TouchableOpacity 
          style={globalStyles.button}
          onPress={() => navigation.navigate('Places')}
        >
          <Text style={globalStyles.buttonText}>สำรวจสถานที่เลย</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}