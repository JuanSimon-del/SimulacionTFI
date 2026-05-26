import Dropdown from "react-bootstrap/Dropdown";

function MiDropdown() {
  return (
    <>
        <Dropdown>
          <Dropdown.Toggle variant="success"></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Opción 1</Dropdown.Item>bg-light 

            <Dropdown.Item href="#/action-2">Opción 2</Dropdown.Item>

            <Dropdown.Item href="#/action-3">Opción 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </>
  );
}

export default MiDropdown;
