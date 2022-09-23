import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './Components/Menu';
import { Contatos } from './Pages/Contatos';
import { Home } from './Pages/Home';
import { Servicos } from './Pages/Servicos';
import { Modeloscarros } from './Pages/Modeloscarros';
import { Modelosmotos } from './Pages/Modelosmotos';

function App() {
  return (
    <div>
      <BrowserRouter>{}
      <Menu/>
      <Routes>{}
        <Route path='/' element={<Home/>}/>
        <Route path='/modelosmotos' element={<Modelosmotos/>}/>
        <Route path='/modeloscarros' element={<Modeloscarros/>}/>
        <Route path='/servicos' element={<Servicos/>}/>
        <Route path='/contatos' element={<Contatos/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
