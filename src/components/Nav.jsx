import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import { NavContainer } from "./Style";

function Nav() {
  return (
    <div>
      <NavContainer>
        <Logo />
        <Search />
      </NavContainer>
    </div>
  );
}

export default Nav;
