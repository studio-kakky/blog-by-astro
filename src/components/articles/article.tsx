import { JSX } from 'preact';

import styles from './article.module.scss';
import { ArticleDate } from './articleDate';
import { Article } from '../../shared/models/article/article';

interface Props {
  article: Article;
}

export const ArticleComponent = ({ article }: Props): JSX.Element => {
  return (
    <article className={styles.article}>
      {article.heroImage !== undefined && (
        <div className={styles.hero}>
          <img className={styles.hero_img} src={article.heroImage.url} />
        </div>
      )}
      <header className={styles.header}>
        <h2 className={styles.header_h}>{article.title}</h2>
        <div className={styles.util}>
          <ArticleDate dateTime={article.updatedAt} />
        </div>
      </header>
      <main className={styles.body}>
        <div className="wisywig">{article.body}</div>
      </main>
      <footer className={styles.footer}>
        <nav className={styles.footerNavi}>
          <li className={styles.footerNavi_item}>
            <a className={styles.footerNavi_item_a} href="/">
              <span
                className={`material-icons ${styles.footerNavi_item_a_icon}`}
              >
                arrow_back_ios
              </span>
              <span className={styles.footerNavi_item_a_text}>
                前の記事の長い名前前の記事の長い名前
              </span>
            </a>
          </li>
          <li className={styles.footerNavi_item}>
            <a className={styles.footerNavi_item_a} href="/">
              <span className={styles.footerNavi_item_a_text}>
                次の記事のなまえ
              </span>
              <span
                className={`material-icons ${styles.footerNavi_item_a_icon}`}
              >
                arrow_forward_ios
              </span>
            </a>
          </li>
        </nav>
      </footer>
    </article>
  );
};
