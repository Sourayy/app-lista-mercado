// screens/Login.js
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button, // ✅ importar Button
} from 'react-native';

export default function Login({ irParaCadastro, irParaHome }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const verificarLogin = () => {
    if (!email || !senha) {
      return Alert.alert('Erro', 'Preencha e-mail e senha');
    }
    if (!email.includes('@') || !email.includes('.')) {
      return Alert.alert('Erro', 'Digite um e-mail válido');
    }

    console.log('Login realizado:', { email, senha });
    irParaHome(); // navega para Home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <Text style={styles.subtitulos}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#e3e3e3"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.subtitulos}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={!mostrarSenha}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        placeholderTextColor="#e3e3e3"
      />

      <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
        <Text style={styles.olho}>
          {mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
        </Text>
      </TouchableOpacity>

      {/* BOTÃO ENTRAR — rosa */}
      <View style={{ marginTop: 15 }}>
        <Button
          title="Entrar"
          color="#fe999c"
          onPress={verificarLogin} // chama a função que navega
        />
      </View>

      <TouchableOpacity onPress={irParaCadastro}>
        <Text style={styles.link}>Ainda não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#fe999c',
    fontFamily: 'serif',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 5,
    padding: 12,
    marginBottom: 10,
  },
  subtitulos: {
    fontSize: 17,
    textAlign: 'left',
    marginTop: 10,
    fontWeight: 'bold',
    color: '#e3e3e3',
    fontFamily: 'serif',
  },
  link: {
    color: '#fe999c',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    fontFamily: 'serif',
  },
  olho: {
    color: '#fe999c',
    textAlign: 'right',
    marginBottom: 15,
    fontSize: 12,
  },
});
