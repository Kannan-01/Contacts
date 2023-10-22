import { MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadContact } from "../Services/allAPI";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function NewContact() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [details, SetDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    company: "",
    job: "",
    phone: "",
    dob: "",
    notes: "",
  });
  console.log(details);
  const handleUpload = async () => {
    const { fname, phone } = details;
    if (!fname || !phone) {
      toast.warning("Fill the Details !");
    } else {
      // make api call
      const response = await uploadContact(details);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        // set server response
        toast.success(`Contact Saved Successfully !`);
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
        toast.error("Upload Error !");
      }
    }
  };

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
              onClick={handleUpload}
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
                  placeholder="Company"
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
                  placeholder="Job title"
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
