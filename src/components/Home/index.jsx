import style from './style.module.css'
import Logo from '../../images/logo rocket 2.png'
import ImgBaner from '../../images/baner.png'
import Hero from '../Hero'
import apostas from '../../dataAposta/users'
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { MdOutlineArrowCircleRight, MdOutlineArrowCircleLeft } from "react-icons/md";
import Champions from '../../images/championsNewBranca.png'
import Libertadores from '../../images/libertadores.png'

import Europa from '../../images/patrocinios/europa.png'
import Gordon from '../../images/patrocinios/gordons.png'
import America from '../../images/patrocinios/copa-america.png'
import Conference from '../../images/patrocinios/conference.png'
import Carrosel4 from '../Carrosel4'

import SpaceMan from '../../images/slots/space.png'
import blackjack from '../../images/slots/blackjack.png'
import bigbass from '../../images/slots/bigbass.png'
import oeste from '../../images/slots/velhoOste.png'
import Aviator from '../../images/slots/aviao.png'
import Zeus from '../../images/slots/zeus.png'
import RipCity from '../../images/slots/ripCity.png'
import Dice from '../../images/slots/dice.png'

const slots = [
    { src: SpaceMan },
    { src: blackjack },
    { src: bigbass },
    { src: oeste },
    { src: Aviator },
    { src: Dice },
    { src: Zeus },
    { src: RipCity },
];

export default function Inicio() {
    return (
        <div className={style.containerInicio}>
            <div className={style.conteudo}>
                <div className={style.banerInicio}>
                    <div className={style.conteudoBaner}>
                        <div className={style.tituloBaner}>
                            <h2>Bem vindo a </h2>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <h3>
                            Cadastre-se agora e veja seus ganhos
                            decolarem como um foguete!
                        </h3>
                        <button className={style.botaoCadastrar}>
                            Cadastrar-se
                        </button>
                    </div>
                    <div className={style.imagensCamp}>
                        <img src={ImgBaner} alt="Troféus" />
                    </div>
                </div>

                <Hero />
                <div className={style.caixasCampeonato}>
                    <div className={style.caixaCampeonato}>
                        <div className={style.conteudoCampeonato}>
                            <h1  className={style.tituloCampeonato}>Libertadores</h1>
                            <p className={style.descCampeonato}>"Na Libertadores, a bola queimar e a aposta ferve
                                aqui, quem arrisca vibra como campeão."</p>
                            <button className={style.botaoApostar}>
                                Apostar
                            </button>
                        </div>
                        <div className={style.imagemCampeonato}>
                            <img className={style.imgCampeonato} src={Libertadores} alt="" />
                        </div>
                    </div>
                    <div className={style.caixaCampeonato}>
                        <div className={style.conteudoCampeonato}>
                            <h1 className={style.tituloCampeonato}>Champions League</h1>
                            <p className={style.descCampeonato}>"Na Champions, cada lance vale um título
                                — e cada aposta pode virar uma lenda."</p>
                            <button className={style.botaoApostar}>
                                Apostar
                            </button>
                        </div>
                        <div className={style.imagemCampeonato}>
                            <img className={style.imgCampeonato} src={Champions} alt="" />
                        </div>
                    </div>
                </div>
                <div className={style.containerApostas}> {/* Aposta times */}
                    <div className={style.tituloBar}>
                        <h1 className={style.tituloCampeonato}>Principais Apostas</h1>
                        <div className={style.verMaisBotao}>
                            <button>
                                Ver Mais
                                <IoIosArrowDown color="#197EFF" size={40} />

                            </button>
                        </div>
                    </div>

                    <div className={style.caixa}>
                        {apostas.slice(0, 6).map(aposta => (
                            <div className={style.timesAposta} key={aposta.id}>
                               
                                <a href='/DetalhesSport' className={style.caixaFut}>
                                    <div className={style.time}>
                                        <div className={style.timeAposta}>
                                            <img src={aposta.imagemTimeCasa} alt="" />
                                            <p>{aposta.timeCasa}</p>
                                        </div>
                                        <div className={style.meio}>
                                            <p className={style.genero}>{aposta.generoJogo}</p>
                                            <p className={style.xis}>X</p>
                                            <p className={style.horario}>{aposta.horarioJogo}</p>
                                        </div>
                                        <div className={style.timeAposta}>
                                            <img src={aposta.imagemTimeFora} alt="" />
                                            <p>{aposta.timeFora}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className={style.odds}>
                                        <div className={style.vitoria}>
                                            <span>{aposta.resultadoCasa}</span>
                                        </div>
                                        <div className={style.empate}>
                                            <span>{aposta.resultadoEmpate}</span>
                                        </div>
                                        <div className={style.derrota}>
                                            <span>{aposta.resultadoFora}</span>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        ))}
                    </div>
                </div>

                <Carrosel4 videos={slots} />
                <div className={style.containerPatrocinadores}>
                    <div className={style.tituloCima}>
                        <h1>Patrocinadores</h1>
                    </div>
                    <div className={style.gridPatrocionios}>
                        <div className={style.caixasPatrocinio}>
                            <div className={style.caixaPatrocinio}>
                                <img src={Europa} alt="" />
                            </div>
                            <div className={style.caixaPatrocinio}>
                                <img src={Conference} alt="" />
                            </div>
                            <div className={style.caixaPatrocinio}>
                                <img src={America} alt="" />
                            </div>
                            <div className={style.caixaPatrocinio}>
                                <img src={Gordon} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
