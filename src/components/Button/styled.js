import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 38px;
  padding: 0px 22.3336px;

  background-color: var(--color-primary);
  color: var(--color-grey-0);
  border: 1.2182px solid var(--color-primary);
  border-radius: 4px;

  font-size: var(--font-size-title4);
  font-weight: 500;

  &:hover {
    background-color: var(--color-primary-focus);
  }
`;
