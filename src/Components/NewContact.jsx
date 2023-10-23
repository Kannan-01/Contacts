import { MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadContact } from "../Services/allAPI";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Modal } from "antd";

function NewContact() {
  const [details, SetDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    company: "",
    job: "",
    phone: "",
    dob: "",
    notes: "",
    image:"https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
  });

  const handleUpload = async () => {
    const { fname, phone, image } = details;
    if (!fname || !phone) {
      toast.warning("Fill in the Details!");
    } else {
      // make API call
      const response = await uploadContact(details);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        // set server response
        toast.success(`Contact Saved!`);
        // reset the form by updating the state
        SetDetails({
          fname: "",
          lname: "",
          email: "",
          company: "",
          job: "",
          phone: "",
          dob: "",
          notes: "", 
        });
      } else {
        toast.error("Upload Error!");
      }
    }
  };
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div>
        <Navbar expand="lg" className="bg-body-light mb-auto shadow-0">
          <Container>
            <Navbar.Brand>
              <Link to={"/"}>
                <MDBIcon
                  fas
                  icon="times"
                  size="sm"
                  className="me-3 text-muted "
                />
              </Link>{" "}
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  backgroundColor: "#f2f2f2",
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Button
                  className="shadow-0 text-dark "
                  style={{
                    backgroundColor: "#f2f2f2",
                    height: "110px",
                    width: "110px",
                    borderRadius: "50%",
                  }}
                  onClick={showModal}
                >
                  <span className="material-symbols-outlined">
                    add_photo_alternate
                  </span>
                </Button>
              </div>
              <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form>
                  <Form.Control
                    type="text"
                    placeholder="Enter URL of your image"
                    onChange={(e) =>
                      SetDetails({ ...details, image: e.target.value })
                    }
                  />
                </Form>
              </Modal>
              <div className="ms-4">
                <h2>Create Contact</h2>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto me-5 align-items-center justify-content-center">
                <Button
                  variant="dark"
                  style={{
                    borderRadius: "20px",
                    marginLeft: "10px",
                    textTransform: "capitalize",
                    height: "40px",
                    marginRight: "1rem",
                  }}
                  onClick={handleUpload}
                >
                  save
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <hr />
      <div className="d-flex justify-content-center ">
        <Form>
          {/* name */}
          <div className="d-flex">
            <div style={{ width: "2rem" }}>
              <MDBIcon fas icon="user-alt" className="me-3 mt-2" />
            </div>
            <div>
              <>
                <Form.Group
                  className="mb-3"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "500px",
                  }}
                >
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    onChange={(e) =>
                      SetDetails({ ...details, fname: e.target.value })
                    }
                    value={details.fname}
                  />
                </Form.Group>{" "}
              </>
              <>
                <Form.Group
                  className="mb-3"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "500px",
                  }}
                >
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) =>
                      SetDetails({ ...details, lname: e.target.value })
                    }
                    value={details.lname}
                  />
                </Form.Group>{" "}
              </>
            </div>
          </div>
          {/* job company */}
          <div className="d-flex">
            <div style={{ width: "2rem" }}>
              <MDBIcon fas icon="building" className="me-3 mt-2" />
            </div>
            <div>
              <>
                <Form.Group
                  className="mb-3"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "500px",
                  }}
                >
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    onChange={(e) =>
                      SetDetails({ ...details, company: e.target.value })
                    }
                    value={details.company}
                  />
                </Form.Group>{" "}
              </>
              <>
                <Form.Group
                  className="mb-3"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "500px",
                  }}
                >
                  <Form.Control
                    type="text"
                    placeholder="Location"
                    onChange={(e) =>
                      SetDetails({ ...details, job: e.target.value })
                    }
                    value={details.job}
                  />
                </Form.Group>{" "}
              </>
            </div>
          </div>
          {/* email */}
          <div className="d-flex">
            <div style={{ width: "2rem" }}>
              <MDBIcon fas icon="envelope" className="me-3 mt-2" />
            </div>
            <div>
              <>
                <Form.Group
                  className="mb-3"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "500px",
                  }}
                >
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    onChange={(e) =>
                      SetDetails({ ...details, email: e.target.value })
                    }
                    value={details.email}
                  />
                </Form.Group>{" "}
              </>
            </div>
          </div>

          {/* phone number */}
          <div className="d-flex">
            <div style={{ width: "2rem" }}>
              <MDBIcon fas icon="phone" className="me-3 mt-2" />
            </div>
            <div>
              <>
                <Form.Group
                  className="mb-3"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "500px",
                  }}
                >
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    onChange={(e) =>
                      SetDetails({ ...details, phone: e.target.value })
                    }
                    value={details.phone}
                  />
                </Form.Group>{" "}
              </>
            </div>
          </div>

          {/*  dob */}
          <div className="d-flex">
            <div style={{ width: "2rem" }}>
              <MDBIcon fas icon="birthday-cake" className="me-3 mt-2" />
            </div>
            <div>
              <>
                <Form.Group
                  className="mb-3"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "500px",
                  }}
                >
                  <Form.Control
                    type="text"
                    placeholder="Birthday"
                    onChange={(e) =>
                      SetDetails({ ...details, dob: e.target.value })
                    }
                    value={details.dob}
                  />
                </Form.Group>{" "}
              </>
            </div>
          </div>

          {/*notes*/}
          <div className="d-flex">
            <div style={{ width: "2rem" }}>
              <MDBIcon fas icon="sticky-note" className="me-3 mt-4" />
            </div>
            <div>
              <>
                <Form.Group
                  className="mb-4"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "500px",
                  }}
                >
                  <Form.Control
                    type="text"
                    placeholder="Notes"
                    style={{ height: "70px" }}
                    onChange={(e) =>
                      SetDetails({ ...details, notes: e.target.value })
                    }
                    value={details.notes}
                  />
                </Form.Group>{" "}
              </>
            </div>
          </div>
        </Form>
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
    </div>
  );
}

export default NewContact;
