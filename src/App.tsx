import './App.css';
import MainBlock from "./pages/main/main";
import {Route, Routes} from "react-router-dom";
import CompetenciesTemplate from "./pages/competenciesTemplate/competenciesTemplate";
import {store} from "./store/store";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="" element={<MainBlock />} />
                {store.competencies.map((competence)=>(
                    <Route path={`/competence/${competence.pathLink}`} element={<CompetenciesTemplate competence={competence}/>}/>
                ))}
            </Routes>
        </div>
    );
}
