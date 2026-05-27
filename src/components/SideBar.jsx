import { Button, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

function SideBar() {
  const trabajadores = [
    { icono: "bi bi-eye", nombre: "Inspección Visual", color: "text-info" },
    { icono: "bi-tools", nombre: "Desarme y Testeo", color: "text-secondary"},
    { icono: "bi-arrows-expand-vertical", nombre: "Separación de Materiales", color: "text-warning" },
    { icono: "bi-recycle", nombre: "Reciclaje", color: "text-success" },
  ];

  return (
    <>
      <Navbar className="bg-dark w-25 vh-100 align-items-start">
        <section className="w-100 p-3">
          <h3>Configuración Inicial</h3>
          <article className="my-4">
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
          <article className="mb-4">
            <h5>Distribución de Trabajadores</h5>
            {trabajadores.map((trabajador, index) => (
              <Row key={index} className="d-flex align-items-center my-3">
                <Col>
                  <i className={`bi ${trabajador.icono} ${trabajador.color} ms-3`}></i>
                </Col>
                <Col lg={8}>
                  <p className="mb-0 ms-2">{trabajador.nombre}</p>
                </Col>
                <Col>
                  <input type="text" className="me-2 w-100" />
                </Col>
              </Row>
            ))}
          </article>
          <article>
            <h5 className="my-3">Resultados por Campaña (3)</h5>
            <Button className="w-100 btn-secondary mb-2">Campaña 1</Button>
            <Button className="w-100 btn-secondary mb-2">Campaña 2</Button>
            <Button className="w-100 btn-secondary mb-2">Campaña 3</Button>
          </article>
        </section>
      </Navbar>
    </>
  );
}

export default SideBar;
