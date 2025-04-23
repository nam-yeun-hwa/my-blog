'use client';
import Link from 'next/link';
import style from './sidemenu.module.css';

import cx from 'classnames';
import ImageLoader from 'app/_component/common/ImageLoader';
import { useSelectedLayoutSegment } from 'next/navigation';

type Props = {
	onToggle: boolean;
	moveToggle: () => void;
};

export default function SideMenu({ onToggle, moveToggle }: Props) {
	const segment = useSelectedLayoutSegment();
	return (
		<aside
			id="sidebar"
			className={cx(style.sidebar, onToggle && style.sidebar_move)}
		>
			<header className={style.profile_wrapper}>
				<div className={style.profile}>
					<Link href={'/posts'}>
						<ImageLoader
							imgPath="profile1.jpg"
							alt="프로필이미지"
							round="50%"
						/>
					</Link>
				</div>
				<h1 className={style.blog_name_txt}>my blog</h1>
				<p className={style.site_subtitle}>
					You can only earn as much as an ant does by working like an ant.
				</p>
			</header>
			<nav>
				<ul className={style.nav}>
					<li
						className={cx(
							style.nav_item,
							(segment === 'posts' || segment === null) && style.active,
						)}
						onClick={moveToggle}
					>
						<Link href={'/posts'} className={style.nav_link}>
							<i className={`fa-fw fas fa-home ${style.ico}`}></i>
							<span className={style.nav_txt}>HOME</span>
						</Link>
					</li>
					<li
						className={cx(
							style.nav_item,
							segment === 'categories' && style.active,
						)}
						onClick={moveToggle}
					>
						<Link className={style.nav_link} href={'/categories'}>
							<i className={`fa-fw fas fa-stream ${style.ico}`}></i>
							<span className={style.nav_txt}>CATEGORIES</span>
						</Link>
					</li>
					<li
						className={cx(style.nav_item, segment === 'tags' && style.active)}
						onClick={moveToggle}
					>
						<Link className={style.nav_link} href={'/tags'}>
							<i className={`fa-fw fas fa-tags ${style.ico}`}></i>
							<span className={style.nav_txt}>TAGS</span>
						</Link>
					</li>
					<li
						className={cx(
							style.nav_item,
							segment === 'archives' && style.active,
						)}
						onClick={moveToggle}
					>
						<Link className={style.nav_link} href={'/archives'}>
							<i className={`fa-fw fas fa-archive ${style.ico}`}></i>
							<span className={style.nav_txt}>ARCHIVES</span>
						</Link>
					</li>
					<li
						className={cx(
							style.nav_item,
							segment === 'algorithm' && style.active,
						)}
						onClick={moveToggle}
					>
						<Link className={style.nav_link} href={'/algorithm'}>
							<i className={`fa-solid fa-mug-saucer ${style.ico}`}></i>
							<span className={style.nav_txt}>CODING</span>
						</Link>
					</li>
				</ul>
			</nav>
			<div className="sidebar-bottom"></div>
		</aside>
	);
}
