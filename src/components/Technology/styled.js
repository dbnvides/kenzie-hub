import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  .title-section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      font-size: 17px;
      border-radius: 4px;
      color: var(--color-grey-0);
      background-color: var(--color-grey-3);
    }

    button:hover {
      background-color: var(--color-grey-2);
    }
  }
`;

export const StyledListTechnology = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 15px;
  background-color: var(--color-grey-3);
  border-radius: 4px;
  height: max-content;
  max-height: 60vh;
  overflow: auto;
`;
