import Container from "react-bootstrap/Container";

function BarraDeNavegacion() {
  return (
    <Container expand="lg" className="d-flex flex-column  align-items-center px-5 py-3">
      <h1 className="text-light">Simular</h1>
      <section className="">
        <button className="btn btn-success p-3 ">
          <b className="bg-success">Iniciar Simulación</b>
        </button>
      </section>
    </Container>
  );
}

export default BarraDeNavegacion;
