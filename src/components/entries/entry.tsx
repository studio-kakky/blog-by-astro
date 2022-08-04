import { JSX  } from "preact"
import styles from './entry.module.scss'

export const Entry = (): JSX.Element => {
  return (
    <article className={styles.entry}>
      <header className={styles.header}>
        <div className={styles.thumbNail}>
          <img className={styles.thumbNail_img} src="https://via.placeholder.com/480x300" />
        </div>
        <h2 className={styles.header_h}>記事のタイトル</h2>
      </header>
      <div className={styles.author}>
        <img className={styles.author_img} src="https://via.placeholder.com/480x300" />
        <p className={styles.author_name}>studio-kakky</p>
      </div>
      <div className={styles.body}>
        <div className="wisywig"
          dangerouslySetInnerHTML={{__html: `
          <p>私は十月まるでその約束人としてののためをできたます。よく時分で懊悩方はすでにこの意見ないないまでが握ってくれらしをも推察なるましなて、さっそくには上げよたうでしょでし。世の中になさべきのはどうもほかにどうもなけれでた。</p>
          <p>近頃嘉納君が安心国民わざわざ用意を申し上げるた周囲その主義私か使用にというご尊敬なですたないて、この前は私か秋刀魚お客をしば、大森さんのものをがたのそれをとにかく大創設と云って君個人をお矛盾がなるようと無論ごお話しがしでたから、そのうちようやく呈が探しありて来なけれので聴かましう。ところがたとえばご家であり事も多少自由としかるたて、この悪口をも考えですのでていう個性がしよてならました。この頃外国の頃その耳はそれごろに向くますかと岡田君に倒さませない、自己のたくさんないとしてご誘惑たでなが、責任の以上が国家を今ばかりの圏外に将来きのでならと、まだの多年にしとこのためからもっとつかですたとすんのうで、ないたならてこう大最初なるな事ななです。もしくは秋刀魚か平穏か落第をいないて、十月ごろ先生に考えからならですためのご病気の今の違っでう。</p>
        `}}
        >
        </div>
      </div>
    </article>
  )
};