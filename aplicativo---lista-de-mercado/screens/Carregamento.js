import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Animated, Easing, Image } from 'react-native';
//deu certo??
const DURACAO_MS = 3000;

export default function Carregamento({ aoConcluir }) {
  const progressoAnimado = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressoAnimado, {
      toValue: 1,
      duration: DURACAO_MS,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      aoConcluir(); // VOLTA PARA O APP.JS
    });
  }, []);

  const larguraInterpolada = progressoAnimado.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/imagem-carregamento.png')}
        style={styles.imagem}
      />

      <View style={styles.progressBox}>
        <Animated.View
          style={[styles.progressBar, { width: larguraInterpolada }]}
        />
      </View>

      <Text style={styles.subtitulos}>Carregando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e3ffc2',
    padding: 20,
  },
  imagem: {
  width: 300,
  height: 200,
  alignSelf: 'center',
  marginBottom: 10, 
  borderRadius: 10,
},
  progressBox: {
  height: 25,
  width: '85%',
  backgroundColor: '#fee6e5',
  borderRadius: 7,
  overflow: 'hidden',
  borderWidth: 1,
  borderColor: '#e0e0e0',
  alignSelf: 'center',
  marginTop: 80, 
},

  progressBar: { height: '100%', backgroundColor: '#f3bab7' },
  subtitulos: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#9a9c95',
  
  },
});
