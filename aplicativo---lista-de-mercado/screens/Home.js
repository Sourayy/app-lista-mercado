// screens/Home.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({
  irParaListaGeral,
  irParaListaPersonalizada,
  irParaLogin,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha uma lista</Text>

      <TouchableOpacity style={styles.botao} onPress={irParaListaGeral}>
        <Text style={styles.botaoTexto}>Lista Geral</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={irParaListaPersonalizada}>
        <Text style={styles.botaoTexto}>Lista Personalizada</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sair} onPress={irParaLogin}>
        <Text style={styles.sairTexto}>Sair (voltar ao login)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 30,
    color: '#48425E',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#fe999c',
    padding: 14,
    borderRadius: 8,
    marginVertical: 8,
  },
  botaoTexto: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sair: { marginTop: 20, alignItems: 'center' },
  sairTexto: { color: '#fe999c' },
});
