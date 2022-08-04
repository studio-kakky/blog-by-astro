import { JSX } from "preact"
import styles from './entries.module.scss';
import { Entry } from "./entry";

export const Entries = ():JSX.Element => {
  return (
    <div className={styles.entryList}>
      <Entry />
    </div>
  )
}