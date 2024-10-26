import React, {ImgHTMLAttributes} from 'react';
// import style from './style.module.scss'

interface PropsType extends Omit < ImgHTMLAttributes<HTMLImageElement>, "placeholder" | "onLoad" >{
    src: string,
    alt?: string
}

export default function LazyImage( { src, alt, width, height, style, className, id } : PropsType) {
    return (
        // <div className={style['blur-load']}>
            <img
                src={src}
                loading={'lazy'}
                alt={alt ?? ''}
                width={width}
                height={height}
                style={style}
                className={className}
                id={id}
            />
        // </div>
    );
}