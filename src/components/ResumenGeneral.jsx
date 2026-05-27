import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../src/styles.css";
import { Row, Col, Card } from "react-bootstrap";

function ResumenGeneral() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="p-5">
        <Row className="g-4">
          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="cards">
                <i className="bi bi-laptop text-info fs-1"></i>
                <p className="fs-2">58</p>
                <h4>Equipos ingresados</h4>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="cards">
                <i className="bi bi-tools text-secondary fs-1"></i>
                <p className="fs-2">58</p>
                <h4>Equipos refuncionalizados</h4>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="cards">
                <i className="bi bi-recycle text-success fs-1"></i>
                <p className="fs-2">58</p>
                <h4>Equipos reciclados</h4>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="cards">
                <i className="bi bi-currency-dollar text-warning fs-1"></i>
                <p className="fs-2">58</p>
                <h4>Ingresos Totales Generados</h4>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="px-5 d-flex flex-column">
        <Row>
          <h2>Materiales Recuperados (Total Acumulado)</h2>
        </Row>

        <Row className="mt-4 g-4">
          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center cards">
                <h4>Hierro</h4>
                <div className="contorno d-flex align-items-center rounded-2 my-4">
                  <div className="relleno mx-auto d-flex align-items-center justify-content-center fs-3">
                    Fe
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center cards">
                <h4>Aluminio</h4>
                <div className="contorno d-flex align-items-center rounded-2 my-4">
                  <div className="relleno mx-auto d-flex align-items-center justify-content-center fs-3">
                    Al
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center cards">
                <h4>Cobre</h4>
                <div className="contorno d-flex align-items-center rounded-2 my-4">
                  <div className="relleno mx-auto d-flex align-items-center justify-content-center fs-3">
                    Cu
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center h-100 border-success border-2 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center cards">
                <h4>Plástico</h4>
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
                <h4>Placas</h4>
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
