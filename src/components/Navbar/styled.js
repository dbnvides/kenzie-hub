import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: 1px solid var(--color-grey-2);
`;

export const StyledMenu = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--color-primary);
    font-size: var(--font-size-main-title);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 67px;
    height: 40px;
    border-radius: 4px;

    background: var(--color-grey-3);
    color: var(--color-grey-0);

    font-size: var(--font-size-headline);
    font-weight: 500;
  }

  button:hover {
    background: var(--color-grey-2);
  }
`;
