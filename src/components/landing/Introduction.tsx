import Container from "../shared/Container";

import styled from "styled-components";
import { motion } from "framer-motion";
// import { Link } from "../shared/Icons";

interface IntroductionProps {
  text: string;
}

export const Text = styled(motion.h1)`
  margin: 10rem 0 0 0;
  max-width: 1000px;
  font-size: clamp(3vw, 3rem, 38px);
  line-height: 1.4;

  a {
    color: black;
  }
`;

export const Button = styled(motion.a)`
  border: 1px solid black;
  border-radius: 100px;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  background: transparent;
  margin: 0 auto 0 0;
  font-size: 1rem;
  margin: 5rem auto 5rem 0;
  white-space: nowrap;
  text-decoration: none;
  color: black;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  will-change: background-color, color;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default function Introduction({ text }: IntroductionProps) {
  return (
    <Container>
      <Text initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        {text}
      </Text>
      {/* <Button>
        Print store <Link />
      </Button> */}
    </Container>
  );
}
