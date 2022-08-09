import { JSX  } from "preact"
import { Author } from "./author";
import styles from './entryCard.module.scss'
import { EntryDate } from "./entryDate";

export const EntryCard = (): JSX.Element => {
  return (
    <div className={styles.entry}>
      <header className={styles.header}>
        <h2 className={styles.header_h}>記事のタイトル</h2>
      </header>
      <div className={styles.thumbNail}>
        <img className={styles.thumbNail_img} src="https://picsum.photos/480/300" />
      </div>
      <div class={styles.util}>
        <EntryDate />
      </div>
      <div class={styles.body}>
        <p>グラフィックと活版印刷のオペレーターはこれをよく知っています。実際、コミュニケーションの世界を扱うすべての専門家はこれらの単語と安定した関係を持っていますが、それは何ですか？ Lorem ipsum はダミーテキストで意味がありません。</p>
      </div>
    </div>
  )
};
