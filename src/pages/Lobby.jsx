import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/Lobby.module.css'
import Rodape from "../components/Rodape";
import LobbyCassino from "../components/LobbyCassino";



function Lobby() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerLobby}>
                    <Sidebar open={open} />
                    <div className={style.conteudoLobby}>
                        <LobbyCassino/>
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lobby;
