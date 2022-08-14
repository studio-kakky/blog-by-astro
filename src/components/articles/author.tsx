import { JSX } from 'preact';
import styles from './author.module.scss';

interface Props {
  name: string;
  thumbNail: string;
}

export const Author = (props: Props): JSX.Element => {
  return (
    <div className={styles.author}>
      <img className={styles.author_img} src={props.thumbNail} />
      <p className={styles.author_name}>studio-kakky</p>
    </div>
  );
};
