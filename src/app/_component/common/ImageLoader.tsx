'use client';

import Image, { ImageLoaderProps } from 'next/image';
import style from './imageLoader.module.css';

export type ImageManagerProps = {
	imgPath?: string;
	width?: string;
	alt?: string;
	round?: string;
};

export default function ImageManager({
	imgPath = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'http://localhost:3000',
	alt = '이미지입니다.',
	width = '100%',
	round = '0%',
}: ImageManagerProps) {
	const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
		const finalWidth = width || 1920;
		const baseUrl =
			process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'http://localhost:3000';
		return `${baseUrl}/image/${src}?w=${width}&q=${quality || 75}`;
	};
	return (
		<div className={style.imgloaderContainer}>
			<Image
				style={{ borderRadius: `${round}`, width, height: 'auto' }}
				loader={myLoader}
				className={style.img}
				src={imgPath}
				alt={alt}
				width={100}
				height={100}
				fill={undefined}
				objectFit={undefined}
			/>
		</div>
	);
}
