import styled from "styled-components";

import Container from "./Container";
import { Instagram, LinkedIn, Unsplash } from "./Icons";
import GitHub from "./Icons/GitHub";

const StyledFooter = styled.footer`
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 3rem 0;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  opacity: 0.5;
  margin: 1rem;
`;

const Copyright = styled.p`
  text-align: center;
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <List>
          <ListItem>
            <GitHub />
          </ListItem>
          <ListItem>
            <LinkedIn />
          </ListItem>
          <ListItem>
            <Instagram />
          </ListItem>
          {/* <ListItem>Unsplash</ListItem> */}
          <ListItem>
            <Unsplash />
          </ListItem>
        </List>
      </StyledFooter>
      <Copyright>
        &copy; {new Date().getFullYear()} Alec Weir. All rights reserved.
      </Copyright>
    </Container>
  );
};

export default Footer;
