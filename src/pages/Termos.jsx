import style from '../styles/termos.module.css'
import TermosCondicao from '../components/TermoseCondicoes'
import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Rodape from '../components/Rodape';

function Termos() {
    const [open, setOpen] = useState(false);

    return (
        <div className={style.containerTudo}>
            <Header open={open} setOpen={setOpen} />
            <div className={style.containerTermos}>
                <Sidebar open={open} />
                <div className={style.conteudoTermos}>
                    <TermosCondicao />
                    <Rodape/>
                </div>
              
            </div>
        </div>
    );
}


export default Termos;