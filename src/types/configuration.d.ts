export default interface IConfiguration {
  id: number;
  attributes: {
    printStoreEnabled: boolean;
    createdAt: string;
    updatedAt: string;
    siteTitle: string;
    tags: Arrag<ITag>;
  };
}

export interface ITag {
  id: number;
  title: string;
  content: string;
}
