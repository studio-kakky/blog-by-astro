import { JSX } from 'preact';
import styles from './articles.module.scss';
import { ArticleCard } from './articleCard';

export const Articles = (): JSX.Element => {
  return (
    <div className={styles.entryList}>
      <a href="/" className={styles.entryItem}>
        <ArticleCard />
      </a>
      <a href="/" className={styles.entryItem}>
        <ArticleCard />
      </a>
      <a href="/" className={styles.entryItem}>
        <ArticleCard />
      </a>
    </div>
  );
};
