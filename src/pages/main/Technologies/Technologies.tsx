import style from './style.module.scss'
import {TechnologiesType} from "../../../store/types";
import LazyImage from "../../../components/LazyImage/LazyImage";
import figure from '../../../assets/imgs/abstract14g.png'
import useWindowDimensions from "../../../hooks/useWindowDimensions";

type PropsType = {
    technologies: TechnologiesType[]
}

export default function Technologies({ technologies }: PropsType) {

    const { width } = useWindowDimensions()

    const renderTechs = technologies.map((tech, index)=>(
        <div className={style['tech-block']} key={index}>
            <hr/>
            <div className={style.content}>
                <p className={style.number}>{`{${index + 1}}`}</p>
                <p className={style.name}>{tech.name}</p>
                <div className={style.column}>
                    { width > 980 && <p className={style.description}>{tech.description}</p>}
                    <div className={style.tools}>
                        {tech.tools?.map((tool, index)=>(
                            <p className={style.tool} key={index}>{tool}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div className={style.wrapper}>
            <p className={style.title}>Стек технологии</p>
            <div className={style['tech-container']}>
                {renderTechs}
                <hr/>
            </div>
            <LazyImage src={figure} width={220} height={212} className={style.figure}/>
        </div>
    );
}