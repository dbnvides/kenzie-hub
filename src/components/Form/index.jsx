import React from "react";
import { StyledForm } from "./styled";

export function Form({ onSubmit, children, className }) {
  return (
    <StyledForm onSubmit={onSubmit} className={className} noValidate>
      {children}
    </StyledForm>
  );
}

export default Form;
