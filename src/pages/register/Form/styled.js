import styled from "styled-components";
import { Form } from "../../../components/Form";

export const StyledForm = styled(Form)`
  @media (min-width: 768px) {
    display: flex;
    max-width: 720px;

    .boxForm {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 20px;
    }

    .boxRight {
      width: 45%;
    }

    .boxLeft {
      width: 45%;

      button {
        margin-top: 20px;
      }
    }
  }

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
`;
