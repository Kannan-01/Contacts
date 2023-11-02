import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBadge,
  MDBBtn,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateIndex } from "../Redux/sliceIndex";
import { viewContacts } from "../Services/allAPI";
import "../assets/css/main.css";
import Container from "react-bootstrap/Container";

function Contacts() {
  useSelector((state) => state.indexData.index);
  const dispatch = useDispatch();
  const [allContacts, setAllContacts] = useState([]);
  const getAllContacts = async () => {
    const { data } = await viewContacts();
    setAllContacts(data);
  };
  useEffect(() => {
    getAllContacts();
  }, []);

  const handleShow = (id) => {
    dispatch(updateIndex(id));
  };
  return (
    <div className="scroll-container">
      <Container fluid>
        <MDBTable align="middle">
          <MDBTableBody>
            {allContacts?.length > 0 ? (
              allContacts?.map((item) => (
                <tr>
                  <td>
                    <Link to={"/view"} style={{ color: "black" }}>
                      <div
                        className="d-flex align-items-center"
                        draggable
                        onClick={() => handleShow(item?.id)}
                      >
                        <img
                          src={item?.image}
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bolder mb-1"
                            style={{
                              textTransform: "capitalize",
                              fontFamily: "Poppins,sans-serif",
                              fontSize: "1rem",
                            }}
                          >
                            {item?.fname} {item?.lname}
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontFamily: "Poppins,sans-serif" }}
                          >
                            {item?.phone}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <p className="fw-bolder mt-3 ms-5 fs-5 text-muted">
                Loading please wait !
              </p>
            )}
          </MDBTableBody>
        </MDBTable>
      </Container>
    </div>
  );
}

export default Contacts;
