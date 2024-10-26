import {useRef, useState} from 'react';
import {Case, InfoBlockType} from "../../../store/types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, EffectFade, Autoplay} from 'swiper/modules';
import figure from '../../../assets/imgs/abstract21g.png'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'

import style from './style.module.scss'
import 'swiper/css';
import ArrowLeft from "../../../components/Arrows/ArrowLeft";
import ArrowRight from "../../../components/Arrows/ArrowRight";
import LinkArrow from "../../../components/Arrows/LinkArrow";
import LazyImage from "../../../components/LazyImage/LazyImage";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import hidden from "../../../assets/imgs/hidden.png"

type PropsType = {
    cases: Case[];
}

export default function Cases({ cases }: PropsType) {

    const {width}= useWindowDimensions()

    const mobileView = width <= 767

    const nextBtn = useRef<HTMLButtonElement>(null)
    const prevBtn = useRef<HTMLButtonElement>(null)

    const [activeItemIndex, setActiveItemIndex] = useState(0)

    const renderInfoBlock = (items: InfoBlockType[]) => {
        return items.map((item, index)=>(
            <SwiperSlide className={style.wrapped} key={index}>
                <div className={style.img} style={{backgroundImage: `url(${item.img||hidden})`}}>
                </div>
                <div className={style['info']}>
                    <div className={style.text}>
                        <p className={style.title}>{item.title}</p>
                        <p className={style.description}>{item.description}</p>
                        <div className={style['low-block']}>
                            <div>
                            </div>
                            <p className={style.year}>{item.year}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))
    }

    const renderCases = cases.map((item, index)=> {
        const titleWords = item.title.split(' ')
        const firstTitleWord = titleWords[0]
        const otherTitleWords = titleWords.filter((value, index) => index !== 0).map((value, index) => value)

        return (
            <SwiperSlide className={style.slide} key={index}>
                <h1 className={style.firstWord}>
                    {firstTitleWord}
                    <div className={style.tags}>
                        {item.tools?.map((tool, index)=>(
                            <div className={style.tag} key={index}>
                                <p>{tool}</p>
                            </div>
                        ))}
                    </div>
                </h1>
                <h1>{otherTitleWords}</h1>
            </SwiperSlide>
        )
    })

    const prevSlide = () => {
        if(activeItemIndex !== 0)
            setActiveItemIndex(prev=>prev-1)
    }

    const nextSlide = () => {
        if (activeItemIndex !== cases.length)
            setActiveItemIndex(prev => prev + 1)
    }

    return (
        <div className={style.wrapper} >

            <div className='yac_link' id='cases'></div>

            <p className={style.top_title}>Кейсы</p>
            <div className="cases-slides">
                <LazyImage src={figure} className={style.figure} width={492} height={492}/>

                <div className={style['top-swiper']}>
                    <Swiper
                        navigation={{
                            nextEl: nextBtn.current,
                            prevEl: prevBtn.current
                        }}
                        modules={[Navigation]}
                        onBeforeInit={(swiper: any) => {
                            swiper.params.navigation.prevEl = prevBtn.current;
                            swiper.params.navigation.nextEl = nextBtn.current;
                        }}
                        onResize={(swiper: any) => {
                            swiper.params.navigation.prevEl = prevBtn.current;
                            swiper.params.navigation.nextEl = nextBtn.current;
                        }}
                    >
                        {renderCases}
                    </Swiper>

                    <div className={style['right-column']}>
                        {
                            !mobileView && (
                                <div className={style['tools-menu']}>
                                    <button ref={prevBtn} onClick={prevSlide}><ArrowLeft/></button>
                                    <button ref={nextBtn} onClick={nextSlide}><ArrowRight/></button>
                                </div>
                            )
                        }
                        {
                            !mobileView && (
                                <a href={cases[activeItemIndex].aboutProjectLink} target='_blank'>
                                    <button type='button' className={style['about-project-btn']}>
                                        О проекте <LinkArrow/>
                                    </button>
                                </a>
                            )
                        }
                    </div>
                </div>
                {
                    mobileView && (
                        <a href={cases[activeItemIndex].aboutProjectLink} target='_blank'>
                            <button type='button' className={style['about-project-btn']}>
                                О проекте <LinkArrow/>
                            </button>
                        </a>
                    )
                }


                <div className={style['low-swiper']}>
                    <hr/>
                    <div className={style.content}>
                        <Swiper
                            loop={true}
                            effect={mobileView ? 'none' : 'fade'}
                            modules={[Pagination, Autoplay, EffectFade]}

                            autoplay={{
                                delay: 3000
                            }}
                            className={style['info-block']}
                            pagination={{
                                "clickable": true,
                                el: '.pagination-active',
                            }}
                            fadeEffect={{crossFade: true}}
                            onBeforeInit={(swiper: any) => {
                                swiper.params.pagination.el = '.pagination-active';
                            }}
                        >
                            {renderInfoBlock(cases[activeItemIndex].infoBlocks)}
                        </Swiper>
                    </div>
                    <div className='pagination-active'></div>

                    {
                        mobileView && (
                            <div className={style['tools-menu']}>
                                <button ref={prevBtn} onClick={prevSlide}><ArrowLeft/></button>
                                <button ref={nextBtn} onClick={nextSlide}><ArrowRight/></button>
                            </div>
                        )
                    }
                    <hr/>
                </div>
            </div>
        </div>
    );
}

