import React from "react";
import "../componets.css";

const Article = ({ children, ...rest }) => {
  return (
    <>
      <section>
        <p class="section-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          rhoncus luctus dui eu blandit. Proin ut ante eget magna ullamcorper
          lobortis. Praesent non arcu ac arcu accumsan faucibus pellentesque in
          metus. Cras facilisis enim eget sapien scelerisque commodo. Ut vel
          lectus in nisi egestas porta non id metus. Duis vel vehicula libero,
          at dictum orci. Integer eros arcu, interdum non mi nec, accumsan
          ultrices felis. Quisque in magna eu ante rutrum sagittis.
        </p>
      </section>
    </>
  );
};

export default Article;
