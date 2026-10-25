import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface InfoCardProps {
  title: string;
  status: string;
  onPress: () => void;
}

export default function InfoCard({ title, status, onPress }: InfoCardProps) {
  const isSelesai = status === 'selesai';

  return (
    <View style={[styles.card, isSelesai ? styles.cardSelesai : styles.cardProses]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.badge, isSelesai ? styles.badgeSelesai : styles.badgeProses]}>
          <Text style={[styles.badgeText, isSelesai ? styles.textSelesai : styles.textProses]}>
            {status}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 5,
  },
  cardSelesai: {
    borderLeftColor: '#10b981', // Aksen hijau modern
  },
  cardProses: {
    borderLeftColor: '#f59e0b', // Aksen oranye modern
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: { 
    fontSize: 15, 
    fontWeight: '600', 
    color: '#1e293b', 
    flex: 1,
    marginRight: 8,
  },
  badge: { 
    paddingHorizontal: 10, 
    paddingVertical: 5, 
    borderRadius: 20 
  },
  badgeSelesai: { backgroundColor: '#d1fae5' },
  badgeProses: { backgroundColor: '#fef3c7' },
  badgeText: { fontSize: 11, fontWeight: '700', textTransform: 'uppercase' },
  textSelesai: { color: '#047857' },
  textProses: { color: '#b45309' },
  button: { 
    backgroundColor: '#2563eb', 
    paddingVertical: 10, 
    borderRadius: 8, 
    alignItems: 'center',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: { color: '#ffffff', fontWeight: '600', fontSize: 13 },
});