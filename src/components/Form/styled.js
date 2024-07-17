import styled from "styled-components";

export const StyledForm = styled.form`
  width: 95%;
  max-width: 369px;
  height: max-content;
  margin: 0 auto;
  background-color: var(--color-grey-3);

  display: flex;
  flex-direction: column;
  padding: 33px 17.6477px;
  border-radius: 4px;

  h2 {
    font-size: var(--font-size-title1);
    color: var(--color-grey-0);
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    font-size: var(--font-size-headline);
    font-weight: 500;
    color: var(--color-grey-1);
    text-align: center;
    margin: 20px 0;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    label {
      font-size: var(--font-size-headline);
      color: var(--color-grey-0);
    }
  }
`;
