export type Partner = {
    src: string;
    width?: string;
    height: string;
}

export type Advantage = {
    title: string;
    message: string;
}

export type Review = {
    srcImg?: string;
    name: string;
    message: string;
    date: string;
}

export type TechnologiesType = {
    name: string;
    description: string;
    tools?: string[];
}

export type InfoBlockType = {
    img: string;
    title: string;
    description: string;
    year: number;
}

export type Case = {
    title: string;
    tools?: string[];
    infoBlocks: InfoBlockType[];
    aboutProjectLink: string;
}

export type FooterLinks = {
    title: string;
    link: string;
}

export type FooterBlock = {
    title: string;
    links: FooterLinks[];
}

export type Services = {
    title: string;
}

export type Products = {
    title: string;
}

export type Stage = {
    title: string;
    description: string;
}

export type Competence = {
    title: string;
    /**
     * Слова которые должны выделиться цветом в тексте,
     * следует занести в тег <span></span>
     *
     * Пример:
     * ```html
     * После основного текста идет <span>цветной текст</span>
     * ```
     */
    description: string;
    aboutServiceDescription: string;
    aboutUsImgUrl: string;
    /**
     * Слова которые должны подкрашиваться белым цветом в тексте,
     * следует занести в тег <span></span>
     *
     * Пример:
     * ```html
     * После основного текста идет <span>белый текст</span>
     * ```
     */
    experience: string;
    advantages: string;
    stages: Stage[];
    pathLink: string;
}

export type Init = {
    contactLink: string;
    privacyPolicyLink: string;
    personalDataLink: string;
    footerContactNumber: string;
    footerContactEmail: string;
    footerSubmitApplicationLink: string;
}

export type StoreType = {
    init: Init;

    partners: Partner[];
    advantages: Advantage[];
    technologies: TechnologiesType[];
    cases: Case[];
    reviews: Review[];
    footer: FooterBlock[];

    competencies: Competence[];

    services: Services[];
    products: Products[];
}