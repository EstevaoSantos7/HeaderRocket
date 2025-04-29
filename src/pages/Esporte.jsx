import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/esporte.module.css'
import Rodape from "../components/Rodape";
import Esportes from "../components/Esportes";



function Esporte() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerEsporte}>
                    <Sidebar open={open} />
                    <div className={style.conteudoEsporte}>
                        <Esportes/>
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Esporte;
