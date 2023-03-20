import styled from "styled-components";
import { motion } from "framer-motion";

export const MAX_CONTAINER_WIDTH = "2000px";

const Container = styled(motion.div)`
  max-width: ${MAX_CONTAINER_WIDTH};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin: 0 auto;

  > * {
    max-width: 100%;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  > figure {
    max-width: 100%;
    margin: 0;

    > figcaption {
      text-align: center;

      p {
        opacity: 0.5;
        display: inline-block;
      }

      a {
        color: #222;
        text-decoration: none;
        display: inline-block;
      }
    }
  }
`;

export default Container;
