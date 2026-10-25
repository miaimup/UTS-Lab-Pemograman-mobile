import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView, Alert } from 'react-native';
import InfoCard from '../components/InfoCards';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function HomeScreen() {
  const [keyword, setKeyword] = useState('');

  const filteredData = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <InfoCard
          title="Pengembangan Antarmuka Mobile"
          status="selesai"
          onPress={() => Alert.alert('Detail', 'Tugas sudah selesai')}
        />
        <InfoCard
          title="Integrasi API Direktori Mahasiswa"
          status="proses"
          onPress={() => Alert.alert('Detail', 'Tugas masih dikerjakan')}
        />
      </View>

      <View style={[styles.section, { flex: 1 }]}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama mahasiswa..."
          value={keyword}
          onChangeText={setKeyword}
        />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.studentCard}>
              <Text style={styles.studentName}>{item.nama}</Text>
              <Text style={styles.studentProdi}>{item.prodi}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f8', padding: 16 },
  section: { marginBottom: 16 },
  searchInput: { height: 45, borderColor: '#ced4da', borderWidth: 1, borderRadius: 6, paddingHorizontal: 12, backgroundColor: '#ffffff', marginBottom: 10 },
  studentCard: { backgroundColor: '#ffffff', padding: 12, borderRadius: 6, marginVertical: 4, borderWidth: 1, borderColor: '#e9ecef' },
  studentName: { fontSize: 14, fontWeight: 'bold', color: '#212529' },
  studentProdi: { fontSize: 12, color: '#6c757d', marginTop: 2 },
  emptyText: { textAlign: 'center', color: '#dc3545', marginTop: 20, fontStyle: 'italic' },
});