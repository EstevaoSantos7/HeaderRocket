import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/central.module.css'
import Rodape from "../components/Rodape";
import CentralComp from "../components/CentralDeAjuda";



function CentralAjuda() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerCentral}>
                    <Sidebar open={open} />
                    <div className={style.conteudoCentral}>
                        <CentralComp />
                        <Rodape />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CentralAjuda;
