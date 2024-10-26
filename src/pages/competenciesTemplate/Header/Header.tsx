import {useState} from 'react';
import LazyImage from "../../../components/LazyImage/LazyImage";
import style from './style.module.scss'
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import DownArrow from "../../../components/Arrows/DownArrow";
import {Link} from "react-router-dom";
import {Products, Services} from "../../../store/types";
import { DropDownMenu, MobileDropDownMenu} from "../../../components/DropDownMenu/DropDownMenu";

import menu_btn from '../../../assets/imgs/Menu_Alt_01.png'
import logo_mobile from '../../../assets/imgs/lt.png'
import logo from '../../../assets/imgs/logo.png'
import close_icon from '../../../assets/imgs/close-svgrepo-com.png'

type PropsType = {
    services: Services[];
    products: Products[];
}

export default function Header({ services, products }: PropsType) {

    const { width } = useWindowDimensions()

    const mobileView = width <= 820

    const [ burgerMenuOpen, setBurgerMenuOpen ] = useState<boolean>(false)
    const [dropDownMenuOpen, setDropDownMenuOpen] = useState<boolean>(false)

    const mobileScreenView = () => (
        <header>
            <LazyImage src={logo_mobile} width={38} height={38} style={{float: 'left'}}/>

            <div className={style['mobile-menu']}>
                <a href={''} target={'_blank'}>
                    <button className={style['connect-btn']}>Связаться</button>
                </a>
                <button className={style.burger_btn} type={'button'} onClick={()=>setBurgerMenuOpen(true)}>
                    <LazyImage src={menu_btn} width={30} height={30}/>
                </button>
            </div>
        </header>
    )

    const BurgerMenu = () => (
        <div
            className={style['burger-wrapper']}
            style={{marginLeft: burgerMenuOpen ? '0%' : '-100%'}}
        >
            <button className={style['close-btn']} type={'button'} onClick={() => setBurgerMenuOpen(false)}>
                <LazyImage src={close_icon} width={24} height={24}/>
            </button>
            <div className={style.toolbox}>
                <ul>
                    <li>
                        <div
                            className={style.cont}
                            onClick={() => setDropDownMenuOpen(prev => !prev)}
                        >
                            Услуги <DownArrow />
                        </div>
                        {dropDownMenuOpen &&
                            <MobileDropDownMenu
                                services={services}
                                products={products}
                            />
                        }
                    </li>
                    <li>
                        <Link to={'/'}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <a href="#review">
                            О нас
                        </a>
                    </li>
                    <li>
                        <a href="#cases">
                            Контакты
                        </a>
                    </li>
                </ul>
                <a href={'#'} target={'_blank'}>
                </a>
            </div>
        </div>
    )


    return (
        <div className={style.wrapper}>

            <BurgerMenu/>

            <div className={style.content}>
                {
                    mobileView ? mobileScreenView() : (
                        <header>
                            <LazyImage src={logo} width={119} height={24} />
                            <div className={style.toolbox}>
                                <ul>
                                    <li>
                                        <div
                                            className={style.cont}
                                            onClick={() => setDropDownMenuOpen(prev => !prev)}
                                        >
                                            Услуги <DownArrow/>
                                        </div>
                                        {dropDownMenuOpen &&
                                            <DropDownMenu
                                                services={services}
                                                products={products}
                                            />
                                        }
                                    </li>
                                    <li>
                                        <Link to={'/'}>
                                            Главная
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#review">
                                            О нас
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#cases">
                                            Контакты
                                        </a>
                                    </li>
                                </ul>
                                <a href={"#"} target={'_blank'}>
                                    <button className={style['connect-btn']}>Связаться</button>
                                </a>
                            </div>
                        </header>
                    )
                }
             </div>
        </div>
    );
}