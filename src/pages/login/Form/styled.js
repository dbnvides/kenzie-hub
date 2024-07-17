import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledForm = styled.form`
  width: 95%;
  max-width: 369px;
  height: max-content;
  max-height: 502px;
  margin: 0 auto;
  background-color: var(--color-grey-3);

  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 33px 17.6477px;
  border-radius: 4px;

  h2 {
    font-size: var(--font-size-title1);
    color: var(--color-grey-0);
    text-align: center;
  }

  p {
    font-size: var(--font-size-headline);
    font-weight: 500;
    color: var(--color-grey-1);
    text-align: center;
    margin-top: 5px;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  padding: 10px;
  text-align: center;
  color: var(--color-grey-0);
  background-color: var(--color-grey-1);
  border: 1.2182px solid var(--color-grey-1);
  border-radius: 4px;
  font-size: var(--font-size-title4);
  font-weight: 500;
  margin-top: 20px;

  &:hover {
    background-color: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-2);
  }
`;
