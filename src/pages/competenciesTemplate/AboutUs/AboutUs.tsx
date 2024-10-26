import style from './style.module.scss'

type PropsType = {
    aboutServiceDescription: string;
    srcImg: string;
}

export default function AboutUs({srcImg, aboutServiceDescription}: PropsType) {
    return (
        <div className={style.wrapper}>
            <div className={style.information}>
                <h1 className={style.title}>
                    Кто мы
                </h1>
                <p className={style.description}>{aboutServiceDescription}</p>
            </div>

            <div
                className={style['img-container']}
                style={{backgroundImage: `url(${srcImg})`}}
            ></div>
        </div>
    );
}