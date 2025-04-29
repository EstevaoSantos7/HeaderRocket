import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import Slot from '../components/Slot'
import style from '../styles/sobre.module.css'
import Rodape from '../components/Rodape'



function Slots() {
    const [open, setOpen] = useState(false);

    return (
        <div className={style.containerTudo}>
            <Header open={open} setOpen={setOpen} />
            <div className={style.containerSobre}>
                <Sidebar open={open} />
                <div className={style.conteudoSobre}>
                    <Slot />
                    <Rodape/>
                </div>
              
            </div>
        </div>
    );
}


export default Slots;
