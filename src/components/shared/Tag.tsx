import styled from "styled-components";

interface Props {
  variant: "info" | "warn" | "danger";
  text: string;
}

enum Backgrounds {
  "info" = "light-blue",
  "warn" = "yellow",
  "danger" = "rgba(255, 0, 0, 0.1)",
}

enum Foreground {
  "info" = "blue",
  "warn" = "gold",
  "danger" = "rgba(255, 0, 0, 1)",
}

const Element = styled.span<{ variant: "info" | "warn" | "danger" }>`
  border-radius: 8px;
  padding: 8px 12px;
  background-color: ${({ variant }) =>
    variant ? Backgrounds[variant] : "#f0f0f0"};
  color: ${({ variant }) => (variant ? Foreground[variant] : "grey")};
  font-size: 0.6rem;
  margin: 0 10px;
`;

const Tag = ({ variant, text }: Props) => {
  return <Element variant={variant}>{text}</Element>;
};

export default Tag;
