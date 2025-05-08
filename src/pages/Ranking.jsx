import { useState } from "react";
import Rodape from "../components/Rodape";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Perfil from "../components/Perfil";

import style from '../styles/ranking.module.css'
import RankingSlots from "../components/RankingSlots";

function Ranking() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerRanking}>
                    <Sidebar open={open} />
                    <div className={style.conteudoRanking}>
                        <RankingSlots/>
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ranking;