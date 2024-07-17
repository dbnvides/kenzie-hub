import { StyledButton } from "./styled";

export const Button = ({ type, onClick, children, disable, classname }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disable}
      className={classname}
    >
      {children}
    </StyledButton>
  );
};
