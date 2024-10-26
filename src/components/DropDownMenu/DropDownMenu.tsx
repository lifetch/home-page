import style from "./style.module.scss";
import {Link} from "react-router-dom";
import {Products, Services} from "../../store/types";

type PropsType = {
    services: Services[];
    products: Products[];
}

export function DropDownMenu({services, products}:PropsType) {
    return (
        <div className={style['drop-down-menu']}>
            <div className={style['services-block']}>
                {services.map(service => (
                    <Link to={''} className={`${style.service} ${style.link}`}>
                        {service.title}
                    </Link>
                ))}
            </div>
            <div className={style['products-block']}>
                {products.map(product => (
                    <Link to={''} className={`${style.product} ${style.link}`}>
                        {product.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}


export function MobileDropDownMenu({services, products}: PropsType) {
    return (
        <div className={style['drop-down-menu-mob']}>
            <div className={style['services-block-mob']}>
                {services.map(service => (
                    <Link to={''} className={`${style.service_mob} ${style.link_mob}`}>
                        {service.title}
                    </Link>
                ))}
            </div>
            <div className={style['products-block-mob']}>
                {products.map(product => (
                    <Link to={''} className={`${style.product_mob} ${style.link_mob}`}>
                        {product.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

