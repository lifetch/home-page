import style from './style.module.scss'
import shadow from '../../../assets/imgs/Vector 6_2.png'
import LazyImage from "../../../components/LazyImage/LazyImage";

type PropsType = {
    experience: string;
}

export default function WorkExperience({experience}:PropsType) {

    const wordsInColoredLine = 35

    const repeatedWords:any[] = Array.from(Array(wordsInColoredLine).keys()).map(() => {
        return (<p>AI</p>)
    })

    return (
        <div className={style.wrapper}>
            <div className={style['colored-line']}>
                {repeatedWords}
            </div>
            <LazyImage src={shadow} className={style.shadow}/>

            <div className={style.content}>
                <h1 className={style.title}>Опыт работы</h1>
                <p
                    className={style.description}
                    dangerouslySetInnerHTML={{__html: experience}}
                >
                </p>
            </div>
        </div>
    );
}