import {store} from "../../store/store";
import Header from "./Header/Header";
import Partners from "./Partners/Partners";
import AboutCompany from "./AboutCompany/AboutCompany";
import Team from "./Team/Team";
import Advantages from "./Advantages/Advantages";
import Competencies from "./Competencies/Competencies";
import Technologies from "./Technologies/Technologies";
import Cases from "./Cases/Cases";
import Reviews from "./Reviews/Reviews";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";

export default function MainBlock() {
    return (
        <>
            <Header contactLink={store.init.contactLink}/>
            <Partners partners={store.partners}/>
            <AboutCompany/>
            <Team/>
            <Advantages advanages={store.advantages}/>
            <Competencies/>
            <Technologies technologies={store.technologies}/>
            <Cases cases={store.cases}/>
            {/*<Reviews reviews={store.reviews}/>*/}
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