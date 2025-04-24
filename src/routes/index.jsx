import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre";
import Home from "../pages/Home";
import Termos from '../pages/Termos'


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/termos" element={<Termos/>}/>

            </Routes>
        </BrowserRouter >

    )
}