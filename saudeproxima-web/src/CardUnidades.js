import React  from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './CardUnidade.css';

function CardUnidades() {
    return (
      <Card>
        <h1>Unidade Básica de Saúde Próspera</h1>
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
        </Container>
      </Card>
      
    )
}

export default CardUnidades;