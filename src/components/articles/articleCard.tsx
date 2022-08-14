import { JSX } from 'preact';
import { ArticleSummary } from '../../shared/models/article/article-summary';
import styles from './articleCard.module.scss';
import { ArticleDate } from './articleDate';

interface Props {
  item: ArticleSummary;
}

export const ArticleCard = ({ item }: Props): JSX.Element => {
  return (
    <div className={styles.article}>
      <header className={styles.header}>
        <h2 className={styles.header_h}>{item.title}</h2>
      </header>
      <div className={styles.thumbNail}>
        <img className={styles.thumbNail_img} src={item.heroImage.url} />
      </div>
      <div className={styles.util}>
        <ArticleDate dateTime={item.updatedAt} />
      </div>
      {item.summary && (
        <div className={styles.body}>
          <div className="wisywig">{item.summary}</div>
        </div>
      )}
    </div>
  );
};
