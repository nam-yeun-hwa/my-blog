import Image, { ImageLoaderProps } from 'next/image';
import style from './imageLoader.module.css';

export type ImageManagerProps = {
	imgPath?: string;
	width?: number;
	height?: number;
	alt?: string;
};

export default function ImageManager({
	imgPath = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'http://localhost:3000',
	width = 100,
	height = 100,
	alt = '이미지입니다.',
}: ImageManagerProps) {
	const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
		const baseUrl =
			process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'http://localhost:3000';
		return `${baseUrl}/image/${src}?w=${width}&q=${quality || 75}`;
	};
	return (
		<Image
			loader={myLoader}
			className={style.img}
			src={imgPath}
			alt={alt}
			width={width}
			height={height}
		/>
	);
}
