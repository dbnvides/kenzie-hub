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

  h1 {
    color: var(--color-primary);
    font-size: var(--font-size-main-title);
  }
`;
