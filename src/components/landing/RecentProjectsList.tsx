import styled from "styled-components";
import { motion } from "framer-motion";

import IProject from "@/types/project";

const List = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ListItem = styled(motion.a)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 3rem;
  border-radius: 24px;
  color: black;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color;

  &:hover {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 1000px) {
    padding: 3rem 1rem;
  }
`;

const Tag = styled(motion.div)`
  border-radius: 100px;
  padding: 6px 10px;
  border: 1px solid black;
  background: transparent;
  color: black;
  margin: 0 0 22px 0;
  font-size: 0.8rem;
`;

interface Props {
  projects: IProject["data"][];
}

function RecentProjectsList({ projects }: Props) {
  return (
    <List>
      {projects!.map(({ attributes, id }) => (
        <ListItem key={id} href={`/projects/${attributes.slug}`}>
          <Tag>{attributes.tag}</Tag>
          <h1 style={{ margin: "0" }}>{attributes.title}</h1>
        </ListItem>
      ))}
    </List>
  );
}

export default RecentProjectsList;
