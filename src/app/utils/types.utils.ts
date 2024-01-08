import { TechnologiesEnum } from "./enums.utils";

export type Project = {
    title: string;
    cover: any;
    images: Array<string>
    url: string | undefined;
    technologies: Array<TechnologiesEnum>
}