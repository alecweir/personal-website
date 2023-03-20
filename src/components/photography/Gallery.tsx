import { ReactNode } from "react";
import styled from "styled-components";

import Container from "../shared/Container";

const Element = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 50vh;
  max-width: 100vw !important;
`;

interface Props {
  children?: ReactNode | ReactNode[];
}

export default function Gallery({ children }: Props) {
  return <Element>{children}</Element>;
}
