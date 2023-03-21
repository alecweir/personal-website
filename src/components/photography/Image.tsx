import { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion"; // TODO: Add smooth parallax animations (?)
import { IImage } from "@/types/photography";

const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_HOST;

const Outer = styled(motion.div)`
  width: 100%;
  object-fit: cover;
  max-width: calc(50% - 1.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
    padding: 1.5rem 0 0 0 !important;
  }
`;

const Inner = styled(motion.img)`
  object-fit: contain !important;
  max-width: 100%;

  @media screen and (max-width: 1000px) {
    height: auto;
    max-width: 100%;
  }
`;

export default function Image({ image }: { image: IImage; alt: string }) {
  const ref = useRef(null);
  const { formats, alternativeText } = image.attributes;
  const _image = formats.large;
  const isInView = useInView(ref);

  return (
    <Outer>
      <Inner
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView && { opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.8 }}
        src={`${BASE_URL}${_image.url}`}
        alt={alternativeText}
        height={_image.height}
        width={_image.width}
        loading="lazy"
      />
    </Outer>
  );
}
