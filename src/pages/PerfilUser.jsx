import { useState } from "react";
import Rodape from "../components/Rodape";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Perfil from "../components/Perfil";

import style from '../styles/perfiluser.module.css'

function PerfilUser() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerPerfil}>
                    <Sidebar open={open} />
                    <div className={style.conteudoPerfil}>
                        <Perfil/>
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PerfilUser;