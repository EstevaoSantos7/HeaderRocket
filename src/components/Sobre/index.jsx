import style from './style.module.css';

import Js from '../../images/js.png'
import Css from '../../images/css.png'
import Figma from '../../images/figma.png'
import Html from '../../images/html.png'
import React from '../../images/react.png'

export default function Sobre() {
    return (
        <>
            <div className={style.conteinerSobre}>
                <div className={style.conteudo}>
                    <div className={style.sobretexto}>
                        <h1>Sobre Nós</h1>
                        <p>No projeto de conclusão de curso no SENAI, a equipe criou um site de apostas online chamado "Rocket Bet", com o objetivo de aplicar
                            os conhecimentos adquiridos no curso de desenvolvimento web. O site foi desenvolvido para ser simples e intuitivo, permitindo apostas
                            em jogos como esportes e eventos ao vivo. Utilizamos HTML, CSS JavaScript, React e Figma no desenvolvimento do projeto, passando pelas
                            etapas de pesquisa de mercado, design, programação e testes, com cada membro assumindo responsabilidades específicas. O maior desafio
                            foi garantir a segurança e eficiência no sistema de apostas, realizando testes constantes e ajustes. Importante: o projeto não envolve
                            apostas reais.</p>
                    </div>
                    <div className={style.imageStrack}>
                        <img src={Figma} alt="" />
                        <img src={Js} alt="" />
                        <img src={Css} alt="" />
                        <img src={Html} alt="" />
                        <img src={React} alt="" />
                    </div>
                </div>
<div className={style.integrantes}>
    <div className={style.integranteLeft}>
<img src="" alt="" />
<h1></h1>
<p></p>
    </div>
</div>

            </div>

        </>

    )
}