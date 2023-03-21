import { IImage } from "./photography";

export default interface IConfiguration {
  id: number;
  attributes: {
    printStoreEnabled: boolean;
    createdAt: string;
    updatedAt: string;
    siteTitle: string;
    tags: Arrag<ITag>;
    introduction: string;
    bannerImage: { data: IImage };
  };
}

export interface ITag {
  id: number;
  title: string;
  content: string;
}
