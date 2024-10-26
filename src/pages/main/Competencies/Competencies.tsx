import style from './style.module.scss'
import figure from '../../../assets/imgs/abstract10g.png'
import figure_logo from '../../../assets/imgs/figure_logo.png'
import LazyImage from "../../../components/LazyImage/LazyImage";

import figure_1 from '../../../assets/imgs/Group 12.png'
import figure_2 from '../../../assets/imgs/Group 13.png'
import figure_3 from '../../../assets/imgs/Group 14.png'
import figure_4 from '../../../assets/imgs/Group 15.png'
import uiuxfig from '../../../assets/imgs/uiux.svg'
import aifig from '../../../assets/imgs/ai.svg'
import qafig from '../../../assets/imgs/QA.svg'
import cons from '../../../assets/imgs/prod.svg'
import iotfig from '../../../assets/imgs/loT.svg'


import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {Link} from "react-router-dom";

export default function Competencies() {

    const {width} = useWindowDimensions()

    return (
        <div className={style.wrapper}>
            <div className={style.yac_link} id='competencies'></div>
            <LazyImage src={figure} width={259} height={279} className={style.figure}/>

            {width > 1250 ?
                <div className={style.title}>

                    <h1>Сферы</h1>
                    <div>
                        <LazyImage src={figure_logo} width={117} height={78}/>
                        <h1>Компетенций</h1>
                    </div>
                </div>
                : <div className={`${style.mobile_menu} ${style.title}`}>
                    <h1>Сферы</h1>
                    <div>
                        <h1 className={style.title_1}>Компе
                            <LazyImage src={figure_logo} width={117} height={78}/>
                        </h1>
                        <h1>—ТЕНЦИЙ</h1>
                    </div>
                </div>

            }


            <div className={style.information}>
                <p className={style.description}>
                    Мы разрабатываем веб-сервисы и все,
                    что с ними связано: сайты, приложения, внутренние
                    системы, чат-боты и mini-apps
                </p>
                <p className={style.description}>
                    Готовы реализовать проекты любой сложности с
                    помощью следующего технологического стэка
                </p>
            </div>

            <div className={style.content}>
                <div className={style.row_1}>
                    <div className={style.blocks}>
                        <Link to={'/competence/frontend'} className={style.block}>
                            <div>
                                <LazyImage
                                    src={figure_1}
                                    width={567}
                                    height={334}
                                    className={style.figure_1}
                                />
                                <p className={style['block-title']}>Вэб-разработка</p>
                            </div>
                        </Link>

                        <Link to={'/competence/uiux'} className={style.block}>
                            <LazyImage
                                src={uiuxfig}
                                width={375}
                                height={417}
                                className={style.figure_2}
                            />
                            <p className={style['block-title']}>UI-UX</p>
                        </Link>
                        <Link to={'/competence/ai'} className={style.block}>
                            <LazyImage
                                src={aifig}
                                width={375}
                                height={417}
                                className={style.figure_2}
                            />
                            <p className={style['block-title']}>AI Разработка</p>
                        </Link>
                        <Link to={'/competence/iot'} className={style.block}>
                            <LazyImage
                                src={iotfig}
                                width={375}
                                height={417}
                                className={style.figure_2}
                            />
                            <p className={style['block-title']}>IoT</p>
                        </Link>
                    </div>
                </div>
                <div className={style.row_2}>
                    <div className={style.blocks}>
                        <Link to={'/competence/mobile'} className={style.block}>
                            <div>
                                <LazyImage
                                    src={figure_2}
                                    width={319}
                                    height={419}
                                    className={style.figure_3}
                                />
                                <p className={style['block-title']}>Приложения</p>
                            </div>
                        </Link>
                        <Link to={'/competence/bots'} className={style.block}>
                            <div>
                                <LazyImage
                                    src={figure_4}
                                    width={586}
                                    height={309}
                                    className={style.figure_4}
                                />
                                <p className={style['block-title']}>Чат-боты</p>
                            </div>
                        </Link>
                        <Link to={'/competence/qa'} className={style.block}>
                            <LazyImage
                                src={qafig}
                                width={375}
                                height={417}
                                className={style.figure_2}
                            />
                            <p className={style['block-title']}>QA</p>
                        </Link>
                        <Link to={'/competence/consulting'} className={style.block}>
                            <LazyImage
                                src={cons}
                                width={375}
                                height={417}
                                className={style.figure_2}
                            />
                            <p className={style['block-title']}>Продуктовый консалтинг</p>
                        </Link>
                    </div>
                </div>

                <Link to={'/competence/miniapps'} className={style.end_block}>
                    <div className={style.end_block_center}>
                        <div className={style['dec-main']}>
                            <div className={style['dec-block']}></div>
                            <div className={style['dec-block']}></div>
                            <div className={style['dec-block']}></div>
                            <div className={style['dec-block']}></div>
                            <div className={style['dec-block']}></div>
                            <div className={style['dec-block']}></div>
                        </div>
                        <p className={style.title}>Mini-apps</p>
                        {width > 767 &&
                            <p className={style.subtitle}>
                                Lorem ipsum dolor sit amet consectetur. In vestibulum
                                egestas proin a nibh adipiscing pulvinar adipiscing dolor. Arcu in
                                mauris eu nunc.
                            </p>
                        }

                    </div>
                </Link>
            </div>
        </div>
    );
}