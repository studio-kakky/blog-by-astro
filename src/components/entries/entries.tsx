import { JSX } from "preact"
import styles from './entries.module.scss';
import { EntryCard } from "./entryCard";

export const Entries = ():JSX.Element => {
  return (
    <div className={styles.entryList}>
      <a href='/' className={styles.entryItem}>
        <EntryCard />
      </a>
      <a href='/' className={styles.entryItem}>
        <EntryCard />
      </a>
      <a href='/' className={styles.entryItem}>
        <EntryCard />
      </a>
    </div>
  )
}
