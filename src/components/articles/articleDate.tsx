import { JSX } from 'preact';
import { DateTime } from 'luxon';
import styles from './articleDate.module.scss';
import { AppDateTime } from '../../shared/models/date/app-date-time';

interface Props {
  dateTime: AppDateTime;
}

export const ArticleDate = ({ dateTime }: Props): JSX.Element => {
  return (
    <>
      <div className={styles.articleDate}>
        <span className={`material-icons ${styles.articleDate_icon}`}>
          schedule
        </span>
        <time
          className={styles.articleDate_date}
          dateTime={DateTime.now().toFormat('yyyy-MM-dd')}
        >
          {DateTime.now().toFormat('yyyy年MM月dd日')}
        </time>
      </div>
    </>
  );
};
