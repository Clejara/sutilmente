import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/styles.css"

function Inicio() {
    return(
        <div >
        <Carousel>
          <Carousel.Item>
            <Image src="./images/TableWide.jpg" alt="CloseLit" className="carousel-image"/>
            
            <Carousel.Caption>
              <h1>Coctelería sustentable </h1>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="./images/PlantsSquare.jpg" alt="Plants" className="carousel-image"/>
            <Carousel.Caption>
              <h1>Sabores Sorprendentes </h1>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="./images/RailingBottleWide.jpg" alt="Railing" className="carousel-image"/>
            <Carousel.Caption>
              <h1>Creados con conciencia </h1>
              <p>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      
    )
}

export default Inicio;