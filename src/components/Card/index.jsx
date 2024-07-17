import React from "react";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledCard } from "./styled";

const CardTechnology = ({ tecName, level, id, children }) => {
  const { setEditTech } = useContext(TechContext);

  return (
    <StyledCard id={id}>
      <div onClick={() => setEditTech(id, tecName, level)}>
        <h4>{tecName}</h4>
        <p>{level}</p>
      </div>
      {children}
    </StyledCard>
  );
};

export default CardTechnology;
