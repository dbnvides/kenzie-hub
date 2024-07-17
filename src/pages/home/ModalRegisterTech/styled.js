import styled from "styled-components";
import Form from "../../../components/Form";

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 15px;
  background-color: var(--color-grey-2);
  color: var(--color-grey-0);
  font-size: var(--font-size-headline);
  border-radius: 4px 4px 0 0;
`;

export const StyledForm = styled(Form)`
  padding: 20px 7px;

  select {
    width: 100%;
    padding: 0px 13.0293px;
    height: 38px;
    background: var(--color-grey-2);
    border: 0.9772px solid var(--color-grey-2);
    border-radius: 3.20867px;
    color: var(--color-grey-1);
    line-height: 26px;
    font-size: var(--font-size-headline);
    margin-bottom: 20px;
  }

  select:focus {
    border: 0.9772px solid var(--color-grey-0);
    outline: 0.9772px solid var(--color-grey-0);
    color: var(--color-grey-0);
  }

  button {
    margin-top: 10px;
  }
`;
