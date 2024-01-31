import PageHeading from 'app/_component/common/PageHeading';
import style from './page.module.css';
import Link from 'next/link';

export default function tags() {
  return (
    <article>
      <PageHeading pageTitle="Tags" />
      <div className="content">
        <div className={style.tag_container}>
          <div className="tag_item">
            <Link className={style.tag_item_link} href="">
              favicon
              <span className={style.text_muted}>1</span>
            </Link>
          </div>
          <div className="tag_item">
            <Link className={style.tag_item_link} href="">
              favicon
              <span className={style.text_muted}>1</span>
            </Link>
          </div>
          <div className="tag_item">
            <Link className={style.tag_item_link} href="">
              favicon
              <span className={style.text_muted}>1</span>
            </Link>
          </div>
          <div className="tag_item">
            <Link className={style.tag_item_link} href="">
              favicon
              <span className={style.text_muted}>1</span>
            </Link>
          </div>
          <div className="tag_item">
            <Link className={style.tag_item_link} href="">
              favicon
              <span className={style.text_muted}>1</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
