import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

export default function EspecificacaoDoGrupo({ route }) {
  const { group } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Detalhes do Grupo</Text>
      <View style={styles.card}>
        <Text style={styles.props}>Nome do grupo:</Text>
        <Text style={styles.data}>{group.nome}</Text>

        <Text style={styles.props}>Descrição do projeto:</Text>
        <Text style={styles.data}>{group.descricao}</Text>

        <Text style={styles.props}>Integrantes:</Text>
        {group.integrantes && group.integrantes.length > 0 ? (
          group.integrantes.map((integrante, index) => (
            <Text key={index} style={styles.integrante}>• {integrante}</Text>
          ))
        ) : (
          <Text style={styles.data}>Sem integrantes</Text>
        )}
      </View>
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', // Texto branco para melhor contraste
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#3a3a3a', // Fundo cinza médio
    padding: 25,
    borderRadius: 20, // Borda mais arredondada
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    maxWidth: 400,
    alignSelf: 'center', // Centraliza a caixa horizontalmente
    marginVertical: 15,
  },
  props: {
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 16,
    color: '#1e90ff', // Azul para destacar os rótulos
  },
  data: {
    textAlign: 'center',
    fontSize: 14,
    color: '#ffffff', // Texto branco
    marginBottom: 15,
  },
  integrante: {
    textAlign: 'left', // Texto alinhado à esquerda
    fontSize: 14,
    color: '#d1cdcd',
    marginBottom: 5, // Espaço entre os itens da lista
  },
});
