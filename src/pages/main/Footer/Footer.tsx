import {FooterBlock} from "../../../store/types";
import style from './style.module.scss';
import LazyImage from "../../../components/LazyImage/LazyImage";
import text from '../../../assets/imgs/LifeTech.png'
import logo from '../../../assets/imgs/default_logo.png'
import useWindowDimensions from "../../../hooks/useWindowDimensions";

type PropsType = {
    footerBlocks: FooterBlock[];
    contactNumber:  string;
    contactEmail: string;
    submitApplicationLink: string;
}

export default function Footer(
    { 
        footerBlocks,
        contactNumber,
        contactEmail,
        submitApplicationLink
    }: PropsType) {

    const {width} = useWindowDimensions()

    const mobileView = width <= 767

    const columnsPerPage = width > 1130 ? 3 : mobileView ? 1 : 2

    const formatLink = (link: string) => {
        // eslint-disable-next-line no-restricted-globals
        return link.replace('link.local+', '')
    }

    const renderBlocks = footerBlocks.map((block, index)=>(
        <div className={style.column} key={index}>
            <p className={style.title}>{block.title}</p>
            <div className={style.links}>
                {block.links.map((link, index)=>(
                    <a href={formatLink(link.link)} className={style.link} key={index}>
                        {link.title}
                    </a>
                ))}
            </div>
        </div>
    ))

    const ContactBtn = () => (
        <a
            target={'_blank'}
            href={submitApplicationLink}
            className={style.submit}
        >
            Оставить заявку
        </a>
    )

    return (
        <div className={style.wrapper}>
            <div className={style.content}>

                <div className={style['static-content']}>
                    <div className={style['logo-container']}>
                        <LazyImage src={logo} className={style.logo}/>
                        { mobileView && <ContactBtn /> }
                    </div>
                    <div className={style.col_2}>
                        <div className={style.columns} style={{
                            gridTemplateColumns: `repeat( ${columnsPerPage} ,1fr)`
                        }}>
                            {renderBlocks}
                        </div>
                        <div className={style['contact-info']}>
                            <p className={style['phone-number']}>{contactNumber}</p>
                            <p className={style['email']}>{contactEmail}</p>
                            { !mobileView && <ContactBtn/> }
                        </div>
                    </div>
                </div>

                {
                    !mobileView && (
                        <div className={style['desktop-container']}>
                            <hr/>
                            <LazyImage src={text} className={style['low-text']}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}