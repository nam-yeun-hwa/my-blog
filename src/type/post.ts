/**
 * @abstract IPost
 * @description 게시물 타입
 */
export interface IPost {
  id: number;
  title: string;
  date: string;
  folder: Folder;
  preview: string;
  post: Array<{ type: string; value: string }>;
}

export interface IAlgorithmPost {
  id: number;
  title: string;
  date: string;
  folder: Folder;
  part_title: string;
  lv: LEVEL;
  post: Array<{ type: string; value: string }>;
}

export enum Folder {
  React = 'REACT',
  Javascript = 'JAVASCRIPT',
  Algorithm = 'ALGORITHM',
}

export enum LEVEL {
  Lv1 = 'LEVEL1',
  Lv2 = 'LEVEL2',
  Lv3 = 'LEVEL3',
}
