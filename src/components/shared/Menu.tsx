import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Instagram, GitHub, LinkedIn, Unsplash } from "./Icons";

const MenuVariants = {
  open: {
    height: "auto",
    width: "auto",
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    height: 0,
    width: 0,
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const BackdropVariants = {
  open: { opacity: 0.9 },
  closed: { opacity: 0 },
};

const ItemVariants = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuTrigger = styled(motion.button)`
  cursor: pointer;
  border: none;
  background: transparent;
  /* font-size: 1.5rem; */
  font-size: initial;
  color: black;
  pointer-events: all;
`;

const MenuBody = styled(motion.div)`
  background-color: white;
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  overflow: hidden;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  ul {
    margin: 30px 50px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Backdrop = styled(motion.div)`
  background-color: black;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const MenuItem = styled(motion.li)`
  list-style: none;
  margin: 0;
  padding: 10px 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    opacity: 0.5;
    color: black;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <MenuTrigger onClick={toggleMenu}>+ connect</MenuTrigger>

      <MenuBody
        variants={MenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{ position: isOpen ? "absolute" : "fixed" }}
      >
        <motion.ul>
          <MenuItem
            variants={ItemVariants}
            style={{ pointerEvents: isOpen ? "all" : "none" }}
          >
            <a href="http://github.com">
              <GitHub /> GitHub
            </a>
          </MenuItem>
          <MenuItem
            variants={ItemVariants}
            style={{ pointerEvents: isOpen ? "all" : "none" }}
          >
            <a href="https://linkedin.com">
              <LinkedIn />
              LinkedIn
            </a>
          </MenuItem>
          <MenuItem
            variants={ItemVariants}
            style={{ pointerEvents: isOpen ? "all" : "none" }}
          >
            <a href="https://instagram.com">
              <Instagram /> Instagram
            </a>
          </MenuItem>
          <MenuItem
            variants={ItemVariants}
            style={{ pointerEvents: isOpen ? "all" : "none" }}
          >
            <a href="https://unsplash.com">
              <Unsplash /> Unsplash
            </a>
          </MenuItem>
        </motion.ul>
      </MenuBody>

      <Backdrop
        variants={BackdropVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        onClick={toggleMenu}
        style={isOpen ? { pointerEvents: "all" } : { pointerEvents: "none" }}
      />
    </>
  );
};

export default Menu;
