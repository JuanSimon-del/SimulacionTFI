import { Button, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

function SideBar() {
  const trabajadores = [
    { icono: "bi-person", nombre: "Inspección Visual" },
    { icono: "bi-tools", nombre: "Desarme y Testeo" },
    { icono: "bi-arrows-expand-vertical", nombre: "Separación de Materiales" },
    { icono: "bi-recycle", nombre: "Reciclaje" },
  ];

  return (
    <>
      <Navbar className="bg-danger w-25">
        <section className="bg-info w-100 p-3">
          <h3>Configuración Inicial</h3>
          <article className="my-3">
            <h5>Parámetros de la Simulación</h5>
            <Row className="d-flex my-3">
              <Col lg={8}>
                <p className="my-auto">Cantidad de Campañas: </p>
              </Col>
              <Col>
                <input type="text" placeholder="10" className="ms-3 w-50" />
              </Col>
            </Row>
          </article>
          <article>
            <h5>Distribución de Trabajadores</h5>
            {trabajadores.map((trabajador, index) => (
              <Row key={index} className="d-flex align-items-center my-3">
                <Col>
                  <i className={`bi ${trabajador.icono} ms-3`}></i>
                </Col>
                <Col lg={5}>
                  <p className="mb-0">{trabajador.nombre}</p>
                </Col>
                <Col>
                  <input type="text" className="mx-2 w-50" />
                </Col>
                <Col>
                  <p className="mb-0">trab.</p>
                </Col>
              </Row>
            ))}
          </article>
          <article>
            <h5 className="my-3">Resultados por Campaña</h5>
            <Button className="w-100 btn-secondary mb-1">Campaña 1</Button>
            <Button className="w-100 btn-secondary mb-1">Campaña 2</Button>
            <Button className="w-100 btn-secondary mb-1">Campaña 3</Button>
          </article>
        </section>
        
      </Navbar>
    </>
  );
}

export default SideBar;
