import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './CardUnidade.css';

import api from './../services/api';
export default class CardUnidades extends Component {
  constructor(props) {
    super(props);
    this.state = { 
                   id: this.props.item.id,
                   nome: this.props.item.nome,
                   emergencia: this.props.item.emergencia,
                   muitoUrgente: this.props.item.muitoUrgente, 
                   urgente: this.props.item.urgente, 
                   poucoUrgente: this.props.item.poucoUrgente, 
                   naoUrgente: this.props.item.naoUrgente,
                   total: this.props.item.total,
                   endereco: this.props.item.endereco,
                   telefone: this.props.item.telefone,
                   urlGoogleMaps: this.props.item.urlGoogleMaps,
                   medicosPlantao: this.props.item.medicosPlantao,
                   coordenadas: this.props.item.coordenadas
                  };
    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
    this.calcularTotalPacientes = this.calcularTotalPacientes.bind(this);
    this.calcularTotalPacientes();
  }

  incrementar(field) {
    this.setState({ [field]: this.state[field] + 1});
    this.calcularTotalPacientes(+1);
  }
  
  decrementar(field) {
    var decremento = -1;
    var value = this.state[field] + decremento;
    if (value < 0) {
      value = 0;
      decremento = 0;
    }
    this.setState({ [field]: value});
    this.calcularTotalPacientes(decremento);
	}

  calcularTotalPacientes(fix) {
    this.setState({ total: this.state.emergencia + this.state.muitoUrgente + this.state.urgente + this.state.poucoUrgente + this.state.naoUrgente + (fix || 0)});
  }

  componentDidUpdate() {
    var unidadesSaude = this.state;
    let req = {
      url: 'unidade-saude/'+ unidadesSaude.id,
      method: 'PUT',
      data: unidadesSaude
    }
    api(req);
  }

  render() {
      return (
      <Card>
        <h1>{this.props.item.nome}</h1>
        <div className="cardTipoDePuleiras">
            <div className="cardEmergencia cardLabel">
              <h6>EMERGÊNCIA</h6>
            </div>
            <div className="cardMuitoUrgente cardLabel">
              <h6>MUITO URGENTE</h6>
            </div>
            <div className="cardUrgente cardLabel">
              <h6>URGENTE</h6>
            </div>
            <div className="cardPoucoUrgente cardLabel">
              <h6>POUCO URGENTE</h6>
            </div>
            <div className="cardNaoUrgente cardLabel">
              <h6>NÃO URGENTE</h6>
            </div>
        </div>
        <div className="linhaBotao">
          <div className="botaoIncrementDecrementar">
            <Button variant="danger" onClick={() => this.decrementar('emergencia')}>-</Button>
            <h5>{this.state.emergencia}</h5>
            <Button variant="success" onClick={() => this.incrementar('emergencia')}>+</Button>
          </div>
          <div className="botaoIncrementDecrementar">
            <Button variant="danger" onClick={() => this.decrementar('muitoUrgente')}>-</Button>
            <h5>{this.state.muitoUrgente}</h5>
            <Button variant="success" onClick={() => this.incrementar('muitoUrgente')}>+</Button>
          </div>
          <div className="botaoIncrementDecrementar">
            <Button variant="danger" onClick={() => this.decrementar('urgente')}>-</Button>
            <h5>{this.state.urgente}</h5>
            <Button variant="success" onClick={() => this.incrementar('urgente')}>+</Button>
          </div>
          <div className="botaoIncrementDecrementar">
            <Button variant="danger" onClick={() => this.decrementar('poucoUrgente')}>-</Button>
            <h5>{this.state.poucoUrgente}</h5>
            <Button variant="success" onClick={() => this.incrementar('poucoUrgente')}>+</Button>
          </div>
          <div className="botaoIncrementDecrementar">
            <Button variant="danger" onClick={() => this.decrementar('naoUrgente')}>-</Button>
            <h5>{this.state.naoUrgente}</h5>
            <Button variant="success" onClick={() => this.incrementar('naoUrgente')}>+</Button>
          </div>
        </div>
        <div className="totalPacientes">
          <h5>Nº Total de Pacientes: {this.state.total}</h5>
        </div>
      </Card>

    );
  }
}