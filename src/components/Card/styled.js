import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  color: var(--color-grey-0);
  display: flex;
  justify-content: space-between;
  padding: 12px;
  min-height: 48px;
  align-items: center;
  border-radius: 4px;
  background-color: var(--color-grey-4);

  div {
    display: flex;
    gap: 15px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-grey-1);
    width: 25px;
    height: 25px;
    font-size: 20px;
    border-radius: 4px;
  }

  button:hover {
    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
  }
`;
