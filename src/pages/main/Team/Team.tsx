import style from './style.module.scss'
import LazyImage from "../../../components/LazyImage/LazyImage";
import human from '../../../assets/imgs/human.png'
import figure from '../../../assets/imgs/abstract31g.png'
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import alex from '../../../assets/imgs/team/Alex.jpg'
import sergei from '../../../assets/imgs/team/Sergei.jpg'
import hidden from "../../../assets/imgs/hidden.png";

export default function Team() {

    const {width} = useWindowDimensions()

    return (
        <div className={style.wrapper}>
            <h1>Команда</h1>

            <div className={style['content-container']}>
                <div className={style.participant}>
                    <div
                        className={style['part-img']}
                        style={{backgroundImage: `url(${alex})`}}
                    ></div>
                    {/*<LazyImage src={alex} className={style['part-img']}/>*/}
                    <p className={style.name}>Александр Фролов</p>
                    <p className={style.position}>Founder, CEO</p>
                    {/*<p className={style.experience}>{'>'}6 лет опыта</p>*/}
                </div>
                <div className={`${style.participant} ${style.part_under}`}>
                    <LazyImage
                        src={figure}
                        width={386}
                        height={394}
                        className={style.part_2}
                    />
                    <div className={style.wrap}>
                        <LazyImage src={sergei} className={style['part-img']}/>
                        <p className={style.name}>Сергей Мазин</p>
                        <p className={style.position}>COO</p>
                        {/*<p className={style.experience}>{'>'}6 лет опыта</p>*/}
                    </div>
                </div>
                <div className={style.participant}>
                    <LazyImage src={human} className={style['part-img']}/>
                    <p className={style.name}>Данил Р.</p>
                    <p className={style.position}>Lead команды Flutter</p>
                    <p className={style.experience}>Опыт работы в разработке приложений для Яндекса на 50+млн
                        пользователей.</p>
                </div>
                <div className={style['person-quantity']}>
                    <p>15+</p>
                    <span>человек</span>
                </div>
                <div className={style.participant}>
                    <LazyImage src={human} className={style['part-img']}/>
                    <p className={style.name}>Алексей А.</p>
                    <p className={style.position}>Lead команды Swift</p>
                    <p className={style.experience}>Опыт работы с более 15 проектами в международной студии разработки
                        Epam.
                    </p>
                </div>
                <div className={style.participant}>
                    <LazyImage src={human} className={style['part-img']}/>
                    <p className={style.name}>Василий Я.</p>
                    <p className={style.position}>Lead команды Back-end (Python, PHP, Go)</p>
                    <p className={style.experience}>Опыт работы в финтехе и X5 retail group 5+ лет.</p>
                </div>
                <div className={style.participant}>
                    <LazyImage src={human} className={style['part-img']}/>
                    <p className={style.name}>Дина Г.</p>
                    <p className={style.position}>Lead команды Front-end (Angular, View, JS)</p>
                    <p className={style.experience}>Опыт работы 4+ года в финтех компаниях на российском и зарубежном
                        рынке.</p>
                </div>
                <div className={style.participant}>
                    <LazyImage src={human} className={style['part-img']}/>
                    <p className={style.name}>Никита В.</p>
                    <p className={style.position}>Руководитель отдела Data аналитики.</p>
                    <p className={style.experience}>Ex-Сбер, мастер по анализу данных практически любых объемов и
                        сложности.
                    </p>
                </div>
                <div className={style.participant}>
                    <LazyImage src={human} className={style['part-img']}/>
                    <p className={style.name}>Артем Б.</p>
                    <p className={style.position}>Senior ML Developer (Python)</p>
                </div>
                {/*{*/}
                {/*    width > 1348 &&*/}
                {/*    <p className={style.description}>Готовы реализовать проекты любой сложности с помощью следующего*/}
                {/*        технологического стэка</p>*/}
                {/*}*/}
            </div>

            {/*{ width <= 1348 &&*/}
            {/*<p className={style.description}>Готовы реализовать проекты любой сложности с помощью следующего*/}
            {/*    технологического стэка</p>*/}
            {/*}*/}
        </div>
    );
}