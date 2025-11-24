import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDwG_CGPqZBAOYOrhw3T0NdaggM9t90IVE",
  authDomain: "foodlist-72577.firebaseapp.com",
  projectId: "foodlist-72577",
  storageBucket: "foodlist-72577.firebasestorage.app",
  messagingSenderId: "94455084786",
  appId: "1:94455084786:web:c8181c1d60cc9181eb026b",
  measurementId: "G-KJYQSZPE91"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore(); 

const App = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  const verificarCadastro = async () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      return Alert.alert("Atenção", "Preencha todos os campos.");
    }

    if (senha !== confirmarSenha) {
      return Alert.alert("Erro", "As senhas não coincidem!");
    }

    try {
      await db.collection("usuarios").add({
        nome: nome,
        email: email,
        senha: senha,
        criadoEm: firebase.firestore.FieldValue.serverTimestamp()
      });

      Alert.alert("Sucesso", "Usuário cadastrado no Firebase!");

      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");

    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível cadastrar.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      
      <Text style={styles.subtitulos}>Nome{'\n'}</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        placeholderTextColor="#e3e3e3"
      />

      <Text style={styles.subtitulos}>E-mail{'\n'}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#e3e3e3"
        keyboardType="email-address"
      />

      <Text style={styles.subtitulos}>Senha{'\n'}</Text>
      <View>
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
            {mostrarSenha ? '👁️ Ocultar senha' : '👁️ Mostrar senha'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitulos}>Confirme sua senha{'\n'}</Text>
      <View>
        <TextInput
          style={styles.input}
          secureTextEntry={!mostrarConfirmar}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          placeholder="Confirme sua senha"
          placeholderTextColor="#e3e3e3"
        />
        <TouchableOpacity onPress={() => setMostrarConfirmar(!mostrarConfirmar)}>
          <Text style={styles.olho}>
            {mostrarConfirmar ? '👁️ Ocultar senha' : '👁️ Mostrar senha'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botoes}>
        <Button title="Cadastre-se" color="#fe999c" onPress={verificarCadastro} />
      </View>

      <TouchableOpacity>
        <Text style={styles.link}>{'\n'}Já possui uma conta? Faça Login.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'serif',
    color: '#fe999c',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 5,
    padding: 12,
    marginBottom: 4,
    fontSize: 16,
    fontFamily: 'serif',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fe999c',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 5,
  },
  subtitulos: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#e3e3e3',
  },
  link: {
    color: '#fe999c',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'serif',
  },
  olho: {
    color: '#fe999c',
    textAlign: 'right',
    marginBottom: 15,
    fontSize: 12,
    fontFamily: 'serif',
  },
});

export default App;
