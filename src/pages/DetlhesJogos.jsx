import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/detalhesSlot.module.css'
import Rodape from "../components/Rodape";
import DetalheComponente from '../components/DetalheJogos'
import { useParams } from "react-router-dom";
import JogosConst from "../dataAposta/JogosVivo";



function DetalhesJogos() {
const {id} = useParams();


const jogos = JogosConst.find(jogos => jogos.id === parseInt(id))


    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerDetalhes}>
                    <Sidebar open={open} />
                    <div className={style.conteudoDetalhes}>
                         <DetalheComponente jogos={jogos}  /> 
                    
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalhesJogos;
