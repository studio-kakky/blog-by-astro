import { JSX } from 'preact';

import styles from './article.module.scss';
import { ArticleDate } from './articleDate';
import { Article } from '../../shared/models/article/article';
import { LinkItem } from '../../shared/models/linke-item/link-item';

interface Props {
  article: Article;
  next?: LinkItem;
  previous?: LinkItem;
}

export const ArticleComponent = ({
  article,
  next,
  previous,
}: Props): JSX.Element => {
  return (
    <article className={styles.article}>
      {article.heroImage !== undefined && (
        <div className={styles.hero}>
          <img className={styles.hero_img} src={article.heroImage.url} />
        </div>
      )}

      <main className={styles.main}>
        <header className={styles.header}>
          <h2 className={styles.header_h}>{article.title}</h2>
          <div className={styles.util}>
            <ArticleDate dateTime={article.updatedAt} />
          </div>
        </header>
        <div className={styles.body}>
          <div className="wisywig">{article.body}</div>
        </div>
      </main>
      <footer className={styles.footer}>
        <nav className={styles.footerNavi}>
          {previous && (
            <li className={styles.footerNavi_item}>
              <a className={styles.footerNavi_item_a} href={previous.url}>
                <span
                  className={`material-icons ${styles.footerNavi_item_a_icon}`}
                >
                  arrow_back_ios
                </span>
                <span className={styles.footerNavi_item_a_text}>
                  {previous.label}
                </span>
              </a>
            </li>
          )}
          {next && (
            <li className={styles.footerNavi_item}>
              <a className={styles.footerNavi_item_a} href={next.url}>
                <span className={styles.footerNavi_item_a_text}>
                  {next.url}
                </span>
                <span
                  className={`material-icons ${styles.footerNavi_item_a_icon}`}
                >
                  arrow_forward_ios
                </span>
              </a>
            </li>
          )}
        </nav>
      </footer>
    </article>
  );
};
