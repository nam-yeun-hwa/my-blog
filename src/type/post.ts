export interface IPost {
  id: number;
  title: string;
  date: string;
  folder: Folder;
  preview: string;
  post: Array<{ type: string; value: string }>;
}

export enum Folder {
  React = 'REACT',
  Javascript = 'JAVASCRIPT',
}
