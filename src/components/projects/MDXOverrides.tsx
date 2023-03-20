import styled from "styled-components";
import { motion } from "framer-motion";

export const Paragraph = styled(motion.p)`
  line-height: 1.6;
  font-size: clamp(0.6vw, 1.1rem, 22px);

  a {
    color: #357ded;
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;
    will-change: opacity;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const H1 = styled(motion.h1)`
  font-size: clamp(2vw, 2rem, 2.5rem);
`;

export const H2 = styled(motion.h2)`
  font-size: clamp(1.75vw, 1.7rem, 32px);
`;

export const H3 = styled(motion.h3)`
  font-size: clamp(1vw, 1.3rem, 28px);
  font-weight: normal;
`;

export const Image = styled(motion.img)`
  width: calc(100% + 3rem) !important;
  margin: 3rem -1.5rem;
`;

export const Code = styled(motion.code)`
  background-color: #eee;
  border-radius: 8px;
  padding: 6px 10px;
`;

export const Pre = styled(motion.pre)`
  background: #eee;
  line-height: 1.6;
  padding: 1rem;
  border-radius: 12px;
  overflow: scroll;

  code {
    background: none;
    padding: 0;
    font-size: clamp(0.7vw, 1rem, 22px);
  }
`;

export const Ul = styled(motion.ul)`
  padding-left: 0;

  li {
    list-style: none;

    &::before {
      content: "->";
      display: inline-block;
      margin: 0 12px;
    }
  }
`;

export const Li = styled(motion.li)`
  line-height: 1.6;
  font-size: clamp(0.7vw, 1.2rem, 22px);
`;

export const Ol = styled(motion.ol)`
  font-size: clamp(0.7vw, 1.2rem, 22px);
`;

export const Components = {
  p: Paragraph,
  h1: H1,
  h2: H2,
  h3: H3,
  img: Image,
  code: Code,
  pre: Pre,
  ul: Ul,
  ol: Ol,
  li: Li,
};
