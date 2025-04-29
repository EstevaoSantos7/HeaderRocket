import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/jogoVivo.module.css'
import Rodape from "../components/Rodape";
import JogoVivo from "../components/JogoVivo";



function JogosVivo() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerJogoVivo}>
                    <Sidebar open={open} />
                    <div className={style.conteudoJogoVivo}>
                        <JogoVivo/>
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JogosVivo;
