import React from "react";
import { faEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5  ">
      <div className="container-fluid">
        <div className="row">
          <p id="p">Copyright &copy; 2023 AJ Inc. All right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
