import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/detalhesSlot.module.css'
import Rodape from "../components/Rodape";

import DetalheSport from "../components/DetalheSport";
import DetalheSlot from "../components/DetalheSlots";
import { useParams } from "react-router-dom";
import Slots from "../dataAposta/Slots";
import CassinoVivo from "../dataAposta/cassinoVivo";
import JogosConst from "../dataAposta/JogosVivo";



function DetalhesSlot() {
const {id} = useParams();

const slot  = Slots.find(slot => slot.id === parseInt(id))
const jogos = JogosConst.find(jogos => jogos.id === parseInt(id))


    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerDetalhes}>
                    <Sidebar open={open} />
                    <div className={style.conteudoDetalhes}>
                         <DetalheSlot slot={slot}  jogos={jogos}  /> 
                         {/*cassino={cassino} jogoVivo={jogoVivo}*/}
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalhesSlot;
