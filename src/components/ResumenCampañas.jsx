import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function ResumenCampañas() {
  return (
    <>
      <section className="mx-5">
        <h3 className="mt-5">Campaña 1</h3>
        <Row>
          <Col lg={5}>
            <h5 className="my-4">Ingreso de dispositivos</h5>
            <Table striped bordered hover variant="secondary">
              <tbody>
                <tr>
                  <th className="w-75">Dispositivos Ingresados</th>
                  <td className="text-center">95</td>
                </tr>
                <tr>
                  <th className="w-75">Laptops</th>
                  <td className="text-center">65</td>
                </tr>
                <tr>
                  <th className="w-75">Desktops</th>
                  <td className="text-center">30</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={5}>
            <h5 className="my-4">Resultado del Procesamiento</h5>
            <Table striped bordered hover variant="secondary">
              <tbody>
                <tr>
                  <th className="w-75">Equipos Refuncionalizados</th>
                  <td className="w-50 text-center">95</td>
                </tr>
                <tr>
                  <th className="w-75">Equipos Reciclados</th>
                  <td className="text-center">65</td>
                </tr>
                <tr>
                  <th className="w-75">Dispositivos No Procesados</th>
                  <td className="text-center">30</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col className="d-flex flex-column justify-content-end align-items-center">
            <img src="../public/camion.png" alt="Camión" width={150} />
          </Col>
        </Row>
      </section>
    </>
  );
}

export default ResumenCampañas;
