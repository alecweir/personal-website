import IPhotography from "@/types/photography";
import IProject from "@/types/project";
import axios from "axios";
import { serialize } from "next-mdx-remote/serialize";

const token = `Bearer ${process.env.API_TOKEN}`;

const source = axios.create({
  baseURL: process.env.API_URI,
  headers: {
    Authorization: token,
  },
});

export const getPhotos = async () => {
  const { data } = await source.get("/photography-collections", {
    params: {
      populate: "*",
    },
  });

  return data.data;
};

export const getPhotoPaths = async () => {
  const { data } = await source.get("/photography-collections");

  return data.data.map((path: IPhotography["data"]) => ({
    params: { slug: path.attributes.slug },
  }));
};

export const getPhotoCollection = async (slug: string) => {
  const { data } = await source.get("/photography-collections", {
    params: {
      populate: "*",
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
  });

  return data.data[0];
};

export const getNextAndPreviousCollection = async (id: number) => {
  const { data: prev } = await source.get("/photography-collections", {
    params: {
      sort: "publishedAt:desc",
      filters: {
        id: {
          $lt: id,
        },
      },
      pagination: {
        limit: 1,
      },
    },
  });

  const { data: next } = await source.get("/photography-collections", {
    params: {
      filters: {
        id: {
          $gt: id,
        },
      },
      pagination: {
        limit: 1,
      },
    },
  });

  return [
    !!prev.data.length ? prev.data[0].attributes.slug : null,
    !!next.data.length ? next.data[0].attributes.slug : null,
  ];
};

export const getProjects = async () => {
  const { data } = await source.get("/projects", {
    params: {
      sort: "publishedAt:desc",
      pagination: {
        limit: 5,
      },
    },
  });

  return data.data;
};

export const getProjectPaths = async () => {
  const { data } = await source.get("/projects");

  return data.data.map((path: IProject["data"]) => ({
    params: { slug: path.attributes.slug },
  }));
};

export const getSingleProject = async (slug: string) => {
  const { data } = await source.get("/projects", {
    params: {
      populate: "*",
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
  });

  data.data[0].attributes.body = await serialize(data.data[0].attributes.body);

  return data.data[0];
};

export const getNextAndPreviousProject = async (id: number) => {
  const { data: prev } = await source.get("/projects", {
    params: {
      sort: "publishedAt:desc",
      filters: {
        id: {
          $lt: id,
        },
      },
      pagination: {
        limit: 1,
      },
    },
  });

  const { data: next } = await source.get("/projects", {
    params: {
      filters: {
        id: {
          $gt: id,
        },
      },
      pagination: {
        limit: 1,
      },
    },
  });

  return [
    !!prev.data.length ? prev.data[0].attributes : null,
    !!next.data.length ? next.data[0].attributes : null,
  ];
};

export const getSiteConfiguration = async () => {
  const { data } = await source.get("/site-configuration", {
    params: {
      populate: "*",
    },
  });

  return data.data;
};
