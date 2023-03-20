export default interface IPhotography {
  meta: {};
  data: {
    id: number;
    attributes: {
      title: string;
      NSFW: boolean;
      slug: string;
      images: {
        data: IImage[];
      };
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
    };
  };
}

export interface IImage {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: any; // TODO: clarify whether this property is an `object`
    createdAt: Date;
    updatedAt: Date;
    formats: {
      thumbnail: IImageFormat;
      medium: IImageFormat;
      small: IImageFormat;
      large: IImageFormat;
    };
  };
}

export interface IImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string;
  width: number;
  height: number;
  size: number;
  url: string;
}
