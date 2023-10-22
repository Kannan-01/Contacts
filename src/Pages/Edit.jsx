import React from "react";
import Navibar from "../Components/Navibar";
import Sidebar from "../Components/Sidebar";
import EditContact from '../Components/EditContact'
import { useSelector } from "react-redux/es/hooks/useSelector";

function Edit() {
    const index = useSelector((state) => state.indexData.index);
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#f2f2f2" }}
    >
      <div
        style={{
          width: "95%",
          height: "90%",
          backgroundColor: "#f2f2f2",
        }}
        className="d-flex"
      >
        {/* for side bar */}
        <div
          style={{
            backgroundColor: "white",
            width: "30%",
            height: "100%",
            marginRight: "20px",
          }}
        >
          <Sidebar />
        </div>

        <div
          style={{
            width: "100%",
            backgroundColor: "#f2f2f2",
            borderRadius: "10px",
          }}
        >
          {/* navbar */}
          <div
            style={{
              height: "10%",
              backgroundColor: "white",
            }}
          >
            <Navibar />
          </div>
          {/* contact section  */}
          <div
            className=""
            style={{ height: "90%", backgroundColor: "white" }}
          >
            <EditContact index={index}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
