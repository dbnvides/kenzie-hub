import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-grey-4);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 95%;
  max-width: 369px;
  align-items: center;
  margin-top: 20px;

  h1 {
    color: var(--color-primary);
    font-size: var(--font-size-main-title);
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 67px;
  height: 40px;
  border-radius: 4px;

  background: var(--color-grey-3);
  color: var(--color-grey-0);

  font-size: var(--font-size-headline);

  &:hover {
    background-color: var(--color-grey-2);
  }
`;
