import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ListaPersonalizada = ({ voltar }) => {
  return (
    <View style={{ backgroundColor: '#FFF3BF', padding: 10 }}>
      <Text style={{ color: '#48425E', textAlign: 'center', fontSize: 30 }}>
        Lista Personalizada
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
        {'\n'}
      </Text>

      <TouchableOpacity style={btn}>
        <Text style={txt}>Criar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={btn}>
        <Text style={txt}>Ler</Text>
      </TouchableOpacity>
      <TouchableOpacity style={btn}>
        <Text style={txt}>Atualizar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={btn}>
        <Text style={txt}>Excluir</Text>
      </TouchableOpacity>

      {/* BOTÃO VOLTAR */}
      <TouchableOpacity style={btnVoltar} onPress={voltar}>
        <Text style={txtVoltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const btn = {
  backgroundColor: '#ed5076',
  padding: 12,
  borderRadius: 6,
  marginTop: 10,
};

const txt = {
  color: 'white',
  textAlign: 'center',
  fontSize: 18,
};

const btnVoltar = {
  backgroundColor: '#48425E',
  padding: 12,
  borderRadius: 6,
  marginTop: 20,
};

const txtVoltar = {
  color: 'white',
  textAlign: 'center',
  fontSize: 18,
};

export default ListaPersonalizada;
