import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles';

const ISLAND_PLACES = [
  {
    id: '1',
    name: 'หมู่เกาะสิมิลัน (Similan Islands)',
    location: 'จังหวัดพังงา',
    desc: 'สวรรค์ของนักดำน้ำ มีหินเรือใบเป็นสัญลักษณ์ น้ำทะเลสีฟ้าใสและจุดชมวิวหาดทรายขาวละเอียด',
    img: 'https://cms.dmpcdn.com/travel/2020/09/15/07be82a0-f733-11ea-b67c-0189c2acc7e7_original.JPG',
  },
  {
    id: '2',
    name: 'เกาะพีพี (Koh Phi Phi)',
    location: 'จังหวัดกระบี่',
    desc: 'หมู่เกาะระดับโลกที่มีอ่าวมาหยาอันเลื่องชื่อ ล้อมรอบด้วยผาหินปูนป่าอุดมสมบูรณ์และจุดดำน้ำชมปะการัง',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMt85D5L6HaCSl02yJ5E-CBMyHK4TB8TYnMZIKm5F7Ig&s=10',
  },
  {
    id: '3',
    name: 'เกาะหลีเป๊ะ (Koh Lipe)',
    location: 'จังหวัดสตูล',
    desc: 'มัลดีฟส์เมืองไทย โดดเด่นด้วยหาดพัทยา หาดซันไรส์ น้ำทะเลใสสะอาด และจุดดำน้ำปะการังเจ็ดสี',
    img: 'https://www.akiralipe.com/wp-content/uploads/2023/04/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%8B%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%A3%E0%B8%AA%E0%B9%8C-1024x575.jpg',
  },
  {
    id: '4',
    name: 'หมู่เกาะสุรินทร์ (Surin Islands)',
    location: 'จังหวัดพังงา',
    desc: 'แหล่งอุดมสมบูรณ์ทางทะเล ทั้งปะการังตื้น ปลานานาชนิด และเรียนรู้วิถีชีวิตชาวเลมอแกน',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA230NtVqti1Ys70-HdaODOumicfovuhZvvmkrKE4_OvZM7rHUMKnd52k&s=10',
  },
  {
    id: '5',
    name: 'เกาะตาชัย (Tachai Island)',
    location: 'จังหวัดพังงา',
    desc: 'ขึ้นชื่อเรื่องหาดทรายขาวนุ่มละเอียดเหมือนแป้ง และจุดดำน้ำลึกพบปูไก่รวมถึงฉลามวาฬ',
    img: 'https://ik.imagekit.io/tvlk/blog/2025/05/shutterstock_236958592.jpg?tr=q-70,c-at_max,w-1000,h-600',
  },
  {
    id: '6',
    name: 'เกาะนางยวน (Koh Nang Yuan)',
    location: 'จังหวัดสุราษฎร์ธานี',
    desc: 'เกาะขนาดเล็ก 3 เกาะเชื่อมต่อกันด้วยทะเลแหวกหาดทรายขาว พร้อมจุดชมวิวบนยอดเขาอันสวยงาม',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwh9rOwEQaxF-vo1l6NeZ0nrrSfqczayQC_qP3Eta4SA&s=10',
  },
];

export default function PlacesScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={globalStyles.card}
      onPress={() => navigation.navigate('PlaceDetail', { place: item })}
    >
      <Image source={{ uri: item.img }} style={globalStyles.cardImage} />
      <Text style={globalStyles.cardTitle}>{item.name}</Text>
      <Text style={[globalStyles.cardDescription, { color: '#e67e22', fontWeight: 'bold' }]}>
        📍 {item.location}
      </Text>
      <Text style={globalStyles.cardDescription}>{item.desc}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={ISLAND_PLACES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}