import React from "react";
import Navibar from "../Components/Navibar";
import Sidebar from "../Components/Sidebar";
import NewContact from "../Components/NewContact";
function Home() {
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
            marginRight:"20px",
          }}
        >
          <Sidebar/>
        </div>

        <div style={{ width: "100%", backgroundColor: "#f2f2f2",borderRadius:"10px" }}>
            {/* navbar */}
          <div
            style={{
              height: "10%",
              backgroundColor: "white"
            }}
          >
            <Navibar/>
          </div>
          {/* contact section  */}
          <div style={{ height: "90%",backgroundColor: "white" }}>
            <NewContact/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
