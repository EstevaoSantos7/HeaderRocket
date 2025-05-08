import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/esporte.module.css'
import Rodape from "../components/Rodape";
import Esportes from "../components/Esportes";
import apostas from "../dataAposta/users";
import { useParams } from "react-router-dom";



function Esporte() {
    const [open, setOpen] = useState(false);
    const {id} = useParams();

    const aposta  = apostas.find(aposta => aposta.id === parseInt(id))

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerEsporte}>
                    <Sidebar open={open} />
                    <div className={style.conteudoEsporte}>
                        <Esportes  aposta={aposta}/>
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Esporte;
