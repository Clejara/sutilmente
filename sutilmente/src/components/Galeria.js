import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../styles/styles.css"

function Galeria() {
    return (
        <div >
        <Container className='gallery-container'>
      <Row>
        <Col><Image src="./images/CloseLit.jpg" alt="CloseLit" className="gallery-image"/></Col>
        <Col><Image src="./images/PlantsSquare.jpg" alt="CloseLit" className="gallery-image"/></Col>
      </Row>
      <Row>
        <Col><Image src="./images/VertTable1.jpg" alt="CloseLit" className="gallery-image"/></Col>
        <Col><Image src="./images/PlantsVert.jpg" alt="CloseLit" className="gallery-image"/></Col>
        <Col><Image src="./images/VertTable2.jpg" alt="CloseLit" className="gallery-image"/></Col>
      </Row>
    </Container>
        </div>
      );
}

export default Galeria;