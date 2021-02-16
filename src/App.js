import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokeList from './components/Pages/PokeList';
import DetailPoke from './components/Pages/DetailPoke';
// import MyPoke from './components/Pages/MyPoke';
// import {getAllPokemon, getPokemon} from './services/pokemon';
// import Card from './components/Card/Card'

function App() {
  return(
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={PokeList} />
        <Route path='/detailpoke' exact component={DetailPoke}/>
      </Switch>
    </Router>
  );
}

export default App;
