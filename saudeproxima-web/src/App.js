  
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import logo from './img/logo.png';
import Container from 'react-bootstrap/Container';
import CardUnidades from './CardUnidades';

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
        <Container className="principal">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div>
              <div id="cardHospitais" className="cardsUnidades">
                {unidadesSaude.map(item => <CardUnidades nome={item.nome}></CardUnidades>)}
              </div>
          </div>
        </Container>
      </div>
  );
}


export default App;
