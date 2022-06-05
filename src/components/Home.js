import React from "react";
import logo from "../logo.png";
import Boxes from "./Boxes";
import Boxes2 from "./Boxes2";
import Boxes3 from "./Boxes3";

function Home() {
  return (
    <body
      style={{
        background: "linear-gradient(#FFFFFF, #D2B48C)",
        height: "1000px",
      }}
    >
      <section>
        <div class="recipelogo">
          <img src={logo} alt="logo" width="450" height="450" class="center" />

          <h3>Select recipes to browse our collection or to input your own!</h3>
          <h3>
            If you are looking for anything specific, here are some of our
            categories:{" "}
          </h3>
          <Boxes />
          <Boxes2 />
          <Boxes3 />
        </div>
      </section>
    </body>
  );
}

export default Home;
