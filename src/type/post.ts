import { ImageManagerProps } from 'app/_component/common/ImageLoader';
import {
	HeadingType,
	HeadingWeightProps,
} from 'app/_component/detailPage/Heading';
import { promptType } from 'app/_component/detailPage/Prompts';
import { TableProps } from 'app/_component/table/BasicTypeTable';
import { ReactNode } from 'react';

// export type headerType = {
// 	accessorKey: string;
// 	header: string;
// };

/**
 * POST 인터페이스
 */
export interface IPost<T = any> {
	id: number;
	title: string;
	date: string;
	folder: Folder;
	tag: string[];
	preview: string;
	post: {
		type: ComponentType;
		value: string;
		keyworldTitle?: string;
		headingWeightProps?: HeadingWeightProps;
		promptTypeProps?: promptType;
		codePreviewProps?: boolean;
		imageloader?: ImageManagerProps;
		headingType?: HeadingType;
		tables?: TableProps<T>;
	}[];
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
	platform: AlgorithmPlatform;
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
	NETWORK = 'network',
	TDD = 'tdd',
	DATABASE = 'database',
	TAILWIND = 'Tailwind',
	CODESNIPPETS = 'CodeSnippets',
	ENGLISH = 'english',
	TECHQA = 'tech-QA',
	READINGNOTES = 'Reading Notes',
	GENERATIVEAI = 'Generative AI',
	HTTP = 'Http',
	NEXTJS = 'next.js',
	TYPESCRIPT = 'typescript',
}

/**
 * @enum Level
 * @description 알고리즘 레벨
 */
export enum Level {
	LvNone = '난이도 표시 없음',
	Lv0 = 'LEVEL0',
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
	GUIDE_MESSAGE = 'GuideMessage',
	CODE = 'code',
	TABLE = 'table',
	STRINGLIST = 'stringlist',
	KEYWORD = 'keyword',
	HEADING = 'Heading',
	IMAGE_LOADER = 'ImageLoader',
	REFERENCES = 'references',
	// NUMLIST = 'numlist',
}

/**
 * @enum AlgorithmPlatform
 * @description 알고리즘 플랫폼
 */
export enum AlgorithmPlatform {
	PROGRAMMERS = '프로그래머스',
	INFLEAN = '인프런',
	BAEKJOON = '백준',
}

/**
 * @enum iconType
 * @description 포스트 meta
 */
export enum IConImageType {
	ICON_CATEGORY = 'category',
	ICON_TYPE = 'tag',
}
