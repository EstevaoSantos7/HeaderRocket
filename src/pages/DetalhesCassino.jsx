import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/detalhesSlot.module.css'
import Rodape from "../components/Rodape";

import DetalheCassino from "../components/DetalheCassino";

import { useParams } from "react-router-dom";
import Slots from "../dataAposta/Slots";
import CassinoVivo from "../dataAposta/cassinoVivo";
import JogosConst from "../dataAposta/JogosVivo";



function DetalhesCassino() {
const {id} = useParams();

const cassino  = CassinoVivo.find(cassino => cassino.id === parseInt(id))



    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerDetalhes}>
                    <Sidebar open={open} />
                    <div className={style.conteudoDetalhes}>
                         <DetalheCassino cassino={cassino}  /> 
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalhesCassino;
