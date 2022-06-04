import React from "react";
import "../componets.css";

const Navbar = ({ children, ...rest }) => {
  return (
    <header>
      <div class="div-container">
        <h1>page title</h1>
        <nav>
          <ul>
            <li class="selected-menu">
              <a {...rest}>About Me</a>
            </li>
            <li>
              <a {...rest}>Family &amp; Friends</a>
            </li>
            <li>
              <a {...rest}>Portfolio</a>
            </li>
            <li>
              <a {...rest}>Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
