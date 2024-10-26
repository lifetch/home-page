import {useState} from 'react';
import logo from '../../../assets/imgs/logo.png'
import logo_mobile from '../../../assets/imgs/lt.png'
import menu_btn from '../../../assets/imgs/Menu_Alt_01.png'
import LazyImage from "../../../components/LazyImage/LazyImage";
import style from './style.module.scss'
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import shadow_mobile from '../../../assets/imgs/Vector 6.png'
import close_icon from '../../../assets/imgs/close-svgrepo-com.png'
import shadow from '../../../assets/imgs/shadow.png'
import abstract5g_mobile from '../../../assets/imgs/abstract5g_mobile.png'
import abstract5g from '../../../assets/imgs/abstract5g.png'


type PropsType = {
    contactLink: string
}

export default function Header({ contactLink }: PropsType) {

    const { width } = useWindowDimensions()

    const [ burgerMenuOpen, setBurgerMenuOpen ] = useState<boolean>(false)

    const mobileScreen = () => {
        return (
            <header>
                <LazyImage src={logo_mobile} width={38} height={38} style={{float: 'left'}}/>

                <div className={style['mobile-menu']}>
                    <a href={contactLink} target={'_blank'}>
                        <button className={style['connect-btn']}>Связаться</button>
                    </a>
                    <button className={style.burger_btn} type={'button'} onClick={()=>setBurgerMenuOpen(true)}>
                        <LazyImage src={menu_btn} width={30} height={30}/>
                    </button>
                </div>


            </header>
        )
    }

    return (
        <div className={style.wrapper}>

            <div
                className={style['burger-wrapper']}
                style={{marginLeft: burgerMenuOpen ? '0%' : '-100%'}}
            >
                <button className={style['close-btn']} type={'button'} onClick={() => setBurgerMenuOpen(false)}>
                    <LazyImage src={close_icon} width={24} height={24}/>
                </button>
                <div className={style.toolbox}>
                    <ul>
                        <li className={style.active}>
                            <a href="#advantages" onClick={()=>setBurgerMenuOpen(false)}>
                                Преимущества
                            </a>
                        </li>
                        <li>
                            <a href="#competencies" onClick={() => setBurgerMenuOpen(false)}>
                                Компетенции
                            </a>
                        </li>
                        <li>
                            <a href="#review" onClick={() => setBurgerMenuOpen(false)}>
                                Отзывы
                            </a>
                        </li>
                        <li>
                            <a href="#cases" onClick={() => setBurgerMenuOpen(false)}>
                                Кейсы
                            </a>
                        </li>
                    </ul>
                    <a href={contactLink} target={'_blank'}>
                    </a>
                </div>
            </div>


            <div className={style.content}>
                {
                    width <= 900 ? mobileScreen() : (
                        <header>
                            <LazyImage src={logo} width={119} height={24} style={{float: 'left'}}/>
                            <div className={style.toolbox}>

                                <ul>
                                    <li className={style.active}>
                                        <a href="#advantages">
                                            Преимущества
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#competencies">
                                            Компетенции
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#review">
                                            Отзывы
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#cases">
                                            Кейсы
                                        </a>
                                    </li>
                                </ul>
                                <a href={contactLink} target={'_blank'}>
                                    <button className={style['connect-btn']}>Связаться</button>
                                </a>
                            </div>
                        </header>
                    )
                }


                {
                    width > 767 ?
                        <LazyImage
                            src={shadow}
                            width={913}
                            height={630}
                            className={style.shadow}
                        /> :
                        <LazyImage
                            src={shadow_mobile}
                            className={style.shadow}
                            width={'100%'}
                            height={634}
                            style={{top: 0, right: 0, zIndex: -1}}
                        />
                }


                <h1 className={style.title}>Веб-разработка</h1>

                {width > 767 &&
                    <h2 className={style.subtitle}>Делаем из <span>hello, world</span><br/>полезные сайты и приложения
                    </h2>}

                <div className={style.statistic}>
                    <div>
                        <p className={style.number}>{'>'}20</p>
                        <p className={style.about_data}>Проектов</p>
                    </div>
                    <div>
                        <p className={style.number}>{'>'}3 лет</p>
                        <p className={style.about_data}>На рынке</p>
                    </div>
                    <div>
                        <p className={style.number}>15</p>
                        <p className={style.about_data}>Партнеров</p>
                    </div>
                </div>


            </div>


            {
                width > 550 ?
                    <LazyImage
                        src={abstract5g}
                        className={style['figure-img']}
                        width={484}
                        height={356}
                    /> :

                    <LazyImage
                        src={abstract5g_mobile}
                        className={style['figure-img']}
                        width={141}
                        height={204}
                    />
            }

        </div>

    );
}