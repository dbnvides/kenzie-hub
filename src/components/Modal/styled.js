import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: var(--color-grey-3);
  width: 95%;
  max-width: 369px;
  height: 300px;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  bottom: 60px;

  .btn-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    color: var(--color-grey-1);
    cursor: pointer;
    font-size: 15px;
  }
`;

export const StyledBackModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.1);
`;
