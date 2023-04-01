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

export default function Home({ photos, projects, site }: Props) {
  const [activeTab, setActiveTab] = useState(TAB_TYPES["PHOTOS"]);

  return (
    <>
      <Head>
        {site.attributes.tags.map((tag: ITag) => (
          <meta name={tag.title} content={tag.content} key={tag.id} />
        ))}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>{site.attributes.siteTitle}</title>
      </Head>
      <main>
        <Introduction text={site.attributes.introduction} />
        <Container>
          <figure>
            <img
              src={
                process.env.NEXT_PUBLIC_IMAGE_HOST +
                site.attributes.bannerImage.data.attributes.url
              }
              alt=""
            />
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
  site: IConfiguration;
}

export async function getStaticProps() {
  const photos = await getPhotos();
  const projects = await getProjects();
  const site = await getSiteConfiguration();

  return {
    props: {
      photos,
      projects,
      site,
    },
  };
}
