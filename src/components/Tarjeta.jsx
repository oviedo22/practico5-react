import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Tarjeta = ({id,instrumento,precio,marca,modelo,costoEnvio,cantidadVendida,descripcion,imagen}) => {
    return(
        <React.Fragment>
                <Card style={{ width: '18rem' }} className="margenesTarjeta"> 
                <Card.Img variant="top" className="maxAltoImg" src={require(`../assets/img/${imagen.toLowerCase()}`).default} />
                <Card.Body>
                    <Card.Title>{instrumento}</Card.Title>
                    <Card.Text>
                    ${precio}
                    {marca}
                    {modelo}
                    {costoEnvio}
                    {cantidadVendida}
                    {descripcion}
                    </Card.Text>

                    <Button href={`detalleInstrumento/${id}`} variant="primary">Detalle</Button>
                </Card.Body>
                </Card>
            </React.Fragment>
    )
}

export default Tarjeta