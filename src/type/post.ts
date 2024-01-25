/**
 * @abstract IPost
 * @description 게시물 타입 인터페이스
 */
export interface IPost {
  id: number;
  title: string;
  date: string;
  folder: Folder;
  preview: string;
  post: Array<{ type: string; value: string }>;
}

/**
 * @abstract IAlgorithmPost
 * @description 알고리즘 포스트 인터페이스
 */
export interface IAlgorithmPost {
  id: number;
  title: string;
  date: string;
  folder: Folder;
  part_title: string;
  lv: Level;
  post: Array<{ type: string; value: string }>;
}

/**
 * @enum Folder
 * @description 게시글 카테고리
 */
export enum Folder {
  REACT = 'React',
  JAVASCRIPT = 'Javascript',
  ALGORITHM = 'Algorithm',
  HTMLCSS = 'HtmlCSS',
  LIBRARY = 'library',
  WEBPERFORMANCE = 'WebPerformance',
  REGULAREXPRESSION = 'RegularExpression',
  CONVENTION = 'Convention',
  MACBOOK = 'Macbook',
  DOCKER = 'Docker',
  DEVOPE = 'Devope',
  GIT = 'Git',
  AWS = 'Aws',
}

/**
 * @enum Level
 * @description 알고리즘 레벨
 */
export enum Level {
  Lv1 = 'LEVEL1',
  Lv2 = 'LEVEL2',
  Lv3 = 'LEVEL3',
}

/**
 * @enum ComponentType
 * @description 게시물 사용 컴포넌트 타입
 */
export enum ComponentType {
  NORMAL = 'normal',
  EMPHASIS = 'emphasis',
  CODE = 'code',
  TABLE = 'table',
  STRINGLIST = 'stringlist',
  NUMLIST = 'numlist',
  H2 = 'h2',
  H4 = 'h4',
  H3 = 'H3',
}
