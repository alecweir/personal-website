import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align: "center" | "flex-start" | "flex-end";
  children: ReactNode | ReactNode[];
  className?: string;
}

const Heading = ({ type, align, children, className, ...rest }: Props) => {
  const Elem = styled(motion[type])`
    line-height: 1.7;
    align-self: ${align};
    text-align: ${align === "center" ? "center" : "inherit"};
  `;

  return (
    <Elem className={className} {...rest}>
      {children}
    </Elem>
  );
};

export default Heading;
