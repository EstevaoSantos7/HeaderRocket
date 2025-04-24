import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre";
import Home from "../pages/Home";
import Termos from '../pages/Termos'
import TermoseCondicoes from "../components/TermoseCondicoes";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/Termos" element={<TermoseCondicoes/>}/>

            </Routes>
        </BrowserRouter >

    )
}