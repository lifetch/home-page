import style from "./style.module.scss";
import LazyImage from "../../../components/LazyImage/LazyImage";
import human from "../../../assets/imgs/human.png";
import figure from "../../../assets/imgs/abstract31g.png";

import alex from "../../../assets/imgs/team/Alex.jpg";
import sergei from "../../../assets/imgs/team/Sergei.jpg";

export default function Team() {
  return (
    <div className={style.wrapper}>
      <h1>КОМАНДА</h1>
      <p className={style.subtitle}>
        У нас работают ведущие эксперты по созданию IT продуктов
      </p>

      <div className={style["content-container"]}>
        <div className={style.participant}>
          <div
            className={style["part-img"]}
            style={{ backgroundImage: `url(${alex})` }}
          ></div>
          <p className={style.name}>Александр Фролов</p>
          <p className={style.position}>Founder, CEO</p>
        </div>
        <div className={`${style.participant} ${style.part_under}`}>
          <LazyImage
            src={figure}
            width={386}
            height={394}
            className={style.part_2}
          />
          <div className={style.wrap}>
            <LazyImage src={sergei} className={style["part-img"]} />
            <p className={style.name}>Сергей Мазин</p>
            <p className={style.position}>CCO</p>
          </div>
        </div>
        <div className={style.participant}>
          <LazyImage src={human} className={style["part-img"]} />
          <p className={style.name}>Артём Борсуков</p>
          <p className={style.position}>Lead Project Manager</p>
        </div>
        <div className={style["person-quantity"]}>
          <p>15+</p>
          <span>человек</span>
        </div>
      </div>
    </div>
  );
}
