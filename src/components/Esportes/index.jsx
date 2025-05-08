import style from './style.module.css';
import apostas from '../../dataAposta/users';
import { PiSoccerBallLight } from 'react-icons/pi'; 

import { MdHomeFilled } from 'react-icons/md'
import { FaFireAlt } from 'react-icons/fa'
import { IoTrophySharp } from 'react-icons/io5'
import { GiPresent } from 'react-icons/gi'
import { VscPerson } from 'react-icons/vsc'
import { IoMdBasketball } from 'react-icons/io';

export default function Esportes() {
    return (
        <div className={style.containerPrincipal}>
              <div className={style.gridFiltro}>
                    <div className={style.filtro}>
                        <a href='/Lobby' className={style.elemento}>
                            <MdHomeFilled size={40} color='white' />
                            <h1>Lobby</h1>
                        </a>
                        <a href='/CassinoAoVivo' className={style.elemento}>
                            <VscPerson size={40} color='white' />
                            <h1>Cassino ao Vivo </h1>
                        </a>
                        <a  href='/JogosAoVivo'  className={style.elemento}>
                            <GiPresent size={40} color='white' />
                            <h1>Jogos ao Vivo </h1>
                        </a>
                        <a  href='/Slots' className={style.elemento}>
                            <FaFireAlt size={40} color='white' />
                            <h1>Slots</h1>
                        </a>
                        <a   className={style.elementoPage}>
                            < IoTrophySharp size={40} color='white' />
                            <h1>Esportes</h1>
                        </a>
                    </div>
                </div>
            <div className={style.containerApostas}>
                

                <div className={style.caixa}>
                    <div className={style.caixaTituloEsporte}>
                        <PiSoccerBallLight size={60} color='white' />
                        <h1 className={style.esporteTitulo}>Futebol</h1>
                    </div>
                    <div className={style.timesAposta}>
                        {apostas.slice(0, 9).map(aposta => (
                            <a href={`/detalhesSport/${aposta.id}`}  className={style.caixaFut} key={aposta.id}>
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
                        ))}
                    </div>
                </div>
                <div className={style.caixa}>
                    <div className={style.caixaTituloEsporte}>
                        <IoMdBasketball size={60} color='white' />
                        <h1 className={style.esporteTitulo}>Basquete</h1>
                    </div>
                    <div className={style.timesAposta}>
                        {apostas.slice(12, 18).map(aposta => (
                             <a href={`/detalhesSport/${aposta.id}`}  className={style.caixaFut} key={aposta.id}>
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
