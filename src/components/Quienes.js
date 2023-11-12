import Container from 'react-bootstrap/Container';
import React , { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function Quienes() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://scratchya.com.ar/react/datos.php')
        .then((response) => response.json())
        .then((jsonData) => {
            setData(jsonData);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    return (
        <Container fluid class="flex-column">
            {/* <Row fluid id="quienes-half-color"> */}
            <span style={{ fontWeight: 'bold' }}>
                <div className="m-5"><p className="fs-1 ">Nuestra empresa</p></div>
            </span>
            <Col className="text-center">
                <Image src="./Images/RailingBottleWide.jpg" fluid width="550px" />
            </Col>
            {/* </Row> */}
            <Row className="justify-content-center mt-5">
                <Col xs={6} lg={6}>
                    <p class="text-start">¡Bienvenidos a Sutilmente, tu elección perfecta para Pisco Sours! Somos una empresa chilena apasionada por compartir la tradición y el sabor de nuestra tierra en cada botella. En Sutilmente, hemos perfeccionado la receta de nuestro Pisco Sour, infusionando el jugo de limón con los aceites naturales de las pieles, lo que añade un toque único y refrescante a cada sorbo. Nuestra dedicación a la calidad y el sabor se refleja en cada botella que ofrecemos. Así que, si estás buscando una experiencia auténtica y deliciosa, ¡estás en el lugar adecuado con Sutilmente!</p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <span style={{ fontWeight: 'bold' }}>
                    <div className="m-5"><p className="fs-1">Nuestra dedicación</p></div>
                </span>
            </Row>
            <Row className="justify-content-center mb-5">
                <Col className="mx-4" xs={6} lg={3}><p class="text-start">¡Bienvenidos a Sutilmente, tu elección perfecta para Pisco Sours! Somos una empresa chilena apasionada por compartir la tradición y el sabor de nuestra tierra en cada botella. En Sutilmente, hemos perfeccionado la receta de nuestro Pisco Sour, infusionando el jugo de limón con los aceites naturales de las pieles, lo que añade un toque único y refrescante a cada sorbo. Nuestra dedicación a la calidad y el sabor se refleja en cada botella que ofrecemos. Así que, si estás buscando una experiencia auténtica y deliciosa, ¡estás en el lugar adecuado con Sutilmente!</p></Col>
                <Col className="mx-4" xs={6} lg={3}>
                    <Image src="./Images/TableBoardSquare.jpg" rounded fluid width="300px" />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <h1>Nuestros Productos</h1>
                <Table striped bordered hover className='m-5'>
                    <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                        <td>{item.codigo}</td>
                        <td>{item.descripcion}</td>
                        <td>{item.precio}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default Quienes;