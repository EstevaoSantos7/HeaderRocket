import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre";
import Home from "../pages/Home";
import Termos from '../pages/Termos'
import Lobby from "../pages/Lobby";
import CassinoAoVivo from "../pages/CassinoVivo";
import Central from "../pages/Central";
import Perfil from "../pages/PerfilUser"
import JogosAoVivo from "../pages/JogosVivo"
import Esportes from "../pages/Esporte"
import Slots from "../pages/Slots"
import DetalhesSport from "../pages/DetalhesSport"
import DetalhesSlot from "../pages/DetalhesSlot"
import Ranking from "../pages/Ranking";



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
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/JogosAoVivo" element={<JogosAoVivo/>}/>
                <Route path="/Esportes" element={<Esportes/>}/>
                <Route path="/Slots" element={<Slots/>}/>
                <Route path="/DetalhesSport" element={<DetalhesSport/>}/>
                <Route path="/DetalhesSlot" element={<DetalhesSlot/>}/>
                <Route path="/Ranking" element={<Ranking/>}/>

            </Routes>
        </BrowserRouter >

    )
}