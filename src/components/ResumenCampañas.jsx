import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function ResumenCampañas() {
  return (
    <>
      <section className="mx-5">
        <h3 className="mt-5">Campaña 1</h3>
        <Row>
          <Col md={6}>
            <h5 className="my-4">Ingreso de dispositivos</h5>
            <Table striped bordered hover variant="dark">
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
          <Col md={6}>
            <h5 className="my-4">Resultado del Procesamiento</h5>
            <Table striped bordered hover variant="dark">
              <tbody>
                <tr>
                  <th className="w-75">Equipos Refuncionalizados</th>
                  <td className="w-50 text-center">25</td>
                </tr>
                <tr>
                  <th className="w-75">Equipos Reciclados</th>
                  <td className="text-center">70</td>
                </tr>
                <tr>
                  <th className="w-75">Dispositivos No Procesados</th>
                  <td className="text-center">12</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="my-4">Estado Operativo Durante la Campaña</h5>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Etapa</th>
                  <th>Tiempo Total</th>
                  <th>Estado</th>
                  <th>Detalle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-25">Inspección Visual</td>
                  <td>18h</td>
                  <td className="text-success">
                    <b>Flujo Normal</b>
                  </td>
                  <td>Cola promedio: 2 equipos</td>
                </tr>
                <tr>
                  <td className="w-25">Desarme y Testeo</td>
                  <td>14h</td>
                  <td className="text-danger">
                    <b>Cuello de Botella</b>
                  </td>
                  <td>Cola promedio: 2 equipos</td>
                </tr>
                <tr>
                  <td className="w-25">Separación de Materiales</td>
                  <td>15h</td>
                  <td className="text-warning">
                    <b>Congestión Media</b>
                  </td>
                  <td>Cola promedio: 2 equipos</td>
                </tr>
                <tr>
                  <td className="w-25">Clasificación de Plásticos</td>
                  <td>12h</td>
                  <td className="text-success">
                    <b>Flujo Normal</b>
                  </td>
                  <td>Cola promedio: 2 equipos</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default ResumenCampañas;
