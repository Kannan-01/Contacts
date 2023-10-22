import { default as React } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../assets/css/main.css";
function Sidebar() {

  return (
    <>
      <div>
        <Navbar className="bg-body-light" style={{ boxShadow: "none" }}>
          <Container>
            <Link to={"/"}>
              <Navbar.Brand>
                <h3>Contacts</h3>
              </Navbar.Brand>
            </Link>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Sidebar;
