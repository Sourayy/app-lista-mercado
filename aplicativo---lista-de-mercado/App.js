// App.js
import React, { useState } from 'react';
import Carregamento from './screens/Carregamento';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Home from './screens/Home';
import ListaGeral from './screens/ListaGeral';
import ListaPersonalizada from './screens/ListaPersonalizada';

export default function App() {
  const [tela, setTela] = useState('carregamento');

  // Funções de navegação
  const irParaLogin = () => setTela('login');
  const irParaCadastro = () => setTela('cadastro');
  const irParaHome = () => setTela('home');
  const irParaListaGeral = () => setTela('listaGeral');
  const irParaListaPersonalizada = () => setTela('listaPersonalizada');
  const voltarParaHome = () => setTela('home');

  return (
    <>
      {tela === 'carregamento' && <Carregamento aoConcluir={irParaLogin} />}

      {tela === 'login' && (
        <Login
          irParaCadastro={irParaCadastro}
          irParaHome={irParaHome} // função passada corretamente
        />
      )}

      {tela === 'cadastro' && (
        <Cadastro
          navigation={{ navigate: () => irParaLogin() }} // substitui navigation.navigate
        />
      )}

      {tela === 'home' && (
        <Home
          irParaListaGeral={irParaListaGeral}
          irParaListaPersonalizada={irParaListaPersonalizada}
          irParaLogin={irParaLogin}
        />
      )}

      {tela === 'listaGeral' && (
        <ListaGeral
          voltar={voltarParaHome}
          irParaPersonalizada={irParaListaPersonalizada}
        />
      )}

      {tela === 'listaPersonalizada' && (
        <ListaPersonalizada voltar={voltarParaHome} />
      )}
    </>
  );
}
