import { Switch } from "antd";
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBNavbarBrand,
  MDBNavbarItem
} from "mdb-react-ui-kit";
import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Navibar() {
  return (
    <Navbar expand="lg" style={{height:"100%"}}>
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/"}>
            <MDBNavbarBrand className="me-5 text-white">
              <h3>
                <i class="fa-solid fa-user-group"></i> Contacts
              </h3>
            </MDBNavbarBrand>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center justify-content-center">
            <Link to={"/create"}>
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
            <Switch
              checkedChildren={<i class="fa-solid fa-moon"></i>}
              unCheckedChildren={<i class="fa-solid fa-sun"></i>}
            />

            {/* avatar */}
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="hidden-arrow d-flex align-items-center nav-link"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
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
