import React, {useRef} from 'react';
import style from './style.module.scss'
import {Review} from "../../../store/types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules';
import ArrowLeft from "../../../components/Arrows/ArrowLeft";
import ArrowRight from "../../../components/Arrows/ArrowRight";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'
import useWindowDimensions from "../../../hooks/useWindowDimensions";

type PropsType = {
    reviews: Review[];
}

export default function Reviews({ reviews }: PropsType) {

    const { width } = useWindowDimensions()

    const nextBtn = useRef<HTMLButtonElement>(null)
    const prevBtn = useRef<HTMLButtonElement>(null)

    const mobileView = width <= 767

    const renderReviews = reviews.map((review, index)=>(
        <SwiperSlide className={style.review} key={index}>
            <div className={style.img} style={{backgroundImage: `url(${review.srcImg})`}}>
                {/*{review.srcImg && <LazyImage src={review.srcImg} width={310} height={310}/>}*/}
            </div>
            <div className={style.information}>
                <p className={style.name}>{review.name}</p>
                <p className={style.message}>{review.message}</p>
                <hr/>
                <p className={style.date}>{review.date}</p>
            </div>
        </SwiperSlide>
    ))

    return (
        <div className={style.wrapper}>

            <div className='yac_link' id='review'></div>

            <div className={style.header}>
            {!mobileView && <h3 className={style['block-name']}>LifeTech</h3>}
                <div>
                    {
                        !mobileView && (
                            <div className={style['tools-menu']}>
                                <button ref={prevBtn}><ArrowLeft/></button>
                                <button ref={nextBtn}><ArrowRight/></button>
                            </div>
                        )
                    }

                    <h1>Отзывы</h1>
                </div>

                {
                    mobileView && (
                        <div className={style.mob}>
                            <div className={style['tools-menu']}>
                                <button ref={prevBtn}><ArrowLeft/></button>
                                <button ref={nextBtn}><ArrowRight/></button>
                            </div>
                            <h3 className={style['block-name']}>LifeTech</h3>
                        </div>
                    )
                }
            </div>

            <Swiper
                loop={true}
                navigation={{
                    nextEl: nextBtn.current,
                    prevEl: prevBtn.current
                }}
                modules={[Navigation]}
                slidesPerView={width > 1270 ? 3 : mobileView ? 2 : 3}
                spaceBetween={mobileView ? 30 : 64}
                onBeforeInit={(swiper: any) => {
                    swiper.params.navigation.prevEl = prevBtn.current;
                    swiper.params.navigation.nextEl = nextBtn.current;
                }}
                className={style.slider}
            >
                {renderReviews}
                <div className={style.shadow}></div>
            </Swiper>
            <div className={style['back-shadow']}></div>
        </div>
    );
}