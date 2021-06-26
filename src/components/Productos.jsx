import React from 'react';
import {instrumentos} from '../datos/instrumentos.json';
import Tarjeta from './Tarjeta';
import Navigation from './Navigation'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Productos = () =>{
    const lista = instrumentos.map((inst, i)=>{ return(
        <Tarjeta key={inst.id} id={inst.id} instrumento={inst.instrumento} precio={inst.precio} marca={inst.marca} 
        modelo={inst.modelo} costoEnvio={inst.costoEnvio} cantidadVendida={inst.cantidadVendida} descripcion={inst.descripcion}
        imagen={inst.imagen}
        ></Tarjeta>
    )
    })

    return(
        <React.Fragment>
        <Navigation></Navigation>
        <Container fluid="md">
            <Row>
            {lista}
            </Row>
        </Container>
    </React.Fragment>
    )
}

export default Productos
