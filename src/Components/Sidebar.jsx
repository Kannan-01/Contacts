import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { default as React } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/main.css";
function Sidebar() {
  return (
    <div className="d-flex flex-column">
      <div>
        <MDBNavbar className="shadow-0" light bgColor="white">
          <MDBContainer fluid>
            <Link to={"/"}>
              <MDBNavbarBrand>
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png"
                  height="45"
                  alt=""
                  loading="lazy"
                />
              </MDBNavbarBrand>
            </Link>
          </MDBContainer>
        </MDBNavbar>
      </div>
      <div className="d-flex justify-content-center">
        <Link to={"/create"}>
          <Button
            style={{
              textTransform: "capitalize",
              height: "48px",
              backgroundColor: "white",
              color: "black",
            }}
            className="shadow-0 fs-6 "
          >
            Create new contact
          </Button>
        </Link>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Sidebar;
