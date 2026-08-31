import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RecoveryScreen = () => {
  const [entries, setEntries] = useState<Array<{ id: string; date: string; mood: string }>>([]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Recovery Logging</Text>
        <Text style={styles.subtitle}>Track your daily recovery journey</Text>

        {entries.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No entries yet</Text>
            <Text style={styles.emptyHint}>Add your first recovery log to get started</Text>
          </View>
        ) : (
          <View>
            {entries.map((entry) => (
              <View key={entry.id} style={styles.entryCard}>
                <Text style={styles.entryDate}>{entry.date}</Text>
                <Text style={styles.entryMood}>{entry.mood}</Text>
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Entry</Text>
        </TouchableOpacity>
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
  emptyState: {
    paddingVertical: 48,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#9ca3af',
    marginBottom: 8,
  },
  emptyHint: {
    fontSize: 14,
    color: '#d1d5db',
  },
  entryCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#7c3aed',
  },
  entryDate: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 8,
  },
  entryMood: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: '#7c3aed',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 24,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RecoveryScreen;
