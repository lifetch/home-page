import style from './style.module.scss'

import texture from  '../../../assets/imgs/texture.png'
import LazyImage from "../../../components/LazyImage/LazyImage";

import shadow from '../../../assets/imgs/shadow.png'
import figure from '../../../assets/imgs/abstract26g.png'

type PropsType = {
    title: string
    description: string
}

export default function HeroBlock({ title, description } : PropsType) {

    return (
        <div className={style.wrapper}>
            <LazyImage src={figure} className={style.figure}/>
            <LazyImage src={shadow} className={style.shadow}/>
            <LazyImage src={texture} className={style.texture}/>
            <div className={style.content}>
                <div>
                    <h1>{title}</h1>
                    <p className={style.description} dangerouslySetInnerHTML={{__html: description}}></p>
                    <button>Оставить заявку</button>
                </div>
            </div>
        </div>
    );
}