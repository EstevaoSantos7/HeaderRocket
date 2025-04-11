import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import Inicio from "../components/Home";
import style from '../styles/home.module.css'

function Home() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerHome}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerHome}>
                    <Sidebar open={open} />
                    <div className={style.conteudoHome}>
                        <Inicio />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
