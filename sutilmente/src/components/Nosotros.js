import Container from 'react-bootstrap/Container';
import React  from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Nosotros() {
    

    return (
        <Container fluid>
            <h2>Nosotros</h2>
            <Row className="justify-content-md-center" >
                <Col xs lg="5">
                    A medida que avanzamos, seguimos comprometidos con la innovación,
                    la sostenibilidad y la excelencia en cada aspecto de nuestro negocio,
                    para que más personas puedan disfrutar de la magia de Sutilmente en cualquier ocasión.
                </Col>
            </Row>
            <Row className="justify-content-md-center my-5">
                <h2>El equipo de Trabajo</h2>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" alt="foto_perfil" src="https://img.freepik.com/foto-gratis/empresario-masculino-feliz-trabajando-computadora-oficina_637285-6738.jpg" />
                        <Card.Body>
                            <Card.Title>Clemente Jara</Card.Title>
                            <Card.Text>
                                Fundador de Sutilmente. Emprendendor y estudiante de Ingeniería Civíl en Informática de la Universidad Adolfo Ibañez
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>

        </Container>
    )
}

export default Nosotros;