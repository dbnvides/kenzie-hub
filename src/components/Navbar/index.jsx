import React from "react";
import { Container } from "../Container";
import { StyledMenu, StyledNavbar } from "./styled";

export const Navbar = ({ children }) => {
  return (
    <StyledNavbar>
      <Container>
        <StyledMenu>{children}</StyledMenu>
      </Container>
    </StyledNavbar>
  );
};
