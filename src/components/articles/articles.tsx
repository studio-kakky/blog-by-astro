import { JSX } from 'preact';
import styles from './articles.module.scss';
import { ArticleCard } from './articleCard';
import { ArticleSummary } from '../../shared/models/article/article-summary';

interface Props {
  items: ArticleSummary[];
}

export const Articles = ({ items }: Props): JSX.Element => {
  return (
    <div className={styles.articleList}>
      {items.map((item) => (
        <a href="/" className={styles.articleItem} key={item.id}>
          <ArticleCard item={item} />
        </a>
      ))}
    </div>
  );
};
