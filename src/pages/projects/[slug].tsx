import { GetStaticPaths, GetStaticPropsContext } from "next";
import { MDXRemote } from "next-mdx-remote";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ParsedUrlQuery } from "querystring";

import Container from "@/components/shared/Container";
import { Button } from "@/components/landing/Introduction";
import {
  getNextAndPreviousProject,
  getProjectPaths,
  getSingleProject,
  getSiteConfiguration,
} from "@/utils/data";
import formatDate from "@/utils/formatDate";
import { Components, H1 } from "@/components/projects/MDXOverrides";
import IProject from "@/types/project";
import Head from "next/head";
import IConfiguration from "@/types/configuration";

const ProjectMeta = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  padding: 150px 0;

  p {
    opacity: 0.5;
    display: inline;
  }
`;

const ProjectBody = styled(motion.div)`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
`;

const ProjectTitle = styled(H1)`
  max-width: 100%;
  margin: 32px 0;
`;

const Tag = styled.span`
  padding: 5px 12px;
  border: 1px solid black;
  border-radius: 100px;
  margin-right: 20px;
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
  project: IProject["data"];
  next: IProject["data"]["attributes"];
  previous: IProject["data"]["attributes"];
  site: IConfiguration;
}

const ProjectPage = ({ project, next, previous, site }: Props) => {
  const { title, publishedAt, updatedAt, body, tag } = project.attributes;

  const published = formatDate(publishedAt);
  const updated = formatDate(updatedAt);

  const isEdited = published !== updated;

  return (
    <>
      <Head>
        <title>
          {project.attributes.title} — {site.attributes.siteTitle}
        </title>
      </Head>
      <Container>
        <ProjectMeta>
          <Tag>{tag}</Tag>
          <ProjectTitle>{title}</ProjectTitle>
          <p>
            {formatDate(publishedAt)} {isEdited && `(${updated})`}
          </p>
        </ProjectMeta>
        <ProjectBody>
          <MDXRemote {...body} components={Components} />
        </ProjectBody>

        <FooterNavigation>
          {previous && (
            <StyledButton href={`/projects/${previous.slug}`}>
              &lt;- &nbsp; {previous.title}
            </StyledButton>
          )}

          {next && (
            <StyledButton href={`/projects/${next.slug}`}>
              {next.title} &nbsp; -&gt;
            </StyledButton>
          )}
        </FooterNavigation>
      </Container>
    </>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getProjectPaths();

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { slug } = context.params as IParams;

  const { id, ...project } = await getSingleProject(slug);
  const [next, previous] = await getNextAndPreviousProject(id);
  const site = await getSiteConfiguration();

  return {
    props: {
      project,
      next,
      previous,
      site,
    },
  };
};
