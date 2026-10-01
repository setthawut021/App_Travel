import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles';

export default function SettingScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={globalStyles.container}>
     
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <Text style={[globalStyles.titleText, { marginBottom: 0, marginRight: 8 }]}>ผู้จัดทำ</Text>
        <Ionicons name="person-circle-outline" size={30} color="#2c3e50" />
      </View>
      
      <View style={globalStyles.card}>
        <Text style={styles.authorTitle}>จัดทำโดย</Text>
        <Text style={styles.authorName}>นายเสฎฐวุฒิ ปานฑสูตร</Text>
        <Text style={styles.authorId}>รหัสนักศึกษา: 021</Text>
      </View>

      <TouchableOpacity 
        style={globalStyles.button} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={globalStyles.buttonText}>เกี่ยวกับผู้พัฒนา</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={globalStyles.centerContainer}>
          <View style={[globalStyles.card, { width: '80%', alignItems: 'center', paddingVertical: 24 }]}>
            <Text style={globalStyles.titleText}>ข้อมูลผู้จัดทำ</Text>
            <Text style={[globalStyles.subtitleText, { color: '#2c3e50', fontWeight: 'bold', marginTop: 8 }]}>
              นายเสฎฐวุฒิ ปานฑสูตร
            </Text>
            <Text style={globalStyles.subtitleText}>รหัสนักศึกษา: 021</Text>
            
            <TouchableOpacity 
              style={[globalStyles.button, { marginTop: 16, width: '100%' }]} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={globalStyles.buttonText}>ปิด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  authorTitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  authorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  authorId: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: '600',
  },
});