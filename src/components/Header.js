import React from "react";

const Header = (props) => {
  return (
    <nav class="navbar">
      <div className="row col-12 d-flex justify-content-center">
        <span className="h2">{props.title}</span>
      </div>
    </nav>
  );
};

export default Header;
