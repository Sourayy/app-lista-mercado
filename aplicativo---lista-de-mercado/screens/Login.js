// screens/Login.js
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Alert, 
} from 'react-native';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'; 

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

export default function Login({ irParaCadastro, irParaHome }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erroLogin, setErroLogin] = useState("");

  const verificarLogin = () => {
    setErroLogin("");

    if (!email || !senha) {
      return setErroLogin("Preencha e-mail e senha");
    }
    if (!email.includes('@') || !email.includes('.')) {
      return setErroLogin("Digite um e-mail válido");
    }

    firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        irParaHome();
      })
      .catch((erro) => {
        console.log("Erro no login:", erro.code);

        if (erro.code === "auth/user-not-found") {
          return setErroLogin("Usuário não encontrado");
        }
        if (erro.code === "auth/wrong-password") {
          return setErroLogin("Senha incorreta");
        }

        setErroLogin("Não foi possível fazer login");
      });
  };

  const recuperarSenha = () => {
    if (!email) {
      return alert("Digite seu e-mail acima para recuperar a senha.");
    }

    firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Um link de recuperação foi enviado para o seu e-mail.");
      })
      .catch((erro) => {
        if (erro.code === "auth/user-not-found") {
          return alert("Esse e-mail não está registrado.");
        }

        alert("Não foi possível enviar o e-mail de recuperação.");
      });
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
        <Text style={styles.mostrar}>
          {mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 15 }}>
        <Button
          title="Entrar"
          color="#fe999c"
          onPress={verificarLogin}
        />
      </View>

      {erroLogin !== "" && (
        <Text style={styles.erroTexto}>{erroLogin}</Text>
      )}

      <TouchableOpacity onPress={irParaCadastro}>
        <Text style={styles.link}>{'\n'}Ainda não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={recuperarSenha}>

        <Text style={styles.recuperar}>{'\n'}Esqueci minha senha</Text>
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
    marginBottom: 4,
    fontSize: 16,
    fontFamily: 'serif',
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
  mostrar: {
    color: '#fe999c',
    textAlign: 'right',
    marginBottom: 15,
    fontSize: 14,
    fontFamily: 'serif',
  },
  erroTexto: {
    color: '#fe999c',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  recuperar: {
    color: '#fe999c',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 15,
    fontFamily: 'serif',
  },
});
