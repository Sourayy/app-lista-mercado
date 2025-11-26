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

const db = firebase.firestore(); 
const auth = firebase.auth();

const Cadastro = ({ irParaLogin, irParaHome }) => {
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

      const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
      const user = userCredential.user;

      
      await db.collection("usuarios").doc(user.uid).set({
        nome: nome,
        email: email,
        criadoEm: firebase.firestore.FieldValue.serverTimestamp()
      });

      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");

      irParaHome();

    } catch (error) {
      console.log(error);

      let msg = "Erro ao cadastrar.";

      if (error.code === "auth/email-already-in-use") msg = "E-mail já está cadastrado.";
      if (error.code === "auth/invalid-email") msg = "Digite um e-mail válido.";
      if (error.code === "auth/weak-password") msg = "A senha precisa ter pelo menos 6 caracteres.";

      Alert.alert("Erro", msg);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      
      <Text style={styles.subtitulos}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        placeholderTextColor="#e3e3e3"
      />

      <Text style={styles.subtitulos}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#e3e3e3"
        keyboardType="email-address"
      />

      <Text style={styles.subtitulos}>Senha</Text>
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
            {mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitulos}>Confirme sua senha</Text>
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
            {mostrarConfirmar ? 'Ocultar senha' : 'Mostrar senha'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 15 }}>
        <Button
          title="Cadastre-se"
          color="#fe999c"
          onPress={verificarCadastro}
        />
      </View>

      <TouchableOpacity onPress={irParaLogin}>
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
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'serif',
  },
  olho: {
    color: '#fe999c',
    textAlign: 'right',
    marginBottom: 15,
    fontSize: 14,
    fontFamily: 'serif',
  },
});

export default Cadastro;
