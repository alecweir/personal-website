import styled from "styled-components";
import { motion } from "framer-motion";

import Container from "./Container";
import Menu from "./Menu";

const StyledContainer = styled(Container)`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  pointer-events: none;
`;

const Outer = styled(motion.nav)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SiteLink = styled(motion.a)`
  opacity: 1;
  color: black;
  mix-blend-mode: difference;
  text-decoration: none;
  margin: 0;
  pointer-events: all;
`;

const Navbar = () => {
  return (
    <StyledContainer>
      <Outer>
        <SiteLink href="/">alec weir</SiteLink>

        <Menu />
      </Outer>
    </StyledContainer>
  );
};

export default Navbar;
