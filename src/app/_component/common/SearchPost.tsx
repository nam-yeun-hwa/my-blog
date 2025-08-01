"use client"
import Link from 'next/link';
import { IAlgorithmPost, IConImageType, IPost } from 'type/post';
import PostMeta from './atomic/PostMeta';
import style from './searchPost.module.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import { useRouter } from 'next/navigation';
import { rdxResetSearchPost } from 'store/searchFilterlist'

type Props = {
  post: IPost;
};

export default function SearchPost({ post }: Props) {

  const dispatch = useDispatch();

  return (
    <article className={style.searchBox}>
      <header>
        <h2 className={style.hidden}>
          <Link className={style.title} onClick={()=>{dispatch(rdxResetSearchPost())}} href={`/posts/${post.id}`}>
            {post.title}
          </Link>
          <PostMeta iconType={IConImageType.ICON_CATEGORY} />
        </h2>
        <p className={style.preview}>{post.preview}</p>
      </header>
    </article>
  );
}
