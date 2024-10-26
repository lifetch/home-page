import style from './style.module.scss'
import {Advantage} from "../../../store/types";
import figure_1 from '../../../assets/imgs/abstract23g.png'
import figure_2 from '../../../assets/imgs/abstract23g_2.png'
import LazyImage from "../../../components/LazyImage/LazyImage";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

type PropsType = {
    advanages: Advantage[]
}

export default function Advantages({ advanages } : PropsType) {

    const {width} = useWindowDimensions()

    const renderAdvanages = advanages.map((advantage, index)=>(
        <div className={style.advantage} key={index}>
            <hr/>
            <div className={style.content}>
                <div>
                    <p className={style['advantage-index']}>{(index + 1) / 10 > 1 ? (index + 1) : ('0' + (index + 1))}</p>
                    <p className={style['advantage-title']}>{advantage.title}</p>
                </div>
                {width > 767 &&
                    <p className={style['advantage-message']}>{advantage.message}</p>
                }
            </div>
        </div>
    ))

    return (
        <div className={style.wrapper}>
            <div className='yac_link' id='advantages'></div>
            <LazyImage src={figure_1} className={style.figure_1} width={358} height={364}/>
            <LazyImage src={figure_2} className={style.figure_2} width={141} height={145}/>
            <div className={style.title}>
                <h1>ПОЧЕМУ <span>СТОИТ</span></h1>
                <h1>ВЫБИРАТЬ</h1>
                <h1>НАС ?</h1>
            </div>

            <div className={style['advanages-container']}>
                {renderAdvanages}
            </div>
        </div>
    );
}