import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import "../styles/styles.css"

function Inicio() {
    return(
        <div >
        <Carousel>
          <Carousel.Item>
            <Image src="./images/TableWide.jpg" alt="CloseLit" className="carousel-image"/>
            
            <Carousel.Caption>
              <h3> </h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="./images/PlantsSquare.jpg" alt="Plants" className="carousel-image"/>
            <Carousel.Caption>
              <h3> </h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="./images/RailingBottleWide.jpg" alt="Railing" className="carousel-image"/>
            <Carousel.Caption>
              <h3> </h3>
              <p>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      
    )
}

export default Inicio;