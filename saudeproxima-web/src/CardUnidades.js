import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Buttons from './Buttons'
import './CardUnidade.css';

export default class CardUnidades extends Component{
  render() {
    return (
      <Card>
        <h1>{this.props.nome}</h1>
        <Container fluid="md">
          <Row>
            <Col className="cardEmergencia">
              <h6>EMERGÊNCIA</h6>
            </Col>
            <Col className="cardMuitoUrente">
              <h6>MUITO URGENTE</h6>
            </Col>
            <Col className="cardUrente">
              <h6>URGENTE</h6>
            </Col>
            <Col className="cardPoucoUrente">
              <h6>POUCO URGENTE</h6>
            </Col>
            <Col className="cardNaoUrente">
              <h6>NÃO URGENTE</h6>
            </Col>
          </Row>
          <Row>
            <Col><Buttons></Buttons></Col>
            <Col><Buttons></Buttons></Col>
            <Col><Buttons></Buttons></Col>
            <Col><Buttons></Buttons></Col>
            <Col><Buttons></Buttons></Col>
          </Row>
          <Row>
            <Col className="totalPacientes"> <h5>Nº Total de Paciente: 200</h5></Col>
          </Row>
        </Container>
      </Card>

    );
  }
}