import style from './style.module.scss'

export default function AboutCompany() {
    return (
        <div className={style.wrapper}>
            <div className={style['company-information']}>
                <h1>О компании</h1>
                <div className={style.infomation}>
                    <hr/>
                    <p className={style.description}>
                        Мы занимаемся <span>IT-разработкой</span> и развитием продуктов с акцентом на бизнес-рост наших партнеров. В
                        нашей команде нет проектных менеджеров в классическом смысле — <span>все наши специалисты имеют
                        продуктовый опыт и в первую очередь заботятся о стратегическом развитии вашего бизнеса.</span> Мы <span>ценим
                    </span>
                        долгосрочные отношения с партнерами и <span>стремимся расти вместе</span> с ними. Все, что мы делаем, мы
                        делаем с таким же <span>вниманием</span> и <span>качеством</span>, как для себя.
                    </p>
                    <p className={style.date}>20—24</p>
                </div>
            </div>
        </div>
    );
}