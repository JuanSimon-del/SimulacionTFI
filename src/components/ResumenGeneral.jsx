import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../src/styles.css";
import { Row, Col, Card } from "react-bootstrap";

function ResumenGeneral() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="px-5 my-3">
        <h3>Resumen General (Todas las Campañas)</h3>
        <Row className="mt-1 g-4">
          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="cards">
                <i className="bi bi-laptop text-info fs-1"></i>
                <p className="fs-2">58</p>
                <h5>Equipos ingresados</h5>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="cards">
                <i className="bi bi-tools text-secondary fs-1"></i>
                <p className="fs-2">58</p>
                <h5>Equipos refuncionalizados</h5>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="cards">
                <i className="bi bi-recycle text-success fs-1"></i>
                <p className="fs-2">58</p>
                <h5>Equipos reciclados</h5>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="cards">
                <i className="bi bi-currency-dollar text-warning fs-1"></i>
                <p className="fs-2">58</p>
                <h5>Ingresos Totales Generados</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="px-5 d-flex flex-column">
        <Row className="mt-5">
          <h3>Materiales Recuperados (Total Acumulado)</h3>
        </Row>

        <Row className="mt-1 g-4">
          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center cards">
                <h5 className="mt-3">Hierro</h5>
                <div className="contorno d-flex align-items-center rounded-2 my-4">
                  <div className="relleno mx-auto d-flex align-items-center justify-content-center fs-5">
                    Fe
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center cards">
                <h5 className="mt-3">Aluminio</h5>
                <div className="contorno d-flex align-items-center rounded-2 my-4">
                  <div className="relleno mx-auto d-flex align-items-center justify-content-center fs-5">
                    Al
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center cards">
                <h5 className="mt-3">Cobre</h5>
                <div className="contorno d-flex align-items-center rounded-2 my-4">
                  <div className="relleno mx-auto d-flex align-items-center justify-content-center fs-5">
                    Cu
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center cards">
                <h5 className="mt-3">Plástico</h5>
                <i
                  className="bi bi-cup-straw vasito-plastico"
                  style={{ fontSize: "70px" }}
                ></i>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center cards">
               <h5 className="mt-3">Placas</h5>
                <i
                  className="bi bi-motherboard my-1"
                  style={{ fontSize: "70px" }}
                ></i>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default ResumenGeneral;
