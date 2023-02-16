/*eslint-disable*/
import React from "react";

import "./Home.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const adminHandler = () => {
    navigate("/admin");
  };
  const agentHandler = () => {
    navigate("/login");
  };
  return (
    <div className="home">
      <div className="wrapper">
        <h2>Login </h2>
        <div class="image">
          {" "}
          <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png" />
        </div>
        <div className="container-home">
          <button onClick={adminHandler}>Admin</button>

          <button onClick={agentHandler}>Agent</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
