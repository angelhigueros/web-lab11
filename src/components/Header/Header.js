import React from "react";
import "../componets.css";

const Header = ({ children, ...rest }) => {
  return (
    <>
      <h2>&quot; Article Title &quot;</h2>
      <section>
        <h3>Paragraph Title</h3>
        <p class="section-img">
          <img src="http://placehold.it/550x300" alt="article" />
          <span>
            <br />
            <em>Image courtesy of Placehold.it</em>
          </span>
        </p>
      </section>
    </>
  );
};

export default Header;
