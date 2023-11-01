import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import EditContact from "../Components/EditContact";
import Navibar from "../Components/Navibar";

function Edit() {
  const index = useSelector((state) => state.indexData.index);
  return (
    // background parent
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {/* container inside parent */}
      <div
        style={{
          width: "95%",
          height: "90%",
          borderRadius: "50%",
        }}
        className="d-flex"
      >
        {/* for the content  */}
        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              height: "10%",
              backgroundImage:
                "radial-gradient( circle 590px at 8.2% 13.8%,  rgba(18,35,60,1) 0%, #bbb 90% )",
            }}
          >
            <Navibar />
          </div>

          <div className="d-flex" style={{ height: "90%" }}>
            <div
              style={{
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <EditContact index={index} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
