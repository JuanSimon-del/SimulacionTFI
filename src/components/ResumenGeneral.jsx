import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../src/styles.css";
import { Row, Col } from "react-bootstrap";

function ResumenGeneral() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="p-5">
        <Row className="gap-5">
          <Col className="d-flex justify-content-center text-center border border-2 border-success rounded-3 p-3 ">
            <article>
              <i className="bi bi-laptop text-info fs-1"></i>
              <p className="fs-2">58</p>
              <h4>Equipos ingresados</h4>
            </article>
          </Col>
          <Col className="d-flex justify-content-center text-center border border-2 border-success rounded-3 p-3 ">
            <article>
              <i className="bi bi-tools text-secondary fs-1"></i>
              <p className="fs-2">58</p>
              <h4>Equipos refuncionalizados</h4>
            </article>
          </Col>
          <Col className="d-flex justify-content-center text-center border border-2 border-success rounded-3 p-3 ">
            <article>
              <i className="bi bi-recycle text-success fs-1"></i>
              <p className="fs-2">58</p>
              <h4>Equipos reciclados</h4>
            </article>
          </Col>
          <Col className="d-flex justify-content-center text-center border border-2 border-success rounded-3 p-3 ">
            <article>
              <i className="bi bi-currency-dollar text-warning fs-1"></i>
              <p className="fs-2">58</p>
              <h4>Ingresos Totales Generados</h4>
            </article>
          </Col>
        </Row>
      </section>
      <section className="px-5 d-flex flex-column">
        <Row>
          <h2>Materiales Recuperados (Total Acumulado)</h2>
        </Row>
        <Row className="mt-4 gap-4">
          <Col className="d-flex justify-content-center text-center border border-2 border-success rounded-3 px-2">
            <article className="d-flex flex-column align-items-center p-3">
              <h4>Hierro</h4>
              <div className="contorno d-flex align-items-center rounded-2 my-4">
                <div className="relleno mx-auto d-flex align-items-center justify-content-center fs-3">
                  Fe
                </div>
              </div>
            </article>
          </Col>
          <Col className="d-flex justify-content-center text-center border border-2 border-success rounded-3 px-2">
            <article className="d-flex flex-column align-items-center p-3 ">
              <h4>Aluminio</h4>
              <div className="contorno d-flex align-items-center rounded-2 my-4">
                <div className="relleno mx-auto d-flex align-items-center justify-content-center fs-3">
                  Al
                </div>
              </div>
            </article>
          </Col>
          <Col className="d-flex justify-content-center text-center border border-2 border-success rounded-3 px-2">
            <article className="d-flex flex-column align-items-center p-3 ">
              <h4>Cobre</h4>
              <div className="contorno d-flex align-items-center rounded-2 my-4">
                <div className="relleno mx-auto d-flex align-items-center justify-content-center fs-3">
                  Cu
                </div>
              </div>
            </article>
          </Col>
          <Col className="d-flex justify-content-center text-center border border-2 border-success rounded-3 px-2">
            <article className="d-flex flex-column align-items-center p-3 ">
              <h4>Plástico</h4>
              <i className="bi bi-cup-straw vasito-plastico" style={{ fontSize: "70px" }}></i>
            </article>
          </Col>
          <Col className="d-flex justify-content-center text-center border border-2 border-success rounded-3 px-2">
            <article className="d-flex flex-column align-items-center p-3">
              <h4>Placas</h4>
              <i className="bi bi-motherboard my-1" style={{ fontSize: "70px" }}></i>
            </article>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default ResumenGeneral;
