import React from 'react';
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Partner} from "../../../store/types";
import style from './style.module.scss'
import LazyImage from "../../../components/LazyImage/LazyImage";
import './global.scss'

import 'swiper/css';
import useWindowDimensions from "../../../hooks/useWindowDimensions";

type PropsType = {
    partners: Partner[];
}

export default function Partners({ partners }: PropsType) {

    const {width} = useWindowDimensions()


    const slides = [...partners, ...partners].map((partner, index)=> (
        <SwiperSlide className={style.slide} key={index}>
            <LazyImage
                src={partner.src}
                style={{width: partner.width, height: partner.height}}
            />
        </SwiperSlide>
    ))

    const slidesMobile = [...partners, ...partners].map((partner, index) => (
        <div className={style.slide} key={index}>
            <LazyImage
                src={partner.src}
                style={{width: partner.width, height: partner.height}}
            />
        </div>
    ))

    return (
        <div className="partner-slides">
            {
                width <= 767 ? (
                    <div>
                        <div className={style.infinity}>
                            <div className={style.inf_content}>
                                {slidesMobile}
                                {slidesMobile}
                                {slidesMobile}
                                {slidesMobile}
                                {slidesMobile}
                                {slidesMobile}
                            </div>
                        </div>

                        <div className={style.infinity} id={style.ml}>
                            <div className={style.inf_content}>
                                {slidesMobile}
                                {slidesMobile}
                                {slidesMobile}
                                {slidesMobile}
                                {slidesMobile}
                                {slidesMobile}
                            </div>
                        </div>
                    </div>
                ) :
                (
                    <Swiper
                        slidesPerView={width < 1101 ? 4 : 6}
                        modules={[Autoplay]}
                        loop={true}
                        className={style['slides-container']}
                        centeredSlides={width > 767}
                        autoplay={{
                            delay: 3000,
                        }}
                    >
                        {slides}
                    </Swiper>
                )
            }

        </div>
    );
}