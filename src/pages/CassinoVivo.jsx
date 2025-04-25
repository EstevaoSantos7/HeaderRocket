import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/cassinoVivo.module.css'
import Rodape from "../components/Rodape";
import CassinoVivo from "../components/CassinoVivo";



function CassinoAoVivo() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerLobby}>
                    <Sidebar open={open} />
                    <div className={style.conteudoLobby}>
                        <CassinoVivo/>
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CassinoAoVivo;
