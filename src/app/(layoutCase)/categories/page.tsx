import PageHeading from 'app/_component/common/PageHeading';
import style from './page.module.css';
import Link from 'next/link';

export default function categories() {
  return (
    <article>
      <PageHeading pageTitle="Categories" />
      <div className={style.content}>
        <div className={style.card_categories}>
          <div className={style.card_header}>
            <span className={style.card_text}>
              <i
                className={`far fa-folder-open fa-fw ${style.ico_category}`}
              ></i>
              <Link className={style.categories_tit} href={``}>
                Blogging
              </Link>
              <span className={style.text_muted}> 2 categories , 4 posts </span>
            </span>
            <button className={style.category_trigger}>
              <i className={`fas fa-fw fa-angle-down ${style.ico_trigger}`}></i>
            </button>
          </div>
          {/* <div className="collapse">
            <ul className="ul_list_group">
              <li className="list-group-item">
                <i className="far fa-folder fa-fw"></i>
                <Link href={``}></Link>
                <span className="text_muted"> 1 post </span>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </article>
  );
}
