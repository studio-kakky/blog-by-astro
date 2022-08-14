import { JSX } from 'preact';
import styles from './articleCard.module.scss';
import { ArticleDate } from './articleDate';

export const ArticleCard = (): JSX.Element => {
  return (
    <div className={styles.article}>
      <header className={styles.header}>
        <h2 className={styles.header_h}>記事のタイトル</h2>
      </header>
      <div className={styles.thumbNail}>
        <img
          className={styles.thumbNail_img}
          src="https://picsum.photos/480/300"
        />
      </div>
      <div className={styles.util}>
        <ArticleDate />
      </div>
      <div className={styles.body}>
        <p>
          グラフィックと活版印刷のオペレーターはこれをよく知っています。実際、コミュニケーションの世界を扱うすべての専門家はこれらの単語と安定した関係を持っていますが、それは何ですか？
          Lorem ipsum はダミーテキストで意味がありません。
        </p>
      </div>
    </div>
  );
};
