import React from "react";

import styled from "styled-components";

const Nav = styled.nav`
  letter-spacing: 0.2em;
  margin-left: 20px;
`;

const Header = (props) => {
  return (
    <Nav>
      <div className="row col-12 d-flex justify-content-center mt-4">
        <span className="h2 mt-4">{props.title}</span>
      </div>
    </Nav>
  );
};

export default Header;
