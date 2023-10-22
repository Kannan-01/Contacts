import {
  MDBBadge,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navibar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-auto">
      <Container>
        <Navbar.Brand>
          <Form inline>
            <InputGroup>
              <InputGroup.Text
                id="basic-addon1"
                style={{
                  backgroundColor: "white",
                  border: "none",
                  backgroundColor: "#f2f2f2",
                  height: "40px",
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Search or type a command"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{
                  width: "40rem",
                  border: "none",
                  backgroundColor: "#f2f2f2",
                  boxShadow: "none",
                  fontSize: "15px",
                  height: "40px",
                }}
              />
            </InputGroup>
          </Form>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center justify-content-center">
            <Link
              to={"/create"}
            >
              <Button
                variant="dark"
                style={{
                  borderRadius: "20px",
                  marginLeft: "10px",
                  textTransform: "capitalize",
                  height: "40px",
                  marginRight: "1rem",
                }}
              >
                <i
                  className="fa-solid fa-plus"
                  style={{ marginRight: "5px" }}
                ></i>
                Create
              </Button>
            </Link>

            {/* chat */}
            <MDBNavbarItem style={{ marginRight: "1rem" }}>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="hidden-arrow me-3 me-lg-0 nav-link"
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  <MDBIcon fas icon="comment-alt" size="xl" />
                  <MDBBadge color="danger" dot />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Some news</MDBDropdownItem>
                  <MDBDropdownItem link>Another news</MDBDropdownItem>
                  <MDBDropdownItem link>Something else</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            {/* notification */}
            <MDBNavbarItem style={{ marginRight: "1rem" }}>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="hidden-arrow me-3 me-lg-0 nav-link"
                  style={{ cursor: "pointer" }}
                >
                  <MDBIcon fas icon="bell" size="xl" />
                  <MDBBadge color="danger" dot />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Some news</MDBDropdownItem>
                  <MDBDropdownItem link>Another news</MDBDropdownItem>
                  <MDBDropdownItem link>Something else</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            {/* avatar */}
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="hidden-arrow d-flex align-items-center nav-link"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/9.jpg"
                    className="rounded-circle"
                    height="40"
                    alt="Avatar"
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>MyProfile</MDBDropdownItem>
                  <MDBDropdownItem link>Settings</MDBDropdownItem>
                  <MDBDropdownItem link>Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
