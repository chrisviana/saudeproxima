import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Logo from  './img/logo.png';

import CardUnidades from './components/CardUnidades';

import api from './services/api';

function App() {

  const [unidadesSaude, setUnidadesSaude] = useState([]);
  
  async function loadUnidadesSaude() {
    var unidadesSaude = [];
    const response = await api.get('unidade-saude', {});
    setUnidadesSaude([ ...unidadesSaude, ...response.data]);
  }  

  useEffect(() => {
    loadUnidadesSaude();
  }, []);

  return (
      <div className="App">
        
        <div className="fundo"></div>
        <div className="fundo2"></div>
        <div className="fundo3"></div>
        <div className="fundo4"></div>
        
        <div className="fundo5"></div>
        <img src={Logo} alt="Logo" />
        <div id="cardHospitais" className="cardsUnidades">
          
          {unidadesSaude.map(item => <CardUnidades key={item.id} item={item}></CardUnidades>)}
        </div>
       
      </div>
  );
}


export default App;
