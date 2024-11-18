import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Button, TextInput } from 'react-native';

export default function EsqueciSenha() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Esqueci minha senha</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.description}>
            Insira o seu email para receber instruções de redefinição de senha.
          </Text>
          <TextInput style={styles.input} placeholder="Digite seu email" placeholderTextColor="#aaa" />
          <Button title="Enviar" onPress={() => {}} color="#6a0dad" /> {/* Roxo escuro */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2c2c2c', // Fundo cinza escuro
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Texto branco
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#3a3a3a', // Fundo cinza médio
    padding: 25,
    borderRadius: 20, // Bordas mais arredondadas
    marginBottom: 20,
    marginHorizontal: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    maxWidth: 400,
    alignSelf: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
    color: '#87ceeb', // Azul claro para destaque
  },
  description: {
    fontSize: 14,
    color: '#ccc', // Cinza claro
    marginBottom: 10,
    textAlign: 'justify',
  },
  input: {
    borderWidth: 1,
    borderColor: '#555', // Cinza mais escuro para o contorno
    borderRadius: 10, // Bordas mais arredondadas
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#444', // Fundo do input cinza escuro
    color: '#fff', // Texto branco
  },
});
