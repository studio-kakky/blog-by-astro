import { JSX } from 'preact';

import styles from './article.module.scss';
import { ArticleDate } from './articleDate';

export const Entry = (): JSX.Element => {
  return (
    <article className={styles.Entry}>
      <div className={styles.hero}>
        <img className={styles.hero_img} src="https://picsum.photos/480/300" />
      </div>
      <header className={styles.header}>
        <h2 className={styles.header_h}>記事のタイトル</h2>
        <div className={styles.util}>
          <ArticleDate />
        </div>
      </header>
      <main className={styles.body}>
        <div className="wisywig">
          <p>
            グラフィックと活版印刷のオペレーターはこれをよく知っています。実際、コミュニケーションの世界を扱うすべての専門家はこれらの単語と安定した関係を持っていますが、それは何ですか？
            Lorem ipsum はダミーテキストで意味がありません。
          </p>
        </div>
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
