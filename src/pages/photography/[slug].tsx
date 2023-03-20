import { GetStaticPropsContext } from "next";
import Head from "next/head";
import styled from "styled-components";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { ParsedUrlQuery } from "querystring";

import {
  getNextAndPreviousCollection,
  getPhotoCollection,
  getPhotoPaths,
} from "@/utils/data";

import Gallery from "@/components/photography/Gallery";
import Image from "@/components/photography/Image";
import IPhotography from "@/types/photography";
import { Button } from "@/components/landing/Introduction";

const StyledHeading = styled(motion.h1)`
  margin-top: 8rem;
  text-align: center;
  font-size: 12vw;
  position: fixed;
  width: 100%;
  top: 0;

  p {
    font-size: 1rem;
  }
`;

const FooterNavigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: 0 auto;
  text-transform: capitalize;
`;

interface Props {
  data: IPhotography["data"];
  previous: string;
  next: string;
}

export default function Photography({ data, previous, next }: Props) {
  const { scrollY } = useScroll();

  const photos = data.attributes.images.data;

  const offsetHeight = 50;
  const yRange = useTransform(scrollY, [500 - offsetHeight, 0], [0, 1]);
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });

  return (
    <>
      <Head>
        <title>{data.attributes.title} Photography &mdash; Alec Weir.</title>
      </Head>
      <StyledHeading style={{ opacity }}>{data.attributes.title}</StyledHeading>
      <Gallery>
        {photos.map((image) => (
          <Image
            image={image}
            key={image.id}
            alt={image.attributes.alternativeText}
          />
        ))}
      </Gallery>
      <FooterNavigation>
        {previous && (
          <StyledButton href={`/photography/${previous}`}>
            &lt;- &nbsp; {previous.replace("-", " ")}
          </StyledButton>
        )}

        {next && (
          <StyledButton href={`/photography/${next}`}>
            {next.replace("-", " ")} &nbsp; -&gt;
          </StyledButton>
        )}
      </FooterNavigation>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getPhotoPaths();

  return {
    paths: paths,
    fallback: false,
  };
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params as IParams;

  const { id, ...data } = await getPhotoCollection(slug);

  const [previous, next] = await getNextAndPreviousCollection(id);

  return {
    props: { data, previous, next },
  };
}
