import Container from "react-bootstrap/Container";
import MiDropdown from "./MiDropdown";
import DropdownTrabajadores from "./DropdownTrabajadores";

function BarraDeNavegacion() {
  return (
    <Container
      expand="lg"
      className="d-flex flex-column align-items-center py-3"
    >
      <h3 className="my-3 me-auto ms-5 text-light">
        Número de Trabajadores por Proceso
      </h3>
      <section className="row w-100">
        <article className="mt-3 col d-flex flex-column align-items-center">
          <DropdownTrabajadores></DropdownTrabajadores>
          <div>
            <img
              src="../public/etapa1.png"
              alt="Etapa 1"
              className="etapa1 p-2"
            />
          </div>
          <div className="mt-auto">
            <img
              src="../public/engranaje.png"
              className="engranaje"
              alt="Engranaje para visualizar el procesamiento en cada etapa"
            />
          </div>
        </article>
        <article className="mt-3 col d-flex flex-column align-items-center">
          <DropdownTrabajadores></DropdownTrabajadores>
          <div>
            <img
              src="../public/etapa2.png"
              alt="Etapa 1"
              className="etapa2 p-4"
            />
          </div>
          <div className="mt-auto">
            <img
              src="../public/engranaje.png"
              className="engranaje mx-auto"
              alt="Engranaje para visualizar el procesamiento en cada etapa"
            />
          </div>
        </article>
        <article className="mt-3 col d-flex flex-column align-items-center">
          <DropdownTrabajadores></DropdownTrabajadores>
          <div>
            <img
              src="../public/etapa3.png"
              alt="Etapa 1"
              className="etapa3 p-3"
            />
          </div>
          <div className="mt-auto">
            <img
              src="../public/engranaje.png"
              className="engranaje mx-auto"
              alt="Engranaje para visualizar el procesamiento en cada etapa"
            />
          </div>
        </article>
        <article className="mt-3 col d-flex flex-column align-items-center">
          <DropdownTrabajadores></DropdownTrabajadores>
          <div>
            <img src="../public/etapa4.png" alt="Etapa 1" className="etapa4" />
          </div>
          <div className="mt-auto">
            <img
              src="../public/engranaje.png"
              className="engranaje mx-auto"
              alt="Engranaje para visualizar el procesamiento en cada etapa"
            />
          </div>
        </article>
      </section>
      <section className="d-flex w-100 my-3">
        <input
          type="text"
          placeholder="Campañas a simular"
          className="ms-5 px-3 border border-1 rounded-2 input bg-light me-2"
        />
        <MiDropdown></MiDropdown>
      </section>
    </Container>
  );
}

export default BarraDeNavegacion;
