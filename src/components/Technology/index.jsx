import { useContext } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { TechContext } from "../../contexts/TechContext";
import { StyledListTechnology, StyledSection } from "./styled";

export const Technology = ({ children }) => {
  const { openModal } = useContext(TechContext);

  return (
    <>
      <StyledSection>
        <div className="title-section">
          <h2>Tecnologias</h2>
          <button onClick={openModal}>
            <MdOutlineAdd />
          </button>
        </div>
        <StyledListTechnology>{children}</StyledListTechnology>
      </StyledSection>
    </>
  );
};
