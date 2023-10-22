import { MDBIcon } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAContact, updateContact } from "../Services/allAPI";
function NewContact(props) {
  console.log(props.index);
  const [contact, setContact] = useState({});

  const showcontact = async () => {
    const { data } = await getAContact(props.index);
    setContact(data);
  };
  const handleChange = async () => {
    const response= await updateContact(props.index, contact);
    if (response.status >= 200 && response.status < 300) {
      toast.success(`Updated Succesfully !`);
    } else {
      toast.error("Upload Error !");
    }

  };
  useEffect(() => {
    showcontact();
  }, []);

  console.log(contact);
  return (
    <div>
      <div>
        <Navbar className="bg-body-light" style={{ boxShadow: "none" }}>
          <Container>
            <Navbar.Brand className="ms-3 mb-3">
              <div
                style={{
                  width: "5rem",
                  height: "5rem",
                  backgroundColor: "#f2f2f2",
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <span className="material-symbols-outlined">
                  add_photo_alternate
                </span>
              </div>
            </Navbar.Brand>

            <Button
              variant="dark"
              style={{
                borderRadius: "20px",
                marginLeft: "10px",
                textTransform: "capitalize",
                height: "40px",
                marginRight: "1rem",
              }}
              className="mb-3"
              onClick={handleChange}
            >
              save
            </Button>
          </Container>
        </Navbar>
      </div>
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
                  value={contact.fname}
                  onChange={(e) =>
                    setContact({ ...contact, fname: e.target.value })
                  }
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
                  value={contact.lname}
                  onChange={(e) =>
                    setContact({ ...contact, lname: e.target.value })
                  }
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
                  placeholder="Company"
                  value={contact.company}
                  onChange={(e) =>
                    setContact({ ...contact, company: e.target.value })
                  }
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
                  placeholder="Job title"
                  value={contact.job}
                  onChange={(e) =>
                    setContact({ ...contact, job: e.target.value })
                  }
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
                  value={contact.email}
                  onChange={(e) =>
                    setContact({ ...contact, email: e.target.value })
                  }
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
                  value={contact.phone}
                  onChange={(e) =>
                    setContact({ ...contact, phone: e.target.value })
                  }
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
                    setContact({ ...contact, dob: e.target.value })
                  }
                  value={contact.dob}
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
                    setContact({ ...contact, notes: e.target.value })
                  }
                  value={contact.notes}
                />
              </Form.Group>{" "}
            </>
          </div>
        </div>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default NewContact;
