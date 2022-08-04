import { JSX } from 'preact';
import styles from './author.module.scss';

interface Props {
  name: string;
  thumbNail: string
}

export const Author = (props: Props): JSX.Element => {
  return (
    <div className={styles.author}>
        <img className={styles.author_img} src="https://via.placeholder.com/480x300" />
        <p className={styles.author_name}>studio-kakky</p>
      </div>
  )
}