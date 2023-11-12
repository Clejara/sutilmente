import './App.css';
import Navegador from './components/Navegador';
import Inicio from './components/Inicio';
import Quienes from './components/Quienes';
import Nosotros from './components/Nosotros';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <Container fluid class="w-100 h-100 d-flex flex-column">
        <Row fluid>
          <Navegador />    
        </Row>
        <Row fluid>
          {/* <div id="app-div"> */}
            <Routes>
              <Route path="/" element={<Inicio />}></Route>
              <Route path="/quienes" element={<Quienes />}></Route>
              <Route path="/nosotros" element={<Nosotros />}></Route>
              <Route path="/galeria" element={<Galeria />}></Route>
              <Route path="/contacto" element={<Contacto />}></Route>
            </Routes>
          {/* </div> */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
