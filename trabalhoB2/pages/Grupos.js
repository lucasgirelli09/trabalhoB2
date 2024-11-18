import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { info } from '../data/dados';

export default function MainPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Grupos Disponíveis</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {info.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.props}>Nome do grupo:</Text>
            <Text style={styles.groupName}>{item.nome}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('EspecificacaoDoGrupo', { group: item })}
            >
              <Text style={styles.buttonText}>Ver Mais</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f5', // Fundo mais claro
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    maxWidth: 450,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ddd', // Bordas suaves
  },
  props: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#555',
  },
  groupName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1e90ff', // Azul brilhante
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
