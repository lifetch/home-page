import style from './style.module.scss';
import figure_1 from '../../../assets/imgs/Group_19.png'
import figure_2 from '../../../assets/imgs/abstract19g.png'
import LazyImage from "../../../components/LazyImage/LazyImage";
import {Stage} from "../../../store/types";

type PropsType = {
    stages: Stage[]
}

export default function DevelopStages({ stages }: PropsType) {

    const renderStages = stages.map((stage, index) =>(
        <div className={style.stage}>
            <p className={style.index}>{(index + 1) / 10 >= 1 ? index + 1 : '0' + (index + 1)}</p>
            <p className={style['s-title']}>{stage.title}</p>
            <p className={style['s-description']}>{stage.description}</p>
        </div>
    ))

    return (
        <div className={style.wrapper}>
            <h1 className={style.tag}>Как мы работаем</h1>
            <div className={style['title-container']}>
                <h1 className={style.title}>Этапы разработки</h1>
                <LazyImage src={figure_1} className={style.figure_1} />
            </div>


            <div className={style.stages}>
                <LazyImage src={figure_2} className={style.figure_2}/>
                <div className={style['content-container']}>
                    {renderStages}
                </div>
            </div>
        </div>
    );
}