import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/detalhesSport.module.css'
import Rodape from "../components/Rodape";

import DetalheSport from "../components/DetalheSport";



function DetalhesSport() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerDetalhes}>
                    <Sidebar open={open} />
                    <div className={style.conteudoDetalhes}>
                        <DetalheSport/>
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalhesSport;
