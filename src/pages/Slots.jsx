import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import Slot from '../components/Slot'
import SlotsConst from '../dataAposta/Slots'
import style from '../styles/sobre.module.css'
import Rodape from '../components/Rodape'
import { useParams } from "react-router-dom";



function Slots() {
    const [open, setOpen] = useState(false);
    const { id } = useParams();

    const slot = SlotsConst.find(slot => slot.id === parseInt(id))

    return (
        <div className={style.containerTudo}>
            <Header open={open} setOpen={setOpen} />
            <div className={style.containerSobre}>
                <Sidebar open={open} />
                <div className={style.conteudoSobre}>
                    <Slot slot={slot} />
                    <Rodape />
                </div>

            </div>
        </div>
    );
}


export default Slots;
