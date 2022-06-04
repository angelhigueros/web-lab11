import React from "react";
import "../componets.css";

const Footer = ({ children, ...rest }) => {
  return (
    <>
      <footer>
        <div class="div-container">
          <p>Copyright &copy; Creator-Name 2017 | Special Thanks to NAME</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
