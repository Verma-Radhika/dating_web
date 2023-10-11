import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { AllRoute } from "./Route/AllRoute";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="appContainer">
        <div>
          <Sidebar />
        </div>
        <div>
          <div
            class="card"
            style={{
              width: "100%",
              height: "100px",
              // border: "1px solid red",
              marginTop: "10px",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpghOK0Jd1I3uGSPK3_dXTLeGIqk9IgavpIVECBB6T&s"
              width={"100%"}
              height="100%"
            />
          </div>

          <div
            class="card"
            style={{
              marginTop: "10px",
            }}
          >
            <div class="card-body">
              Oops, you dont have a profile photo! If you want to become more
              popular and make more friends, upload your photo now!
            </div>
          </div>
          <AllRoute />
        </div>
      </div>
    </>
  );
};

export default App;
