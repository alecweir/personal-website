import styled from "styled-components";

const Sidebar = styled.nav`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 90vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  flex-direction: column;
  overflow: scroll;

  img {
    width: auto;
    object-fit: contain;
    height: initial;
  }
`;

export default Sidebar;
