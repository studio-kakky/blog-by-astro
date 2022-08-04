import { JSX } from "preact"
import styles from './entries.module.scss';
import { EntryCard } from "./entryCard";

export const Entries = ():JSX.Element => {
  return (
    <div className={styles.entryList}>
      <div href='/' className={styles.entryItem}>
        <EntryCard />
      </div>
      <div href='/' className={styles.entryItem}>
        <EntryCard />
      </div>
    </div>
  )
}