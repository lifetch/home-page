import style from './style.module.scss';
import LazyImage from "../../../components/LazyImage/LazyImage";
import figure from '../../../assets/imgs/abstract1g.png'

type PropsType = {
    advantages: string;
}

export default function Chips({advantages}:PropsType) {

    const currentYear = new Date().getFullYear();

    return (
        <div className={style.wrapper}>
            <div className={style['chips-container']}>
                <div className={style.chip}>
                    <p className={`${style['chip-title']} ${style.first}`}>Телеграмм-бот</p>
                    <div className={`${style.figure} ${style.f_first}`}></div>
                </div>

                <div className={style.chip}>
                    <p className={`${style['chip-title']} ${style.secound}`}>Фишка #1</p>
                    <div className={style['figures-container']}>
                        <div className={style.ball}></div>
                        <div className={style.ball}></div>
                        <div className={style.ball}></div>
                        <div className={style.ball}></div>
                    </div>
                </div>

                <div className={style.chip}>
                    <p className={`${style['chip-title']} ${style.third}`}>Фишка #2</p>
                    <div className={`${style.figure} ${style.f_secound}`}></div>
                </div>
            </div>
            <div className={style['low-description']}>
                <div>
                    <p className={style.description}>{advantages}</p>
                    <p className={style.year}>
                        <span>(</span>
                        <p>{currentYear}</p>
                        <span>)</span>
                    </p>
                </div>
                <LazyImage src={figure} className={style.l_figure} />
            </div>
        </div>
    );
}