import React from 'react';
import {instrumentos} from '../datos/instrumentos.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navigation from './Navigation';

const DetalleInstrumentos = ((props)=>{
    const parametroId = props.match.params.id;
    const instEncontrado = instrumentos.filter(inst => inst.id === parametroId);
    
    return(
        <React.Fragment>
            <Navigation></Navigation>
        <Container>
        <Row>
            <Col><img className="minAltoImg" src={require(`../assets/img/${instEncontrado[0].imagen.toLowerCase()}`).default} /></Col>
            <Col>
                <Row>
                    <Col><h1>{instEncontrado[0].instrumento}</h1></Col>
                </Row>
                <Row>
                    <Col>Marca: <h2>{instEncontrado[0].marca}</h2></Col>
                </Row>
                <Row>
                    <Col>Modelo: <h2>{instEncontrado[0].modelo}</h2></Col>
                </Row>
                <Row>
                    <Col>Precio: $<h2>{instEncontrado[0].precio}</h2></Col>
                </Row>
                <Row>
                    <Col>Costo Envío: <h2>{instEncontrado[0].costoEnvio}</h2></Col>
                </Row>
                <Row>
                    <Col>Cantidad Vendida: <h2>{instEncontrado[0].cantidadVendida}</h2></Col>
                </Row>
                <Row>
                    <Col>Descripcion: <h2>{instEncontrado[0].descripcion}</h2></Col>
                </Row>
            </Col>
        </Row>
        
        <Row>
            <Col><Nav.Link href="/"><h3>Volver</h3></Nav.Link></Col>
        </Row>                
        </Container>
    </React.Fragment>
    )

    
})

export default DetalleInstrumentos

