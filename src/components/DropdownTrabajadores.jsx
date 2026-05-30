import Dropdown from "react-bootstrap/Dropdown";

function DropdownTrabajadores() {
  return (
    <>
      <section className="d-flex w-100 my-3">
        <input
          type="text"
          placeholder="Ej: 5 trabajadores"
          className="ms-5 px-3 border border-1 rounded-2 input bg-light me-2"
        />
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
          ></Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
    </>
  );
}

export default DropdownTrabajadores;
