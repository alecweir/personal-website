import { useState } from "react";
import Head from "next/head";

import CategorySelector from "@/components/landing/CategorySelector";
import Container from "@/components/shared/Container";
import Introduction from "@/components/landing/Introduction";
import Tabs from "@/components/landing/Tabs";

import { TAB_TYPES } from "@/constants/tab.constants";
import IPhotography from "@/types/photography";
import IProject from "@/types/project";
import IConfiguration, { ITag } from "@/types/configuration";
import { getPhotos, getProjects, getSiteConfiguration } from "@/utils/data";

export default function Home({ photos, projects, cfg }: Props) {
  const [activeTab, setActiveTab] = useState(TAB_TYPES["PHOTOS"]);

  return (
    <>
      <Head>
        {cfg.attributes.tags.map((tag: ITag) => (
          <meta name={tag.title} content={tag.content} key={tag.id} />
        ))}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Alec Weir</title>
      </Head>
      <main>
        <Introduction />
        <Container>
          <figure>
            <img src="/DSC_3345.jpg" alt="" />
          </figure>

          <CategorySelector onChange={setActiveTab} />

          <Tabs active={activeTab} photos={photos} projects={projects} />
        </Container>
      </main>
    </>
  );
}

interface Props {
  photos: IPhotography["data"][];
  projects: IProject["data"][];
  cfg: IConfiguration;
}

export async function getStaticProps() {
  const photos = await getPhotos();
  const projects = await getProjects();
  const cfg = await getSiteConfiguration();

  return {
    props: {
      photos,
      projects,
      cfg,
    },
  };
}
