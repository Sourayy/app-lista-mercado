/*
menu
notificação compartilhamento e psquisa
*/
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ListaGeral({ voltar }) {
  return (
    <View style={{ backgroundColor: '#f96b87', padding: 10 }}>
      {/* TÍTULO FOODLIST */}
      <Text style={{ color: '#007a3f', fontSize: 36 }}>foodlist</Text>

      {/* CONTEÚDO DA PÁGINA */}
      <View style={{ backgroundColor: '#FFF3BF', padding: 10 }}>
        <Text style={{ color: '#48425E', textAlign: 'center', fontSize: 30 }}>
          Lista Geral
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
        </Text>

        {/* BOTÕES DA LISTA */}
        <TouchableOpacity style={estilo.botao}>
          <Text style={estilo.txtBotao}>Criar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao}>
          <Text style={estilo.txtBotao}>Ler</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao}>
          <Text style={estilo.txtBotao}>Atualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao}>
          <Text style={estilo.txtBotao}>Excluir</Text>
        </TouchableOpacity>

        {/* BOTÃO VOLTAR */}
        <TouchableOpacity style={estilo.botaoVoltar} onPress={voltar}>
          <Text style={estilo.txtVoltar}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilo = {
  botao: {
    backgroundColor: '#ed5076',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  txtBotao: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  botaoVoltar: {
    backgroundColor: '#c93c5c',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  txtVoltar: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
};
