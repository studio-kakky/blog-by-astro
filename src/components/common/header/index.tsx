import { JSX } from "preact"
import styles from './index.module.scss'

export const CommonHeader = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_h}>
        <span className={styles.header_h_logo}>
          <span className={styles.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 14" enable-background="new 0 0 134 14"><path d="M14.625 14.16h-4.14l-1.692-3.132-3.023 3.132h-5.202l7.38-7.668h-7.363l.396-2.232h14.329l-3.87 4.015 3.185 5.885zM33.831 4.26l-4.392 9.9h-4.806l1.35-3.06h-2.124l.396-2.232h2.718l1.062-2.376h-4.302l-2.178 4.05h-4.805l2.79-6.282h14.291zM41.139 9.93h-5.868l.396-2.231h5.868l-.396 2.231zm.612-3.438h-5.868l.378-2.232h5.886l-.396 2.232zm4.536-2.232h4.824l-6.156 9.9h-4.806l6.138-9.9zm1.602-1.493h-2.268l.379-2.179h2.268l-.379 2.179zm1.602-2.179h2.268l-.396 2.179h-2.25l.378-2.179zM69.759 5.088l-.396 2.232h-2.124l-1.206 6.84h-4.806l1.206-6.84h-1.386l-3.042 6.84h-4.806l3.042-6.84h-2.25l.378-2.232h8.46l.288-1.638h4.806l-.288 1.638h2.124zM86.984 5.088l-1.602 9.072h-4.806l1.206-6.84h-2.34l-3.042 6.84h-4.805l3.042-6.84h-3.438l.396-2.232h4.032l.721-1.638h4.805l-.719 1.638h6.55zM89.307 6.24h3.023l-.881 5.021h-3.024l.882-5.021zm6.318 5.022h-3.025l.9-5.021h3.006l-.881 5.021zm3.906-5.022h3.852l-4.914 7.92h-3.834l4.896-7.92zM116.793 5.088h4.518l-.396 2.232h-5.111l-.792 1.782h5.598l-.396 2.231h-6.192l-1.26 2.826h-4.806l1.26-2.826h-4.393l.396-2.231h4.986l.791-1.782h-5.472l.396-2.232h6.066l.738-1.638h4.807l-.738 1.638zM123.146 7.68h10.134l-.396 2.232h-10.134l.396-2.232z"></path></svg>
          </span>
        </span>
        <span className={styles.header_h_text}>Diary</span>
      </h1>
      <div className={styles.description}>
        <p className={styles.description_p}>フリーランスエンジニア スタジオカッキーの雑記</p>
        <p className={styles.description_p}>エンジニアリングとか食とか釣りとか</p>
        <a className={styles.description_a} href="https://studio-kaky.com">https://studio-kaky.com</a>
      </div>
    </header>
  )
}