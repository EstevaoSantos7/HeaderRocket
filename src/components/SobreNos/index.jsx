import style from './style.module.css';

import Js from '../../images/js.png'
import Css from '../../images/css.png'
import Figma from '../../images/figma.png'
import Html from '../../images/html.png'
import React from '../../images/react.png'
import Integrante from '../Integrante';

import Estevao from '../../images/estevao.png'
import Gael from '../../images/gael.png'
import Maria from '../../images/laura.png'
import Kaua from '../../images/kaua.png'

export default function SobreNos() {
    return (
        <>
            <div className={style.conteinerSobre}>
                <div className={style.conteudo}>
                    <div className={style.sobretexto}>
                        <h1 className={style.titulo}>Sobre Nós</h1>
                        <p className={style.sobreDesc}>No projeto de conclusão de curso no SENAI, a equipe criou um site de apostas online chamado "Rocket Bet", com o objetivo de aplicar
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
                    <h1 className={style.titulo}>Integrantes</h1>
                    <Integrante nomeFirst="Estevão Santos -" funcaoFirst="Scrum Master" descriptionFirst="Apaixonado por agilidade, inovação e trabalho em equipe, Estevão Santos atua como 
    Scrum Master na Rocket Bet, uma plataforma referência no universo das apostas online. Com uma sólida trajetória em times de tecnologia e 
    produtos digitais, Estevão é conhecido por sua habilidade em facilitar processos ágeis, remover impedimentos e promover a cultura de
     melhoria contínua dentro das squads." imagemFirst={Estevao}
                        nomeTwo="Kauã Andrade -" funcaoTwo="Desenvolvedor" descriptionTwo="Kauã Andrade é desenvolvedor na Rocket Bet, uma
                         das plataformas mais inovadoras no cenário de apostas online. Com um olhar atento aos detalhes e uma paixão por
                          código limpo e eficiente, Kauã atua diretamente no desenvolvimento de soluções robustas, seguras e com alta 
                          performance para garantir a melhor experiência ao usuário."
                        imagemTwo={Kaua}
                    />


                    <Integrante nomeFirst="Maria L. Souza -" funcaoFirst="Designer" descriptionFirst="Maria Laura Souza é designer na Rocket Bet, onde 
                    transforma ideias em experiências visuais intuitivas, acessíveis e impactantes para milhares de usuários no universo das apostas 
                    online. Com um olhar aguçado para usabilidade e estética, ela atua na criação de interfaces que equilibram funcionalidade e 
                    identidade da marca." imagemFirst={Maria}
                        nomeTwo="Gael Giz -" funcaoTwo="Desenvolvedor" descriptionTwo="Gael Giz é desenvolvedor na Rocket Bet, atuando com excelência no desenvolvimento de
                         soluções digitais voltadas para o setor de apostas online. Com domínio em tecnologias front-end e back-end, ele integra um time 
                         dinâmico e colaborativo, sempre focado em performance, segurança e inovação."
                        imagemTwo={Gael}
                    />

                </div>
            </div>

        </>

    )
}