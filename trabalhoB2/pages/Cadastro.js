import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Button, TextInput, Image } from 'react-native';

export default function Cadastro() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Cadastro</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.image} />
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome" />
          
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} placeholder="Digite seu email" />
          
          <Button title="Cadastrar" onPress={() => {}} color="#1e90ff" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2b2b2b', // Fundo cinza escuro
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Texto branco para melhor contraste
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#3a3a3a', // Fundo cinza médio para contraste
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    maxWidth: 400,
    alignSelf: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#555', // Cinza mais escuro
    borderRadius: 10, // Arredondamento das bordas
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#444', // Fundo do input para combinar
    color: '#fff', // Texto branco
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // Deixa as imagens redondas
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#1e90ff', // Borda azul para destaque
  },
});
