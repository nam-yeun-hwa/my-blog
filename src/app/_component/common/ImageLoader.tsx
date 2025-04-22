import Image, { ImageLoaderProps } from 'next/image';
import style from './imageLoader.module.css';

// type ImageLoaderProps = {

// }

export default function ImageLoader() {
	const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
		const baseUrl =
			process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'http://localhost:3000';
		return `${baseUrl}/image/${src}?w=${width}&q=${quality || 75}`;
	};
	return (
		<Image
			loader={myLoader}
			className={style.img}
			src={'profile1.jpg'}
			alt="프로필 사진"
			width={112}
			height={112}
		/>
	);
}
