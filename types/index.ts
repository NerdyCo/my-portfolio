export interface SanityProject {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  shortDescription: string;
  projectType: string;
  imageBanner: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}
