import { JSX } from 'preact';
import { DateTime } from 'luxon';
import styles from './articleDate.module.scss';

export const ArticleDate = (): JSX.Element => {
  return (
    <>
      <div className={styles.entryDate}>
        <span className={`material-icons ${styles.entryDate_icon}`}>
          schedule
        </span>
        <time
          className={styles.entryDate_date}
          dateTime={DateTime.now().toFormat('yyyy-MM-dd')}
        >
          {DateTime.now().toFormat('yyyy年MM月dd日')}
        </time>
      </div>
    </>
  );
};
