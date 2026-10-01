import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { globalStyles } from '../styles';

export default function VideoScreen() {
  const videoUrl = "https://www.youtube.com/embed/CA2js9eiQkQ";

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.titleText}>วิดีโอแนะนำ 🎥</Text>
      <Text style={globalStyles.subtitleText}>รวมคลิปพาเที่ยวสถานที่น่าสนใจ</Text>

      <View style={globalStyles.card}>
        <Text style={globalStyles.cardTitle}>พาเที่ยวภาคใต้ ทะเล & ธรรมชาติ</Text>
        <View style={styles.videoContainer}>
          {Platform.OS === 'web' ? (
            <iframe
              src={videoUrl}
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: 8 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <WebView
              style={{ flex: 1 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: videoUrl }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    height: 220,
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});