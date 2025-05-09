import { IoIosArrowDown, IoMdBasketball } from 'react-icons/io'
import style from './style.module.css'
import apostas from '../../dataAposta/users'
import { MdHomeFilled } from 'react-icons/md'
import { FaFireAlt } from 'react-icons/fa'
import { IoTrophySharp } from 'react-icons/io5'
import { GiPresent } from 'react-icons/gi'
import { VscPerson } from 'react-icons/vsc'
import Carrosel6 from '../../components/Carrosel6'

import SpaceMan from '../../images/slots/space.png'
import blackjack from '../../images/slots/blackjack.png'
import bigbass from '../../images/slots/bigbass.png'
import oeste from '../../images/slots/velhoOste.png'
import Good from '../../images/slots/godd.png'
import Zeus from '../../images/slots/zeus.png'
import RipCity from '../../images/slots/ripCity.png'
import Dice from '../../images/slots/dice.png'
import { PiSoccerBallBold, PiSoccerBallLight } from 'react-icons/pi'

//consts
import cassinoVivo from '../../dataAposta/cassinoVivo'
import JogosVivo from '../../dataAposta/JogosVivo'
import slots from '../../dataAposta/Slots'




export default function LobbyCassino() {
    return (

        <div className={style.containerLobby}>
            <div className={style.gridFiltro}>
                <div className={style.filtro}>
                    <a className={style.elementoPage}>
                        <MdHomeFilled size={40} color='white' />
                        <h1>Lobby</h1>
                    </a>
                    <a href='/CassinoAoVivo' className={style.elemento}>
                        <VscPerson size={40} color='white' />
                        <h1>Cassino ao Vivo </h1>
                    </a>
                    <a href='/JogosAoVivo' className={style.elemento}>
                        <GiPresent size={40} color='white' />
                        <h1>Jogos ao Vivo </h1>
                    </a>
                    <a href='/Slots' className={style.elemento}>
                        <FaFireAlt size={40} color='white' />
                        <h1>Slots</h1>
                    </a>
                    <a href='/Esportes' className={style.elemento}>
                        < IoTrophySharp size={40} color='white' />
                        <h1>Esportes</h1>
                    </a>
                </div>
            </div>

            <div className={style.containerApostas}>
                <div className={style.tituloBar}>
                    <h1>Principais Apostas</h1>

                </div>

                <div className={style.caixa}>
                    <div className={style.caixaTituloEsporte}>
                        <PiSoccerBallLight size={50} color='white' />
                        <h1 className={style.esporteTitulo}>Futebol</h1>
                    </div>
                    <div className={style.timesAposta}>

                        {apostas.slice(3, 7).map(aposta => (
                            <a href={`/detalhesSport/${aposta.id}`} className={style.caixaFut} key={aposta.id}>
                                <div className={style.time}>
                                    <div className={style.timeAposta}>
                                        <img src={aposta.imagemTimeCasa} alt="" />
                                        <p className={style.nomeTime}>{aposta.timeCasa}</p>
                                    </div>
                                    <div className={style.meio}>
                                        <p className={style.genero}>{aposta.generoJogo}</p>
                                        <p className={style.xis}>X</p>
                                        <p className={style.horario}>{aposta.horarioJogo}</p>
                                    </div>
                                    <div className={style.timeAposta}>
                                        <img src={aposta.imagemTimeFora} alt="" />
                                        <p className={style.nomeTime}>{aposta.timeFora}</p>
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
                        ))}




                    </div>
                </div>
                <div className={style.caixa}>
                    <div className={style.caixaTituloEsporte}>
                        <IoMdBasketball size={50} color='white' />
                        <h1 className={style.esporteTitulo}>Basquete</h1>
                    </div>
                    <div className={style.timesAposta}>

                        {apostas.slice(14, 19).map(aposta => (
                            <a href={`/detalhesSport/${aposta.id}`} className={style.caixaFut} key={aposta.id}>
                                <div className={style.time}>
                                    <div className={style.timeAposta}>
                                        <img src={aposta.imagemTimeCasa} alt="" />
                                        <p className={style.nomeTime}>{aposta.timeCasa}</p>
                                    </div>
                                    <div className={style.meio}>
                                        <p className={style.genero}>{aposta.generoJogo}</p>
                                        <p className={style.xis}>X</p>
                                        <p className={style.horario}>{aposta.horarioJogo}</p>
                                    </div>
                                    <div className={style.timeAposta}>
                                        <img src={aposta.imagemTimeFora} alt="" />
                                        <p className={style.nomeTime}>{aposta.timeFora}</p>
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
                        ))}




                    </div>
                </div>

            </div>
            <Carrosel6 titulo="Cassino ao Vivo" endereco="DetalhesCassino" videos={cassinoVivo} />
            <Carrosel6 titulo="Jogos ao Vivo"  endereco="DetalhesJogos" videos={JogosVivo} />
            <Carrosel6 titulo="Slots e Jogos" endereco="DetalhesSlot" videos={slots} />
        </div>
    )
}