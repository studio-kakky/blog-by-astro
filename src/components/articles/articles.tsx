import { JSX } from 'preact';
import styles from './articles.module.scss';
import { ArticleCard } from './articleCard';

export const Articles = (): JSX.Element => {
  return (
    <div className={styles.articleList}>
      <a href="/" className={styles.articleItem}>
        <ArticleCard />
      </a>
      <a href="/" className={styles.articleItem}>
        <ArticleCard />
      </a>
      <a href="/" className={styles.articleItem}>
        <ArticleCard />
      </a>
    </div>
  );
};
