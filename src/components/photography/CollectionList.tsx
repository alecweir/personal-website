import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import IPhotography from "@/types/photography";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  min-height: 500px;
`;

const List = styled(motion.ol)`
  padding: 0;
  max-width: 100%;
  width: 100%;
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
  z-index: 2;

  &:hover {
    > li {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

const ListItem = styled(motion.li)`
  list-style: none;
  font-size: clamp(1.5vw, 1.5rem, 52px);
  padding: 1rem 1rem;
  list-style-position: inside;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
  white-space: nowrap;

  sup {
    opacity: 0.5;
    font-size: 0.8rem;
    margin-bottom: 10px;
    margin-left: 12px;
  }

  a {
    color: #222;
    text-decoration: none;
  }

  &:hover {
    /* text-decoration: line-through; */
    opacity: 1 !important;
  }

  @media screen and (max-width: 1000px) {
    border: 1px solid #eee;
    border-radius: 100px;
    margin: 10px 0;
    padding: 2rem;
  }
`;

const Thumbnail = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  max-height: 80vh;
  height: 100%;
  position: sticky;
  flex-shrink: 0;
  bottom: calc(50% - 250px);
  top: calc(50% - 250px);
  overflow: visible;
  margin: 0 0 0 30px;
  align-self: flex-end;
  float: right;
  min-height: 900px;

  img {
    max-height: 50vh;
    object-fit: cover;
    flex-grow: 0;
    width: 100%;
    position: sticky;
    bottom: 25vh;
  }

  p {
    opacity: 0.5;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const NSFWBadge = styled.span`
  background-color: rgba(255, 0, 0, 0.2);
  padding: 5px 10px;
  color: red;
  margin-left: 12px;
  font-size: 11px;
  border-radius: 4px;
  line-height: 0;
`;

interface Props {
  photos: IPhotography["data"][];
}

const CollectionList = ({ photos }: Props) => {
  const [active, setActive] = useState(photos[0].attributes.title);

  return (
    <>
      <Wrapper>
        <List>
          {photos.map(({ attributes, id }) => (
            <ListItem onMouseOver={() => setActive(attributes.title)} key={id}>
              <a href={`/photography/${attributes.slug}`}>
                {attributes.title}
                {attributes.NSFW && <NSFWBadge>NSFW</NSFWBadge>}
                <sup>({attributes.images.data.length})</sup>
              </a>
            </ListItem>
          ))}
        </List>

        <Thumbnail
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 0.5 },
          }}
        >
          <AnimatePresence>
            {photos.map(({ attributes, id }) => (
              <motion.img
                src={
                  process.env.NEXT_PUBLIC_IMAGE_HOST +
                  ":" +
                  process.env.NEXT_PUBLIC_IMAGE_HOST_PORT +
                  attributes.images.data[0].attributes.url
                }
                key={id}
                animate={
                  attributes.title === active
                    ? { x: 0, display: "flex" }
                    : { x: -10, display: "none" }
                }
              />
            ))}
          </AnimatePresence>
        </Thumbnail>
      </Wrapper>
    </>
  );
};

export default CollectionList;
