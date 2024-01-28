import { TechnologiesEnum } from "./enums.utils";

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  images: Array<string>;
  url: string | undefined;
  technologies: Array<TechnologiesEnum>;
  primaryTechnologies: Array<TechnologiesEnum>;
};

export type ConnectionItem = {
  url: string;
  username: string;
  icon: any;
};
