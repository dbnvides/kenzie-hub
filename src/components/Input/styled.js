import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  position: relative;

  label {
    font-size: var(--font-size-headline);
    color: var(--color-grey-0);
  }

  input {
    width: 100%;
    padding: 0px 13.0293px;
    height: 38px;
    background: var(--color-grey-2);
    border: 0.9772px solid var(--color-grey-2);
    border-radius: 3.20867px;
    color: var(--color-grey-0);
    line-height: 26px;
    font-size: var(--font-size-headline);
    margin-bottom: 15px;

    @media (min-width: 768px) {
      font-size: var(--font-size-title4);
    }
  }

  span {
    position: absolute;
    right: 10px;
    top: 45%;
    font-size: 20px;
    color: var(--color-grey-0);
    cursor: pointer;
  }

  input:focus {
    border: 0.9772px solid var(--color-grey-0);
    outline: 0.9772px solid var(--color-grey-0);
  }

  input::placeholder {
    color: var(--color-grey-1);
    font-size: var(--font-size-headline);
    @media (min-width: 768px) {
      font-size: var(--font-size-title4);
    }
  }
`;
