import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledBackModal, StyledModal } from "./styled";

export const Modal = ({ children }) => {
  const { closeModal } = useContext(TechContext);

  return (
    <StyledBackModal>
      <StyledModal>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>
        {children}
      </StyledModal>
    </StyledBackModal>
  );
};
