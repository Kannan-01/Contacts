import { MDBIcon, MDBNavbarItem } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { deleteAContact, getAContact } from "../Services/allAPI";
import { Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";

function Details() {
  // for contact
  const [contact, setContact] = useState([]);
  const index = useSelector((state) => state.indexData.index);
  const showDetails = async () => {
    const { data } = await getAContact(index);
    setContact(data);
  };
  useEffect(() => {
    showDetails();
  }, [setContact]);

  const handleDelete = async () => {
    await deleteAContact(index);
  };
  // pop confirm codesz
  const confirm = (e) => {
    handleDelete();
    toast.success("Contact deleted !");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-light mb-auto">
        <Container fluid>
          {contact && (
            <Navbar.Brand>
              <Link to={"/"}>
                <MDBIcon
                  fas
                  icon="arrow-left"
                  size="sm"
                  className="me-4 text-muted "
                />
              </Link>{" "}
              <img
                src={contact.image}
                className="rounded-circle"
                height="120"
                width="120"
                alt="Avatar"
              />
              <div className="ms-4">
                <h2  style={{textTransform:"capitalize"}}>
                  {contact.fname} {contact.lname}
                </h2>
                <h6 className="text-muted">{contact.phone}</h6>
              </div>
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5 align-items-center justify-content-center">
              <Link to={"/edit"}>
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
                  Edit
                </Button>
              </Link>
              {/* Delete */}
              <MDBNavbarItem style={{ marginRight: "1rem" }}>
                <Popconfirm
                  title="Delete"
                  description="Are you sure to remove this contact?"
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                  placement="bottomRight"
                  icon={
                    <QuestionCircleOutlined
                      style={{
                        color: "red",
                      }}
                    />
                  }
                >
                  <MDBIcon
                    className="btn border-0 shadow-0"
                    far
                    icon="trash-alt"
                    size="xl"
                  />
                </Popconfirm>
              </MDBNavbarItem>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className="ms-5 mt-5 d-flex justify-content-center "
        style={{
          width: "35rem",
          height: "21rem",
          backgroundColor: "#f2f2f2",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            lineHeight: "1.25rem",
            fontSize: "1rem",
            letterSpacing: ".0142857143em",
            fontWeight: "500",
            width: "100%",
          }}
          className="mt-2 text-black "
        >
          {contact && (
            <ul style={{ listStyle: "none" }}>
              <li>
                <h5>Contact Details...</h5>
              </li>
              {contact.email && (
                <li>
                  <MDBIcon fas icon="envelope" className="me-3 mt-2" />
                  {contact.email}
                </li>
              )}
              {contact.company && (
                <li>
                  <MDBIcon fas icon="building" className="me-3 mt-2" />
                  {contact.company}
                </li>
              )}
              {contact.job && (
                <li>
                  <MDBIcon fas icon="map-marker-alt" className="me-3 mt-2" />
                  {contact.job}
                </li>
              )}
              {contact.phone && (
                <li>
                  <MDBIcon fas icon="phone" className="me-3 mt-2" />
                  {contact.phone}
                </li>
              )}
              {contact.dob && (
                <li>
                  <MDBIcon fas icon="birthday-cake" className="me-3 mt-2" />
                  {contact.dob}
                </li>
              )}
              {contact.notes && (
                <li>
                  <MDBIcon fas icon="sticky-note" className="me-3 mt-2" />
                  {contact.notes}
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Details;
