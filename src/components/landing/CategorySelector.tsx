import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { TAB_TYPES } from "@/constants/tab.constants";

const Wrapper = styled(motion.div)`
  margin: 10rem auto;
  display: flex;
  position: relative;
  /* mix-blend-mode: difference; */
  top: 3rem;
  gap: 8px;
  border-radius: 100px;
  background-color: #eee;
  /* border: 1px solid white; */
`;

const Button = styled(motion.div)`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* mix-blend-mode: difference; */
  padding: 16px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  h1 {
    font-size: 1rem;
    z-index: 2;
    mix-blend-mode: difference;
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  width: calc(50% - 18px);
  border: 1px solid white;
  background: white;
  height: calc(100% - 12px);
  border-radius: 1000px;
  outline: none;
`;

interface OptionProps {
  active: string;
}

const Option = styled(motion.h1)<OptionProps>`
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;

interface Props {
  onChange: any;
}

const CategorySelector = ({ onChange }: Props) => {
  const [active, setActive] = useState(TAB_TYPES["PHOTOS"]);

  useEffect(() => {
    onChange(active);
  }, [active, onChange]);

  return (
    <Wrapper>
      <Button onClick={() => setActive(TAB_TYPES["PHOTOS"])}>
        {active === TAB_TYPES["PHOTOS"] && <Background layoutId="background" />}
        <Option active={(active === TAB_TYPES["PHOTOS"]).toString()}>
          Photos
        </Option>
      </Button>
      <Button onClick={() => setActive(TAB_TYPES["PROJECTS"])}>
        {active === TAB_TYPES["PROJECTS"] && (
          <Background layoutId="background" />
        )}
        <Option active={(active === TAB_TYPES["PROJECTS"]).toString()}>
          Journal
        </Option>
      </Button>
    </Wrapper>
  );
};

export default CategorySelector;
