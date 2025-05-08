import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/cassinoVivo.module.css'
import Rodape from "../components/Rodape";
import CassinoVivo from "../components/CassinoVivo";
import cassinoVivo from '../dataAposta/cassinoVivo'
import { useParams } from "react-router-dom";



function CassinoAoVivo() {
    const [open, setOpen] = useState(false);
    const { id } = useParams();

    const cassino = cassinoVivo.find(cassino => cassino.id === parseInt(id))

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerCassinoVivo}>
                    <Sidebar open={open} />
                    <div className={style.conteudoCassinoVivo}>
                        <CassinoVivo cassino={cassino}/>
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CassinoAoVivo;
