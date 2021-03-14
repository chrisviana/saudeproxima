import React  from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Buttons.css';

function Buttons() {

    return (
        <Container>
            <Row>
                <div className="divButtons">
                <Col>
                    <Button variant="danger">-</Button>
                </Col>
                <Col><h5>50</h5></Col>
                <Col><Button variant="success">+</Button></Col>
                </div>
            </Row>
        </Container>
    )
}

export default Buttons;