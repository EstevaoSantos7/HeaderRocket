import style from './style.module.css'
import { SlPresent } from "react-icons/sl";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegComment, FaRegQuestionCircle, FaHome, FaFireAlt } from "react-icons/fa";
import { PiMedalDuotone, PiPokerChipFill, PiBomb, PiSoccerBallFill } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { RiPokerClubsFill, RiPlaneFill, RiPokerSpadesFill } from "react-icons/ri";
import { GiPokerHand } from "react-icons/gi";
import { MdOutlineCasino } from "react-icons/md";
import { TbBallFootball } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { GiPresent } from "react-icons/gi";
import Sobre from '../../pages/Sobre';
import Home from '../../pages/Home'
import Lobby from '../../pages/Lobby';
import { IoIosInformationCircleOutline } from 'react-icons/io';



export default function Sidebar({ open }) {

    return (
        <>
            {open ?
                (
                    <div className={style.sidenav}>
                        <div className={style.elementos}>

                            <a className={style.bloco}>
                                <IoHomeOutline size={25} color='white' />
                                <a href="/">Home</a>
                            </a>
                            <a className={style.bloco}>
                                <PiMedalDuotone size={25} color='white' />
                                <a href="/Ranking">Ranking de Slots</a>

                            </a>
                            <a className={style.bloco}>
                                <IoIosInformationCircleOutline size={30} color='white' />
                                <a href="/termos">Termos De Condição</a>
                            </a>

                            <a className={style.bloco}>
                                <FaRegComment size={25} color='white' />
                                <a href="/central">Ajuda</a>
                            </a>
                            <a className={style.bloco}>
                                <FaRegQuestionCircle size={25} color='white' />
                                <a href="/sobre">Sobre</a>

                            </a>

                            <a className={style.bloco}>
                                <FiUser size={25} color='white' />
                                <a href="/perfil">Conta</a>

                            </a>

                        </div>

                        <div className={style.elementos}>

                            <a className={style.bloco}>
                                <RiPokerSpadesFill size={25} color='white' />
                                <a href="/lobby">Cassino</a>
                            </a>
                        </div>
                        <div className={style.elementos}>

                            <a className={style.bloco}>
                                <GiPresent size={25} color='white' />
                                <a href="/CassinoAoVivo">Cassino ao vivo</a>
                            </a>
                        </div>
                        <a className={style.elementos}>

                            <a className={style.bloco}>
                                <MdOutlineCasino size={25} color='white' />
                                <a href="/JogosAoVivo">Jogos ao Vivo</a>
                            </a>
                        </a>
                        <a className={style.elementos}>

                            <a className={style.bloco}>
                                <FaFireAlt size={25} color='white' />
                                <a href="/Slots">Slots</a>
                            </a>
                        </a>
                        <div className={style.elementos}>

                            <a className={style.bloco}>
                                <PiSoccerBallFill size={25} color='white' />
                                <a href="/Esportes">Esportes</a>
                            </a>
                        </div>



                    </div >



                )
                : (
                    <div className={style.sidebarOverlay}>
                        <div className={style.elementos}>
                            <div className={style.icones}>

                                <a href='/' className={style.caixa}>
                                    <IoHomeOutline size={25} color='white' />
                                </a>
                                <a href='/Ranking' className={style.caixa}>
                                    <PiMedalDuotone size={25} color='white' />

                                </a>
                                <a href='/termos' className={style.caixa}>
                                    <IoIosInformationCircleOutline size={25} color='white' />

                                </a>

                                <a href='/central' className={style.caixa}>
                                    <FaRegComment size={25} color='white' />

                                </a>
                                <a href='/sobre' className={style.caixa}>
                                    <FaRegQuestionCircle size={25} color='white' />

                                </a>

                                <a href='/perfil' className={style.caixa}>
                                    <FiUser size={25} color='white' />

                                </a>
                            </div>

                        </div>

                        <div className={style.elementosFinal}>
                            <div className={style.icones}>
                                <a href='/lobby' className={style.caixa}>
                                    < RiPokerSpadesFill size={25} color='white' />

                                </a>
                                <a href='/CassinoAoVivo' className={style.caixa}>
                                    < GiPresent size={25} color='white' />

                                </a>
                                <a href='/JogosAoVivo' className={style.caixa}>
                                    <MdOutlineCasino size={25} color='white' />

                                </a>
                                <a href='/Slots' className={style.caixa}>
                                    <FaFireAlt size={25} color='white' />

                                </a>
                                <a href='/Esportes' className={style.caixa}>
                                    <PiSoccerBallFill size={25} color='white' />

                                </a>

                            </div>

                        </div>
                    </div>
                )
            }
        </>
    )
}
