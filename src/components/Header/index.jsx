import { useState } from 'react';
import style from './style.module.css'
import { FiAlignJustify } from "react-icons/fi";
import LogoRocket from '../../images/logo rocket 2.png'
import LogoFoguete from '../../images/Rocket.png'
import {FaAlignJustify } from 'react-icons/fa'




export default function Header({ setOpen, open }) {
    return (
        <header className={style.headerCima}>
            <div className={style.containerHeader}>
                <nav className={style.header}>
                   <div className={style.start}>
                   <FaAlignJustify size={30} style={{ color: "white" }}
                        onClick={() => {
                            if (open) {
                                setOpen(false);//abre o sidebar
                            } else {
                                setOpen(true);//abre o menu 
                            }
                        }} />
                    <div className={style.logoBet}>
                        <a href="/">
                            <img src={LogoFoguete} alt=""  className={style.logoFoguete}/>
                            <img src={LogoRocket} alt=""  className={style.logoRocket}/>
                        </a>

                    </div>
                   </div>
                    <div className={style.cadastros}>
                        <div className={style.entrar}>
                            <h1>Entrar</h1>
                        </div>
                        <div className={style.cadastrar}>
                            <h1>Registrar-se</h1>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )

}
