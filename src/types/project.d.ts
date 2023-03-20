export default interface IProject {
  meta: {};
  data: {
    id: number;
    attributes: {
      title: string;
      body: any;
      slug: string;
      tag: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
    };
  };
}
