import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const VisionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Vision</Text>
        <Text style={styles.subtitle}>Set and achieve your goals</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Coming soon...</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
  },
  placeholder: {
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    paddingVertical: 48,
    alignItems: 'center',
  },
  placeholderText: {
    color: '#9ca3af',
    fontSize: 16,
  },
});

export default VisionScreen;
