import Header from "./Header/Header";
import Footer from "../main/Footer/Footer";
import {store} from "../../store/store";
import Form from "../main/Form/Form";
import HeroBlock from "./HeroBlock/HeroBlock";
import {Competence} from "../../store/types";
import AboutUs from "./AboutUs/AboutUs";
import WorkExperience from "./WorkExperience/WorkExperience";
import Chips from "./Chips/Chips";
import DevelopStages from "./DevelopStages/DevelopStages";
import {useEffect} from "react";

export default function CompetenciesTemplate({ competence }: { competence: Competence }) {

        useEffect(()=>{
                window.scrollTo(0,0)
        }, [])

    return (
        <>
            <Header
                services={store.services}
                products={store.products}
            />
            <HeroBlock
                title={competence.title}
                description={competence.description}
            />
            <AboutUs
                srcImg={competence.aboutUsImgUrl}
                aboutServiceDescription={competence.aboutServiceDescription}
            />
            <WorkExperience experience={competence.experience} />
            <Chips advantages={competence.advantages} />
            <DevelopStages stages={competence.stages} />
            <Form
                privacyPolicyLink={store.init.privacyPolicyLink}
                personalDataLink={store.init.personalDataLink}
            />
            <Footer
                footerBlocks={store.footer}
                contactNumber={store.init.footerContactNumber}
                contactEmail={store.init.footerContactEmail}
                submitApplicationLink={store.init.footerSubmitApplicationLink}
            />
        </>
    );
}