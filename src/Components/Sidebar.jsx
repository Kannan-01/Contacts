import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
} from "mdb-react-ui-kit";
import { default as React } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/main.css";
function Sidebar() {
  return (
    <div className="d-flex flex-column">
      <div>
        <MDBNavbar className="shadow-0" light bgColor="white">
          <MDBContainer fluid className="d-flex justify-content-center ">
            <Link to={"/"}>
              <MDBNavbarBrand>
                <div className="d-flex mt-3">
                  <i className="fa-regular fa-map fs-2 text-muted"></i>
                  <h3 className="text-muted ms-3">Contacts</h3>
                </div>
              </MDBNavbarBrand>
            </Link>
          </MDBContainer>
        </MDBNavbar>
        <hr />
      </div>
      <div className="d-flex">
        <div className="mt-4">
          <ul style={{ listStyle: "none" }}>
            <li className="mb-3">
              <i class="fa-solid fa-house-chimney-user fa-xl"></i>
            </li>

            <li className="mb-3">
              <i class="fa-solid fa-clock-rotate-left fa-xl"></i>
            </li>

            <li className="mb-3">
              <i class="fa-solid fa-wand-magic-sparkles fa-xl"></i>{" "}
            </li>

            <li className="mb-3">
              <i class="fa-solid fa-download fa-xl"></i>{" "}
            </li>

            <li className="mb-3">
              <i class="fa-solid fa-user-xmark fa-xl"></i>{" "}
            </li>
          </ul>
        </div>
        {/* headings */}
        <div className="mt-4">
          <ul style={{ listStyle: "none" }}>
            <Link to={"/"} className="text-muted">
              <li className="mb-3">Home</li>
            </Link>

            <li className="mb-3 text-muted">Frequent</li>

            <li className="mb-3 text-muted">Other Contacts</li>

            <li className="mb-3 text-muted">Import</li>

            <li className="mb-3 text-muted">Bin</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
