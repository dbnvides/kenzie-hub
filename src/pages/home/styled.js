import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMain = styled(motion.main)`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-grey-4);
`;

export const StyledProfile = styled.header`
  width: 100%;
  height: 118px;
  border-bottom: 1px solid var(--color-grey-2);

  .boxProfile {
    width: 100%;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

export const StyledProfileName = styled.div`
  h2 {
    font-size: var(--font-size-title1);
    color: var(--color-grey-0);
    line-height: 28px;
  }
`;

export const StyledModule = styled.p`
  font-size: var(--font-size-headline);
  color: var(--color-grey-1);
  font-weight: 600;
`;

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  div {
    padding: 20px 0;
    h2 {
      font-size: var(--font-size-title1);
      color: var(--color-grey-0);
      line-height: 28px;
    }
  }

  img {
    width: 245px;
    min-width: 320px;
    max-width: 400px;
    align-self: center;
  }
`;

export const TitleEmpty = styled.h2`
  align-self: center;
  font-size: var(--font-size-title1);
  color: var(--color-grey-0);
  padding: 20px;
`;
