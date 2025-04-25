import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre";
import Home from "../pages/Home";
import Termos from '../pages/Termos'
import Lobby from "../pages/Lobby";
import CassinoAoVivo from "../pages/CassinoVivo";
import Central from "../pages/Central";



export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/termos" element={<Termos/>}/>
                <Route path="/Lobby" element={<Lobby/>}/>
                <Route path="/CassinoAoVivo" element={<CassinoAoVivo/>}/>
                <Route path="/central" element={<Central/>}/>

            </Routes>
        </BrowserRouter >

    )
}