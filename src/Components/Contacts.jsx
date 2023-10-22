import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import "../assets/css/main.css";
import { viewContacts } from "../Services/allAPI";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateIndex } from "../Redux/sliceIndex";
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
      <MDBTable align="middle">
        <MDBTableHead></MDBTableHead>
        <MDBTableBody>
          {allContacts.length > 0 ? (
            allContacts.map((item) => (
              <tr>
                <td>
                  <Link to={"/view"} style={{ color: "black" }}>
                    <div
                      className="d-flex align-items-center"
                      draggable
                      onClick={() => handleShow(item.id)}
                    >
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
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
            <p className="fw-bolder mt-3 ms-5 fs-5 text-danger">
              Nothing to Display !
            </p>
          )}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default Contacts;
